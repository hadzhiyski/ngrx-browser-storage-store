// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {

  process.env.CHROME_BIN = require('puppeteer').executablePath()

  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require("path").join(
        __dirname,
        "../../coverage/ngrx-browser-storage-store"
      ),
      reports: ["html", "text-summary", "json-summary"],
      fixWebpackSourcePaths: true,
      // Omit files with no statements, no functions and no branches from the report
      skipFilesWithNoCoverage: false,
    },
    reporters: ["progress", "kjhtml"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome", "ChromeHeadless"],
    singleRun: false,
    restartOnFileChange: true,
  });
};
