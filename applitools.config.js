module.exports = {
  showLogs: true,
  appName: "AppliFashion",
  batchName: "Holiday Shopping",
  browser: [
    { width: 1200, height: 800, name: "chrome" },
    { width: 1200, height: 800, name: "firefox" },
    { width: 1200, height: 800, name: "edgechromium" },
    { width: 1200, height: 800, name: "safari" },
    {
      iosDeviceInfo: {
        deviceName: "iPhone X",
        screenOrientation: "landscape",
      },
    },
    {
      iosDeviceInfo: {
        deviceName: "iPhone X",
        screenOrientation: "portrait",
      },
    },
  ],
};
