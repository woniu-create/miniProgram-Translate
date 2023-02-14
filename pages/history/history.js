const app = getApp();

Page({
  data: {
    history: [],
  },
  onShow: function () {
    this.setData({ history: wx.getStorageSync("history") });
    // console.log("history", this.data.history);
  },
  onTapItem: function (e) {
    console.log("e.currentTarget.dataset.query", e.currentTarget.dataset.query);
    wx.reLaunch({
      url: `/pages/index/index?query=${e.currentTarget.dataset.query}`,
    });
  },
});
