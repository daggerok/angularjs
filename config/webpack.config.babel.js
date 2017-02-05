import entry from './webpack/entry.config.babel';
import output from './webpack/output.config.babel';
import resolve from './webpack/resolve.config.babel';
import plugins from './webpack/plugins.config.babel';
import module from './webpack/module.config.babel';
import postcss from './webpack/postcss.config.babel';
import eslint from './webpack/eslint.config.babel';
import node from './webpack/node.config.babel';
import devServer from './webpack/webpacl-dev-server.babel';
import { isProdOrGhpages } from './webpack/project.config.babel';

export default {
  entry,
  output,
  module,
  plugins,
  resolve,
  postcss,
  devServer,
  profile: 'web',
  devtool: isProdOrGhpages ? false : '#source-map',
  eslint,
  node,
};
