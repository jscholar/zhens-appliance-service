/* eslint-disable global-require */

const API_URL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC2I3FSzwLyC3Lf3jdf8yGcpimJi_g9IV8';

let loadPromise;
let $script = null;

const loadMap = () => {
  if (!loadPromise) {
    loadPromise = new Promise((resolve, reject) => {
      if (window === undefined) {
        reject(new Error('cannot load outside of browser env'));
        return;
      }

      /* Prevents references to browser env variables on server side */
      if (!$script) {
        $script = require('scriptjs');
      }

      if (window.google && window.google.maps) {
        resolve(window.google.maps);
      }

      $script(API_URL, () => {
        if (window.google && window.google.maps) {
          resolve(window.google.maps);
        } else {
          reject(new Error('Failed to load maps'));
        }
      });
    });
  }

  return loadPromise;
};

export default loadMap;
