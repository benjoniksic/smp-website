module.exports = {
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        cache: false,
      }),
    ],
  },
};
