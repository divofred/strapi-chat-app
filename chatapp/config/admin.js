module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e3a59c723bbcdd558cf1336f462467f4'),
  },
});
