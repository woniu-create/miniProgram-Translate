const app = getApp();
Page({
  data: {
    curLang: {},
    langList: app.globalData.langList,
  },
  onShow: function () {
    this.setData({ curLang: app.globalData.curLang });
    console.log("curLang", this.data.curLang);
  },
  onTapItem: function (e) {
    console.log("e", e);
    let langObj = e.currentTarget.dataset;
    console.log("langObj", langObj);
    wx.setStorageSync("language", langObj);
    this.setData({ curLang: langObj });
    app.globalData.curLang = langObj;
    wx.switchTab({ url: "/pages/index/index" });
  },
});
