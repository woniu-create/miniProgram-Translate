import { translate } from "../../utils/api";
const app = getApp();

Page({
  data: {
    query: "",
    curLang: {},
    hideClearIcon: true,
    result: [],
  },
  onLoad: function (options) {
    console.log("onLoad");
  },
  onShow: function () {
    console.log("onShow", app.globalData.curLang.lang);
    if (this.data.curLang.lang !== app.globalData.curLang.lang) {
      this.setData({ curLang: app.globalData.curLang });
      this.onConfirm();
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
  onConfirm: function () {
    if (!this.data.query) return;
    translate(this.data.query, {
      from: "auto",
      to: this.data.curLang.lang,
    }).then((res) => {
      // console.log("res", res);
      this.setData({ result: res.trans_result });
      console.log("result", this.data.result);
      let history = wx.getStorageSync("history") || [];
      history.unshift({
        query: this.data.query,
        result: res.trans_result[0].dst,
      });
      history.length = history.length > 10 ? 10 : history.length;
      wx.setStorageSync("history", history);
    });
  },
});
