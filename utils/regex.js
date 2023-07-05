const REGEXP_URL = /^https?:\/\/[a-z0-9\-._~:\/?#[\]@!$&'()*+,;=]+\.[a-z0-9\-._~:/?#[\]@!$&'()*+,;=]+#?$/i;
const REGEXP_EMAIL = /^[a-z0-9\-._~:/?#[\]@!$&'()*+,;=]+@[a-z0-9\-._~:/?#[\]@!$&'()*+,;=]+\.[a-z]+$/i;

module.exports = { REGEXP_URL, REGEXP_EMAIL };
