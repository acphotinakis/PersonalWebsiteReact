const { override, addBabelPlugins } = require('customize-cra');

const rootImportConfig = [
    'babel-plugin-root-import',
    {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
    },
];

module.exports = override(
    // Add the root-import Babel plugin
    ...addBabelPlugins(rootImportConfig)
);
