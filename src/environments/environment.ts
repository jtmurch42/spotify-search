// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

declare const wp: any;

export const environment = {
  production: false,
  spotifySearchApiUrl: 'https://17w8hco3h7.execute-api.us-west-2.amazonaws.com/v1',
  spotifySearchApiKey: wp.env.SPOTIFY_SEARCH_API_KEY
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
