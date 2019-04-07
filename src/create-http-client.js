import https from 'https';
import axios from 'axios';
import qs from 'qs';

import cert from './cacert.pem';

import { version } from '../package.json';

/**
 * Create pre-configured httpClient instance
 * @private
 */
export default function createHttpClient(options = {}) {
  options.baseURL = 'https://api.mollie.com:443/v2/';

  options.headers = Object.assign({}, options.headers, {
    Authorization: `Bearer ${options.apiKey}`,
    'Accept-Encoding': 'gzip',
    'Content-Type': 'application/json',
    'User-Agent': `node.js/${process.version}`,
    'X-Mollie-User-Agent': `mollie/${version}`,
  });

  options.httpsAgent = new https.Agent({
    cert: cert,
  });

  options.paramsSerializer = options.paramsSerializer || qs.stringify;

  return axios.create(options);
}
