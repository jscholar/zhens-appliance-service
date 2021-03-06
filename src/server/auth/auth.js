const {
  EMAIL_USER,
  CLIENT_ID,
  CLIENT_SECRET,
  REFRESH_TOKEN,
} = process.env;

const auth = {
  type: 'OAuth2',
  user: EMAIL_USER,
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  refreshToken: REFRESH_TOKEN,
};

module.exports = auth;
