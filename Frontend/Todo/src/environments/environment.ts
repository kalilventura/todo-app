// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyD_6iEue_oyK279UKzmmePiWyE_VVwcN4o',
    authDomain: 'todoapi-d5966.firebaseapp.com',
    databaseURL: 'https://todoapi-d5966.firebaseio.com',
    projectId: 'todoapi-d5966',
    storageBucket: 'todoapi-d5966.appspot.com',
    messagingSenderId: '606311640424',
    appId: '1:606311640424:web:b02dd3ce602b0ce89cbadd'
  },
  baseUrlApi: 'http://localhost:5000'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
