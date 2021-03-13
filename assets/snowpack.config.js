const httpProxy = require('http-proxy')
const proxy = httpProxy.createServer({ target: 'http://localhost:3000' })

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
  ],
  routes: [
    // Proxy API requests in development
    {
      src: '/api/.*',
      dest: (req, res) => {
        proxy.web(req, res);
      },
    },
    {
      'match': 'routes',
      'src': '.*',
      'dest': '/index.html'
    },
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018'

  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
