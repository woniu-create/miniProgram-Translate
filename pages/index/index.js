const app = getApp();

Page({
  data: {
    query: "",
    curLang: {},
    hideClearIcon: true,
  },
  onLoad: function (options) {
    console.log("onLoad");
  },
  onShow: function () {
    console.log("onShow", app.globalData);
    if (this.data.curLang.lang !== app.globalData.curLang.lang) {
      this.setData({ curLang: app.globalData.curLang });
      //  this.onConfirm()
    }
  },
  onInput: function (e) {
    this.setData({ query: e.detail.value });
    if (this.data.query.length > 0) {
      this.setData({ hideClearIcon: false });
    } else {
      this.setData({ hideClearIcon: true });
    }
  },
  onTapClose: function () {
    this.setData({ query: "", hideClearIcon: true });
  },
});
