# Facebook Clone

This project is a React clone of the facebook.com website, bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with improved optimizations for mobile devices.

## Available Scripts

In the project directory, you can run the following yarn scripts:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Application Features

### Authentication

User authentication is handled by [Firebase Authention](https://firebase.google.com/docs/auth) using [Google Authentication](https://firebase.google.com/docs/auth/web/google-signin) as an authentication provider. Google Authentication was chosen to simplify the retrieval of profile images for users without requiring additional data storage complexity.

### Data Storage

Data storage is handled by the [Firebase Firestore Database](https://firebase.google.com/docs/firestore). The Firestore Database was chosen to eliminate the need to host a separate database. Firestore also simplifies the implementation of real-time component updates to database events.

### Important Packages

**[Firebase](https://firebase.google.com/docs)**

A module to interact with the Firebase Authentication and Firestore Database apis.

**[Material Icons](https://mui.com/components/material-icons/)**

A React compatible Material UI icon library used throughout the application.
