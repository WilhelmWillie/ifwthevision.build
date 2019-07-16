const path = require("path");

module.exports = {
  webpack(config, options) {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["style"] = path.join(__dirname, "style");
    config.resolve.alias["config"] = path.join(__dirname, "config");
    return config;
  }
};
