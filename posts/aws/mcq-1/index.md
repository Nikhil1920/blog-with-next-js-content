---
title: AWS multiple choice questions(MCQ) and answers
published: 2022-01-01T16:22:00
updated: 2022-01-01T16:22:00
tags: ["aws", "aws-mcq"]
---

### Question 1

Your team is working on an API definition which will be deployed using the API gateway service. You then need to ensure that control is established on who can access the various resources within the API gateway. Which of the following can help ensure this security requirement is met?

Select one:\
a. IAM Policies\
b. Resource Policies\
c. IAM Roles\
d. Key Policies

The correct answer is: IAM Policies

### Question 2

As a developer you are looking at making use of AWS Cognito Sync. Which of the below are features of this service. Choose 2 answers from the options given below

Select one:\
a. Cross-device syncing of application-related user data\
b. Synching of offline data back to AWS\
c. Sync data with DynamoDB\
d. Push Sync Notification

The correct answers are: Cross-device syncing of application-related user data, Push Sync Notification

### Question 3

Your team lead has finished creating a build project in the console. You have access to run the build but not to access the project. You want to specify a different source location for the build. How can you achieve this?

Select one:\
a. Specify the new location of the build in the buildspec.yml file and issue the update-project command\
b. Specify the new location of the build in the buildspec.yml file and use the update-build command\
c. Issue the update project command and specify the new location of the build\
d. Specify the new location of the build in the buildspec.yml file and use the start-build command

The correct answer is: Specify the new location of the build in the buildspec.yml file and use the start-build command

### Question 4

As a developer , you have enabled server logging on an S3 bucket. You have a simple static web page with CSS pages uploaded to the bucket which is 1 MB in total size. After a duration of 2 weeks , you come back and see that the size of the bucket has increased to 50MB. Which of the following could be a reason for this?

Select one:\
a. This is the normal behaviour since the logs are being delivered to the same bucket\
b. You have enabled CRR on the bucket as well , that is why the space is being consumed\
c. Monitoring has been enabled for the bucket\
d. You have enabled Encryption on the bucket as well , that is why the space is being consumed

The correct answer is: This is the normal behaviour since the logs are being delivered to the same bucket

### Question 5

You have developed an application that is putting custom metrics into Cloudwatch. You need to generate alarms on a 10 second interval based on the published metrics. Which of the following needs to be done to fulfil this requirement?

Select one:\
a. Create standard resolution metrics\
b. Enable detailed monitoring\
c. Create high resolution metrics\
d. Enable basic monitoring

The correct answer is: Create high resolution metrics

### Question 6

Which of the following programming languages are officially supported AWS SDk’s. Choose 2 answers from the options below

Select one or more:\
a. C\
b. Lisp\
c. Ruby\
d. Python

The correct answers are: Ruby, Python

### Question 7

Company A is writing 5 items to the products table every second. Each item is 20Kb in size. What would be the required provisioned write throughput for best performance? Choose the correct answer from the options below.

Select one:\
a. 100\
b. 155\
c. 160\
d. 16

The correct answer is: 100

### Question 8

As per the IAM decision logic what is the first step of access permissions for any resource in AWS. Choose the correct answer from the options below

Select one:\
a. A default deny\
b. An explicit deny\
c. An allow\
d. An explicit allow

The correct answer is: A default deny

### Question 9

A company is making use of the Simple Notification service to send notifications to various subscribers for their service. There is a user requirement for the subscriber to only receive certain types of messages and not all messages published to the topic. How can you achieve this?

Select one:\
a. By adding a filter policy to the topic\
b. Publish the messages to a Lambda function\
c. By adding an IAM policy to the topic\
d. Publish the messages to an SQS queue

The correct answer is: By adding a filter policy to the topic

### Question 10

Company B is writing 10 items to the products table every second. Each item is 15.5Kb in size. What would be the required provisioned write throughput for best performance? Choose the correct answer from the options below.

Select one:\
a. 16\
b. 10\
c. 160\
d. 155

The correct answer is: 160

### Question 11

Your team has been instructed to host a static web site in AWS. Your team has developed the web site and is now planning on using an S3 bucket to host the static web site. Which of the following are the minimum list of steps to host a static web site using an S3 bucket? Choose 3 answers from the options given below

Select one or more:\
a. Configure an Index document\
b. Configure an Error document\
c. Enable web site hosting on the bucket\
d. Configure permissions for web site access

The correct answers are: Enable web site hosting on the bucket, Configure an Index document, Configure permissions for web site access

### Question 12

Your company is planning on using the Simple Storage service to host objects that will be accessed by users. There is a speculation that there would be roughly 6000 GET requests per second. Which of the following could be used to ensure optimal performance? Choose 2 answers from the options given below?

Select one or more:\
a. Enable Cross Region Replication for the bucket\
b. Use hash key prefixes for the object keys\
c. Enable versioning for the objects\
d. Use a Cloudfront distribution in front of the S3 bucket

The correct answers are: Use a Cloudfront distribution in front of the S3 bucket, Use hash key prefixes for the object keys

### Question 13

A developer has written an application that will be deployed by a company. The application is used to read and write objects to an S3 bucket. It is expected that the number of reads could exceed 400 requests per second. What should the developer do to ensure that the requests are handled accordingly.

Select one:\
a. Enable Cross region replication for the bucket\
b. Ensure that the application uses a hash prefix when writing the data to the bucket\
c. Ensure that the application uses a hash suffix when writing the data to the bucket\
d. Enable versioning for the underlying bucket

The correct answer is: Ensure that the application uses a hash prefix when writing the data to the bucket

### Question 14

Which EC2 API call would you use to retrieve a list of Amazon Machine Images (AMIs)? Choose an answer from the options below

Select one:\
a. GetAMls\
b. DescribeAMls\
c. DescribeInstances\
d. DescribeImages

The correct answer is: DescribeImages

### Question 15

Your company is developing an application that will primarily be used by users on their mobile devices. The users need to have the ability to authenticate themselves via identity providers such as Facebook. Which of the following service should be used for user management?

Select one:\
a. AWS SAML\
b. AWS STS with IAM\
c. AWS Cognito\
d. AWS Federation

The correct answer is: AWS Cognito

### Question 16

Your company is developing an application that will primarily be used by users on their mobile devices. The users need to have the ability to authenticate themselves via identity providers through Security Assertion Markup Language 2.0 . Which of the following service should be used for user management?

Select one:\
a. AWS Cognito Identity pools\
b. AWS STS with IAM\
c. AWS Security pools\
d. AWS IAM pools

The correct answer is: AWS Cognito Identity pools

### Question 17

Your company currently has an S3 bucket hosted in an AWS Account. It holds information that needs be accessed by a partner account. Which is the MOST secure way to allow the partner account to access the S3 bucket in your account. Choose 3 answers from the options given below

Select one or more:\
a. Ensure the partner uses an external id when making the request\
b. Provide the ARN for the role to the partner account\
c. Ensure an IAM role is created which can be assumed by the partner account\
d. Ensure an IAM user is created which can be assumed by the partner account.

The correct answers are: Ensure an IAM role is created which can be assumed by the partner account, Ensure the partner uses an external id when making the request, Provide the ARN for the role to the partner account

### Question 18

You’ve been asked to develop an application on the AWS Cloud. The application will be used to store confidential documents in an S3 bucket. You need to ensure that the bucket is defined in such a way that it does not accept objects that are not encrypted?

Select one:\
a. Ensure a condition is set in the bucket policy.\
b. Ensure that a condition is set in an IAM policy.\
c. Enable MFA for the underlying bucket\
d. Enable CORS for the underlying bucket

The correct answer is: Ensure a condition is set in the bucket policy.

### Question 19

Which of the following are the responsibility of AWS. Choose 2 answers from the options below

Select one or more:\
a. Patching the OS on the running EC2 instance\
b. Virtualization Infrastructure\
c. Physical security of AWS data centers\
d. Managing security groups

The correct answers are: Virtualization Infrastructure, Physical security of AWS data centers

### Question 20

An application is currently in production that makes calls to an AWS RDS Instance. The application consists of a reporting module and a transactional system. During high load times, the response time for the application used to get very high. This was being attributed to the number of queries being fired against the database system. Which of the following can be used to resolve the response time for the application?

Select one:\
a. Place a cloudfront distribution in front of the database\
b. Enable Read Replica’s for the database\
c. Enable Multi-AZ for the database\
d. Move the database to DynamoDB

The correct answer is: Enable Read Replica’s for the database

### Question 21

Your company is planning on using the Simple Storage service to host objects that will be accessed by users. In order to ensure optimal performance when requests are made to get the objects from the bucket, which of the following is the right way to use define the keys for optimal performance?

Select one:\
a. demoawsbucket/232a-2019-14-03-15-00-00/ Image1.jpg\
b. demoawsbucket/2019-14-03-15-00-00/Image1.jpg\
c. demoawsbucket/sample/232a-2019-14-03-15-00-00 Image1.jpg\
d. demoawsbucket/sample/ Image1.jpg

The correct answer is: demoawsbucket/232a-2019-14-03-15-00-00/ Image1.jpg

### Question 22

A company is storing sensitive data in their S3 bucket. The company policy states that all objects in the S3 bucket need to be encrypted at rest. Which of the following help ensure this policy is met?

Select one:\
a. Deny permission to upload an object if the header does not include x-amz-server-side-encryption\
b. Deny permission to upload an object if the header does not include x-allow-encryption\
c. Deny permission to upload an object if the header includes x-allow-encryption\
d. Deny permission to upload an object if the header includes x-amz-server-side-encryption

The correct answer is: Deny permission to upload an object if the header does not include x-amz-server-side-encryption

### Question 23

A developer has created a script which access an S3 bucket. The script will run on an EC2 Instance at regular intervals. What is the authentication mechanism that should be employed to ensure that the script works as desired?

Select one:\
a. Create an IAM user. Ensure the IAM user has access to the S3 bucket via IAM policies. Embed the Access keys as environment variables for the Instance.\
b. Create an IAM user. Ensure the IAM user has access to the S3 bucket via IAM policies. Embed the user name and password in the script\
c. Create an IAM Role. Ensure the IAM Role has access to the S3 bucket via IAM policies. Attach the role to the instance\
d. Create an IAM user. Ensure the IAM user has access to the S3 bucket via IAM policies. Embed the Access keys to the program.

The correct answer is: Create an IAM Role. Ensure the IAM Role has access to the S3 bucket via IAM policies. Attach the role to the instance

### Question 24

You’ve been asked to migrate a static web site onto AWS. You have been told that the solution should be COST effective. Which of the following solutions would you consider?

Select one:\
a. Deploy the web site using S3 static web site hosting\
b. Create an Opswork stack and deploy the web site\
c. Create an Elastic Beanstalk environment and deploy the web site\
d. Create an EC2 Instance and deploy the web site

The correct answer is: Deploy the web site using S3 static web site hosting

### Question 25

You are using a custom tool known as POSTMAN to make API requests to resources in AWS. Part of the job of sending requests is to sign the request. Which of the following would you use to sign the API requests made to AWS?

Select one:\
a. A private key file\
b. KMS keys\
c. Access Keys\
d. Your user name and password

The correct answer is: Access Keys

### Question 26

As a developer, you are writing an application that will be hosted on an EC2 Instance. This application will interact with a queue defined using the Simple Queue service. The messages will appear in the queue during a 20-60 second time duration. Which of the following strategy should be used to effectively query the queue for messages?

Select one:\
a. Use long polling\
b. Use FIFO queues\
c. Use dead letter queues\
d. Use short polling

The correct answer is: Use long polling

### Question 27

You’ve just started development on an application that will make use of the ElastiCache service. You need to ensure that objects are cached but not kept inadvertently for a long time. Which of the following cache maintenance strategy would you employ for the cache service?

Select one:\
a. Lazy Loading\
b. TTL\
c. Read Through\
d. Write Through

The correct answer is: TTL

### Question 28

A static web site has been hosted on a bucket and is now being accessed by users. One of the web pages javascript section has been changed to access data which is hosted in another S3 bucket. Now that same web page is no longer loading in the browser. Which of the following can help alleviate the error?

Select one:\
a. Change the Bucket policy for the bucket to allow access from the other bucket\
b. Enable Replication so that the objects get replicated to the other bucket\
c. Enable versioning for the underlying S3 bucket.\
d. Enable CORS for the bucket

The correct answer is: Enable CORS for the bucket

### Question 29

A Developer has been asked to create an AWS Elastic Beanstalk environment for a production web application which needs to handle thousands of requests. Currently the dev environment is running on a t1 micro instance. How can the Developer change the EC2 instance type to m4.large?

Select one:\
a. Change the instance type to m4.large in the configuration details page of the Create New Environment page.\
b. Change the instance type value for the environment to m4.large by using update autoscaling group CLI command.\
c. Create a configuration file in Amazon S3 with the instance type as m4.large and use the same during environment creation.\
d. Use CloudFormation to migrate the Amazon EC2 instance type of the environment from t1 micro to m4.large.

The correct answer is: Create a configuration file in Amazon S3 with the instance type as m4.large and use the same during environment creation.

### Question 30

You have defined some custom policies in AWS. You need to test out the permissions assigned to those policies. Which of the following can be used for this purpose via the CLI? Choose 2 answers from the options given below

Select one or more:\
a. simulate-custom-policy command\
b. Use the aws iam get-custom-policy command\
c. Get the context keys first\
d. Get the AWS IAM Access keys first

The correct answers are: Get the context keys first,
simulate-custom-policy command
