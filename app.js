// app.js
App({
  onLaunch() {
    // 展示本地存储能力

    this.globalData.curLang =
      wx.getStorageSync("curLang") || this.globalData.langList[0];

    // const logs = wx.getStorageSync("logs") || [];
    // logs.unshift(Date.now());
    // wx.setStorageSync("logs", logs);

    // // 登录
    // wx.login({
    //   success: (res) => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   },
    // });
  },
  globalData: {
    curLang: {},
    langList: [
      {
        chs: "英文",
        lang: "en",
        index: 0,
      },
      {
        chs: "中文",
        lang: "zh",
        index: 1,
      },
      {
        chs: "日语",
        lang: "jp",
        index: 2,
      },
      {
        chs: "韩语",
        lang: "kor",
        index: 3,
      },
      {
        chs: "法语",
        lang: "fra",
        index: 4,
      },
      {
        chs: "西班牙语",
        lang: "spa",
        index: 5,
      },
      {
        chs: "阿拉伯语",
        lang: "ara",
        index: 6,
      },
    ],
  },
});
