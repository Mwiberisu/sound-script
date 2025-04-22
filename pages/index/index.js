import {
  BASE_URL
} from '../../utils/configs'

Page({
  data: {

    artist: 'Ed Sheeran',
    song: 'Perfect',
    lyrics: ''

  },


  setArtist(input) {
    this.setData({
      artist: input
    })
  },
  setSong(input) {
    this.setData({
      song: input
    })
  },

  reset() {

    my.reLaunch({
      url: '/pages/index/index',
    })
  },
  async searchLyrics() {
    my.request({
      url: BASE_URL + this.data.artist + '/' + this.data.song,
      method: 'GET',
      success: (res) => {
        my.alert({
          title: 'lyrics',
          content: res.data.lyrics,
          buttonText: 'Okay'
        });
      },
      fail: (res) => {
        my.alert({
          title: 'Error fetching lyrics',
          content: res.data.error,
          buttonText: 'Okay'

        });
      }
    });


  },
});