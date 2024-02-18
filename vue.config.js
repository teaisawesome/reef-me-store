module.exports = {
  configureWebpack: {
    plugins: [],
  },
  chainWebpack: (config) => {
    config.plugin('define').tap((args) => {
      args[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = true;
      return args;
    });
  },
  transpileDependencies: true,
}