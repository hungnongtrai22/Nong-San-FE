// routes

// API
// ----------------------------------------------------------------------

export const HOST_API = process.env.REACT_APP_HOST_API;
export const ASSETS_API = process.env.REACT_APP_ASSETS_API;

export const FIREBASE_API = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};

export const AMPLIFY_API = {
  userPoolId: '',
  userPoolWebClientId: '',
  region: '',
};

export const AUTH0_API = {
  clientId: '',
  domain: '',
  callbackUrl: '',
};

export const MAPBOX_API = '';

// ROOT PATH AFTER LOGIN SUCCESSFUL
// export const PATH_AFTER_LOGIN = paths.dashboard.root; // as '/dashboard'
export const PATH_AFTER_LOGIN = "about-us"; // as '/dashboard'
