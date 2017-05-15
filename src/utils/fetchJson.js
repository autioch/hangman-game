const HTTP_OK = 200;
const HTTP_ERROR = 400;

function fetchPolyfill(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.onload = function() { // eslint-disable-line func-names
      if (request.status >= HTTP_OK && request.status < HTTP_ERROR) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(request.statusText);
      }
    };
    request.onerror = reject;
    request.open('GET', url, true);
    request.send();
  });
}

function windowFetch(url) {
  return window.fetch(url).then((response) => response.json());
}

function isFetchAvailable() {
  const isWindow =new Function("try {return this===window;}catch(e){ return false;}")();

  return isWindow && window.fetch && typeof window.fetch === 'function';
}

/**
 * Fetches and parsed Json from given url. Window.fetch is not supported in some browsers.
 * @param  {String} url Address to query for data.
 * @return {Promise}    Promise resolving to parsed data recieved in the request.
 */
module.exports = isFetchAvailable() ? windowFetch : fetchPolyfill;
