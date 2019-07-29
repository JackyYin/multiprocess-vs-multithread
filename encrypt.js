const crypto = require('crypto');

const encrypt = (payload) => {
  const secret = 'abcdefg';
  return crypto.createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
}

module.exports = encrypt;
