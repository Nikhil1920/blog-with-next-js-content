---
title: Create and Connect to EC2 instance Through Different Methods
published: 2022-01-25T08:26:00
updated: 2022-01-25T08:26:00
draft: true
tags: ["aws", "ec2"]
---

## Create a new EC2 instance through the AWS Console

<a href="https://console.aws.amazon.com/ec2/v2/home#Instances:" target="_blank">click here to go to your ec2 console</a>

In the top right corner of the screen click on the Launch instances button to create new instance.

![ec2-launch-instance](chrome_WDseFTLKyn.png)

Select your preferred image I will be using ubuntu 20.04 LTS.

![ec2-ubuntu-20.04-LTS](chrome_JmVyjhZTQ3.png)

I will be using t2.micro instance type as it is free tier eligible.

After selecting instance type click on review and launch button. If you need to any other configuration changes for your use case like adding more storage you can do so by clicking next and editing the configuration.

In the review screen select Configure security group.

![ec2-configure-security-group](chrome_CrIbb6vReM.png)

In the configure security group section we can add new security group or select an existing security group.

We will be creating a new security group for our use case and adding the following rules:

- Allow All traffic from anywhere
- Allow ssh traffic from anywhere to port 22

Ideally we should be allowing only the http traffic on port 80 and should be using a proxy like nginx but for the sake of simplicity I am allowing all traffic on all ports and will be sending the traffic directly to our gunicorn server.

Let us name our security group as `web-server`

After security group configuration it should look like this:
![ec2-security-group](chrome_YzAbf25kpp.png)

Click on Review and launch button.

Now review the instance details and click on Launch button.
![ec2 Launch final](chrome_QGcIR1nrYN.png)

You will get a popup to define your key-pair.

You can either select an existing key-pair or create a new key-pair.

If you are selecting an existing key-pair make sure you have access to the key-pair you are selecting.

I will be creating a new key-pair for this use case.

Select the Create new key-pair option and enter a name for the key-pair.

Then click on Download key-pair button to download your key-pair.

make sure you keep the key-pair file in a safe place using this anyone can access your ec2 instance.

![ec2-key-pair](chrome_S35hQrM2Rx.png)

After this click Launch Instances to launch your ec2 instance.

You can see that you instance is being created.

Go to your <a href="https://console.aws.amazon.com/ec2/v2/home#Instances:" target="_blank">ec2 console</a> you can see a new instance is being created after some time it's state will be running.
