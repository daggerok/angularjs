import {
  version,
  isGhpages,
  isProdOrGhpages,
} from './project.config.babel';

export const suffix = `v=${version}`;

export const publicPath = isGhpages ? '/angularjs/' : '/';

export default {
  path: './dist',
  filename: `[name].js?${suffix}`,
  chunkFilename: `[id].chunk.js?v${suffix}`,
  sourceMapFilename: isProdOrGhpages ? false : `[file].map?${suffix}`,
  jsonpFunction: 'w',
  publicPath,
};
