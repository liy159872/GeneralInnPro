// pages/your-page/your-page.js
const app = getApp()

Page({
  data: {
    videoSrc: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
    poster: 'https://i.328888.xyz/2023/04/13/igOnyy.jpeg',
    controls: true,
    autoplay: false,
    loop: false,
    muted: false,
    objectFit: 'contain',
    showFullscreenBtn: true,
    showPlayBtn: true,
    showCenterPlayBtn: true,
    enableProgressGesture: true,
    danmuList: [],
  },
  onLoad: function () {
    this.setData({
      playHeight: (3 / 4) * this.data.windowWidth
    })
    wx.request({
      url: 'url/to/findallvideo',
      success: (res) => {
        if (res.data.status) {
          this.setData({
            videoList: res.data.data
          })
          console.log(res.data.data)
        }
      }
    })
  },
  handleBack() {
    wx.navigateBack()
  },
  showImage(event) {
    const src = event.currentTarget.dataset.src;
    wx.previewImage({
      urls: [src],
      current: src,
    });
  },
})
