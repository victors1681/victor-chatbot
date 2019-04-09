const path = require("path");

const getDevServer = () => ({
  contentBase: path.join(__dirname, "..", "public"),
  compress: true,
  port: 9000,
  hot: true,
  disableHostCheck: true,
  historyApiFallback: true,
  inline: true,
  proxy: {
    "/api": {
      target: "http://deepnlp03.ny3.ipsoft.com:5000",
      secure: false,
      changeOrigin: true,
      pathRewrite: { "^/api": "" }
    }
  }
});

module.exports.getDevServer = getDevServer;
