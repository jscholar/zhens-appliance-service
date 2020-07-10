import $script from 'scriptjs';

const API_URL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC2I3FSzwLyC3Lf3jdf8yGcpimJi_g9IV8&libraries=&v=weekly';

let loadPromise;

const loadMap = () => {
  if (!loadPromise) {
    loadPromise = new Promise((resolve, reject) => {
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
