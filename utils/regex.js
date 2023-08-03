const REGEXP_URL = /^https?:\/\/[a-z0-9\-._~:/?#[\]@!$&'()*+,;=]+\.[a-z0-9\-._~:/?#[\]@!$&'()*+,;=]+#?$/i;
const REGEXP_EMAIL = /^[a-zA-Z0-9]([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+){1,}\.([a-zA-Z]+)$/;

module.exports = { REGEXP_URL, REGEXP_EMAIL };
