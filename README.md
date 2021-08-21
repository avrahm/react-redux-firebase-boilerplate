# React Redux Firebase Boilerplate

The repo stores a boilerplate with React.js for frontend, Redux for state management, and Firebase for user authentication.

### 1. To get started: 
 - clone the repo ```git clone https://github.com/avrahm/react-redux-firebase-boilerplate.git```
 - ```cd``` into the directory labelled _react-redux-firebase-boilerplate_
 - Inside the directory run ```yarn``` to install the node_modules

### 2. **Required: Before running the app, you will need to create a _firebaseConfig_ file
- Navigate to [firebase.google.com](https://firebase.google.com)
   1. Create a new web project. Follow Step 1 and 2 of the [official Google Documentation](https://firebase.google.com/docs/web/setup)
   2. After setting up the project, navigate to Authentication on Firebase and enable Email/Password
   3. Lastly, enable the Firestore Database to store data

### 3 . Add the _firebaseConfig_ in the firebase directory of the _src_ directory

### 4 . Run the app with ```yarn start```

### Tips
- This repo has functioning persist user logic that maintains the user state. If the web app reload, Firebase auth checks for an acitve user object and maintains the  logged in state. 

- Use the componenent PrivateRoute.js to control components that require a signed in user. When a private route is selected they will be reroute to the HomePage unless a user is logged in.
 
    ```<PrivateRoute path='/example' component={ExamplePage} />```
