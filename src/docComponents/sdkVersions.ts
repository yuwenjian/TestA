<<<<<<< HEAD:src/docComponents/sdkVersions.ts
const taptapUnity = "11111"
const taptapIos = "22222"
const taptapAndroid = "22222"
const taptapUnreal = "222222"
=======
const taptapUnity = "3.26.5"
const taptapIos = "3.23.1"
const taptapAndroid = "3.24.1"
const taptapUnreal = "3.25.1"
>>>>>>> d40192da5c8fbe5e866055c36ad68c6e74d63cb7:sdkVersions.ts

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

