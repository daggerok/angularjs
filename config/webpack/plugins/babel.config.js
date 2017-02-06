module.exports = {
  presets: [
    ['es2015', { modules: 'commonjs' }],
    'stage-0',
  ],
  plugins: [
    'syntax-dynamic-import',
    'add-module-exports',
  ],
};
