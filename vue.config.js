module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        files: [
            "**/*",
            "!public/*.json"
        ],
      },
    },
  },
};
