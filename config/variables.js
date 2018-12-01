const title = 'Title';
const shortName = 'Short Name';
const tagline = 'tagline';
const description = tagline;
const keywords = 'keyword';

module.exports = {
  login: true,
  seo: {
    title,
    description,
    keywords,
  },
  manifest: {
    seed: {
      'short_name': shortName,
      'name': title,
      'start_url': '/',
      'background_color': '#000000',
      'display': 'standalone',
      'theme_color': 'orange',
      "icons": [
        {
          "src": "/img/logo-192.png",
          "type": "image/png",
          "sizes": "192x192",
        },
        {
          "src": "/img/logo-512.png",
          "type": "image/png",
          "sizes": "512x512",
        },
      ],
    },
  },
  navbar: {
    title,
    tagline,
  },
  ports: {
    wdsPort: 9000,
    serverPort: 9001,
  },
  dist: '_dist',
  firebaseConfig: {
    apiKey: process.env.FIREBASE_API,
    authDomain: "londonz-stage.firebaseapp.com",
    databaseURL: "https://londonz-stage.firebaseio.com",
    projectId: "londonz-stage",
    storageBucket: "londonz-stage.appspot.com",
    messagingSenderId: "1052545227182",
  },
};
