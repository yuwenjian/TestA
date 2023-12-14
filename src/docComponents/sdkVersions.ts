const taptapUnity = "1111"
const taptapIos = "222221"
const taptapAndroid = "33333"
const taptapUnreal = "333333"

const sdkVersions = {
  taptap: {
    unity: taptapUnity,
    android: taptapAndroid,
    ios: taptapIos,
    unreal: taptapUnreal,
    rtc: "1.1.0",
    adr: "1.1.5"
  },
  leancloud: {
    objc: "13.9.0",
    swift: "17.10.1",
    js: {
      storage: "4.13.2",
      realtime: "5.0.0-rc.7",
    },
    java: "8.2.19",
    csharp: "2.3.0",
    flutter: {
      storage: "0.7.10",
      realtime: "1.0.1",
    }
  },
  tapadn: {
    unity: "3.16.3.23",
    android: "3.16.3.23",
  }
};

export default sdkVersions;

