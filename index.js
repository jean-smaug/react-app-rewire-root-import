const { injectBabelPlugin } = require("react-app-rewired");

function rewireImport(
  config,
  env,
  importBabelOptions = { rootPathSuffix: "src" }
) {
  config = injectBabelPlugin(["root-import", importBabelOptions], config);
  return config;
}

module.exports = rewireImport;
