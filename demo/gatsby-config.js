require('dotenv').config();

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-chec',
      options: {
        token: process.env.CHEC_PUBLIC_KEY,
      },
    },
  ],
};