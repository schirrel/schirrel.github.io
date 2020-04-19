//! Request.js
//! authors : Alan Balen Schio - @schirrel
//! license : MIT

const merge = (first, second) => Object.assign({}, first, second);

const GET = { method: 'GET' };
const PUT = { method: 'PUT' };
const POST = {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
};
const DELETE = { method: 'DELETE' };

export default class Request {

   /**
   * Method to convert object into search params into the URL
   * @param {String} url
   * @param {Object} params
   * @returns the url with query params
   */
  static QueryURL(uri, params) {
    let url = new URL(uri);
    let urlParams = new URLSearchParams(params).toString();
    url.search = urlParams;
    return url;
  }

  static getResponseByType(response) {
    
    switch (response.type) {
      case 'basic':
      case 'text':
        return response.text();
      case 'json':
      case 'cors':
        return response.json();
      default:
        return response.body();
    }
  }
  static getResponseByContentType(response) {
    if (/(application\/json)/.test(response.headers.get('content-type'))) {
      return response.json();
    } else if (/(text)/.test(response.headers.get('content-type'))) {
      return response.text();
    }
    return response.body();   
  }
  
   /**
   * Method that valide response type to return the correct method
   * @param {String} url
   * @param {Object} options
   * @returns the response body
   */
  static getResponse(response, resolve, reject) {
    if (!!response.headers.get('content-type')) {
      return this.getResponseByContentType(response)
    }   
      return this.getResponseByType(response)
  };
   /**
   * Method that perform the request
   * @param {String} url
   * @param {Object} options
   * @returns the request promisse
   */
  static async request(url, options) {
    return new Promise(async (resolve, reject) => {
      try {
        if (options && options.body && typeof options.body !== 'string') {
          options.body = JSON.stringify(options.body);
        }
        // TODO Implements here interceptor before request
        let response = await fetch(url, options);
        if (response.status > 400) {
          throw new Error(
            JSON.stringify({
              status: response.status,
              statusText: response.statusText,
            })
          );
        } else {
          resolve(this.getResponse(response));
        }
      } catch (err) {
        reject(err);
      } finally {
        // TODO Implements here interceptor after request done
      }
    });
  }
  /**
   * Method to mount URL to request
   * @param {String} url
   * @param {Object} params
   * @returns the url with query params
   */
  static mountURL(url, params) {
    if (params && Object.keys(params).length) {
      url = this.QueryURL(url, params);
    }
    return url;
  }
  /**
   * Fetch API wrapper for GET method
   * @param {String} url
   * @param {Object} params
   * @param {Object} options
   * @returns Promise
   */
  static get(url, params = {}, options = {}) {
    return this.request(this.mountURL(url, params), merge(GET, options));
  }
  /**
   * Fetch API wrapper for POST method
   * @param {String} url
   * @param {Object} options
   * @returns Promise
   */
  static post(url, options = {}) {
    return this.request(url, merge(POST, options));
  }
  /**
   * Fetch API wrapper for PUT method
   * @param {String} url
   * @param {Object} options
   * @returns Promise
   */
  static put(url, options = {}) {
    return this.request(url, merge(PUT, options));
  }
  /**
   * Fetch API wrapper for DELETE method
   * @param {String} url
   * @param {Object} options
   * @returns Promise
   */
  static delete(url, options = {}) {
    return this.request(url, merge(DELETE, options));
  }
}
