module.exports = {
  seo: {
    title: 'Title',
    description: 'Description',
    keywords: 'keyword',
  },
  manifest: {
    seed: {
      'short_name': 'Short name',
      'name': 'Title',
      'start_url': '/',
      'background_color': '#000000',
      'display': 'standalone',
      'theme_color': 'orange',
    },
  },
  navbar: {
    title: 'Navbar title',
    tagline: 'Navbar tagline',
  },
  ports: {
    wdsPort: 9000,
    serverPort: 9000,
  },
  dist: '_dist',
};
