Page({
  data: {
    title: '',
    lyrics: ''
  },
  onLoad(query) {
    const {
      title,
      lyrics
    } = query
    this.setData({
      title: title,
      lyrics: lyrics
    })
  },
});