# Mongoose Node.js Template
Mongoose Node.js Template. A Template for Mongoose using Node.js (Mongoose is an MongoDB object modeling package).
# Setup
### MongoDB Connection Setup
#### Get your URI
- Go to [mongodb.com](https://mongodb.com).
- Click "Build a Cluster".
- Select "Shared Clusters" and click "Create a Cluster".
- Select your preferred Cloud Provider & Region.
- Select "M0 Sandbox" for cluster tier.
- Type in a name for your cluster.
- Click "Create Cluster" to deploy the cluster.
- Click "Network Access" on the left side of the screen in the navigation menu.
- Click "Add IP Address".
- Type "0.0.0.0" in the textbox next to the words "Access List Entry".
- Click Confirm.
- Click "Database Access" on the left side of the screen in the navigation menu.
- Click "Add New Database User".
- In the first textbox, type in the Username you want ("Admin" is preferred). In the second textbox, enter the password you want.
- Click "Add User".
- Click "Databases" on the left side of the screen in the navigation menu.
- Click "Browse Collections".
- Click "Create Database".
- Type in the Database name and the name of the collection you're going to use.
- Click "Create".
#### Adding the URI to Your Code
- Go to the project where you're setting up MongoDB.
- Go to /data/mongo.js
- Replace '<Mongo_URI>' with 'mongodb+srv://<DATABASE_ACCESS_USERNAME>:<DATABASE_ACCESS_PASSWORD>@<CLUSTER_NAME>.p4unt.mongodb.net/<DATABASE_NAME>?retryWrites=true&w=majority'.
### You are now setup! Run your code! 
