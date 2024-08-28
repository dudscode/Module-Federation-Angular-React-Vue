
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { shareAll } = require('@angular-architects/module-federation/webpack');
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const manifest = require("./src/mf.manifest.json");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '/tsconfig.json'),
  []  
);

module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: "auto",
    scriptType: "text/javascript"
  },
  optimization: {
    runtimeChunk: false
  },  
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },  
  plugins: [
    new ModuleFederationPlugin({
      library: {type: "module"},

        remotes: manifest.remotes,
            shared: {
              ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
            },        
    }),
    // Uncomment for sharing lib of an Angular CLI or Nx workspace
    sharedMappings.getPlugin(),
  ],
};
