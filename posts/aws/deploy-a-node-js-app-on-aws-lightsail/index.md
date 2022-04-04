---
title: Deploy a Node.js App on AWS Lightsail
published: 2022-03-23T01:07:00
updated: 2022-03-23T01:07:00
tags: ["aws", "aws-lightsail", "nodejs"]
---

## Step - 1: Install Node.js

Install nodejs on your ubuntu vps using the following command:

```
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## Step - 2: Install nginx

Install nginx on your ubuntu vps using the following command:

```
sudo apt-get install nginx
```

## Step - 3: Install pm2

pm2 is a process manager for nodejs. Install pm2 using the following command:

```
sudo npm install pm2 -g
```

using pm2 we can run our nodejs application in the background.

To start pm2 on server startup, we need to run the following command:

```
pm2 startup systemd
```

Follow the output of the above command to configure pm2 to start on server startup.

## Clone your project repository

I will be using the [node-simple-signin-signup](https://github.com/Nikhil1920/node-simple-signin-signup) repository.

clone the repository using the following command:

```
git clone https://github.com/Nikhil1920/node-simple-signin-signup
```

After cloning the repository cd into the directory and run the `npm install` command to install all the dependencies

start the node server using the following command:

```
pm2 start app.js
```

## Configure nginx to serve the node server

Let's configure nginx to serve the node server.

```
sudo nano /etc/nginx/sites-available/default
```

within the server block, there will be a **location** block. find the **location** block and replace it with the following content:

```
location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

your node app will now be available on your server public address

## Some useful pm2 commands

To see the list of all the running processes, run the following command:

```
pm2 list
```

To stop an application, run the following command:

```
pm2 stop <app_name_or_id>
```

To restart an application, run the following command:

```
pm2 restart <app_name_or_id>
```

To see the logs of a process, run the following command:

```
pm2 logs <process_name>

# Display all apps logs in realtime
pm2 logs
```
