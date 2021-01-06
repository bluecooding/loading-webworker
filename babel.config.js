module.exports = function(api) {

  api.cache(true);

  const presets = [

    [
      "@babel/preset-env",
      {
        "targets": "defaults",
        "useBuiltIns": "entry",
        "corejs":3,
        "shippedProposals": true
    }
    ]
  ];

  const plugins = [
    "@babel/plugin-transform-classes",
    "@babel/plugin-proposal-class-properties",
    [
      "@babel/plugin-transform-arrow-functions",
      {
        "spec" : false,
      }
    ],
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": 3,
        "helpers": true,
        "regenerator": true,
        "useESModules": false
      }
    ]
  ];

  return {
    presets,
    plugins,
  }
};
