const proxy = () => ({
  target: 'http://localhost:8080',
  secure: false,
});

export default (publicPath) => ({
  port: 8000,
  inline: true,
  progress: true,
  stats: 'minimal',
  historyApiFallback: {
    index: publicPath,
  },
  proxy: {
    '/api': proxy(),
  },
});
