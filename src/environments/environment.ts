// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyCrbDditq1j3JPvAmrRg2CU5OCFmcWXrCY",
    authDomain: "recurringpayments-ng.firebaseapp.com",
    databaseURL: "https://recurringpayments-ng.firebaseio.com",
    projectId: "recurringpayments-ng",
    storageBucket: "recurringpayments-ng.appspot.com",
    messagingSenderId: "897131677284"
  }
};
