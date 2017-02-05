import { isProdOrGhpages } from '../project.config.babel';

export default {
  'process.env': {
    'DEVELOPMENT': !isProdOrGhpages,
    'NODE_ENV': JSON.stringify(isProdOrGhpages ? 'production' : 'development'),
  },
};
