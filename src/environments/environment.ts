// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDVCUnO2OShzWK3H29bx5fQiZWoNw3CB44',
    authDomain: 'localhost',
    databaseURL: 'http://localhost:9000/?ns=readymaker-bfb5f',
    projectId: 'readymaker-bfb5f',
    storageBucket: 'gs://readymaker-bfb5f.appspot.com/',
    messagingSenderId: '329721838987',
    appId: '1:329721838987:web:8740d0973b8f070838c38e',
    // measurementId: '<your-measurement-id>',
  },
  useEmulators: true,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
