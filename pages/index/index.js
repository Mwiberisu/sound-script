import {
  BASE_URL
} from '../../utils/configs'

Page({
  data: {

    artist: 'Lord Huron',
    song: 'The Night We Met',
    lyrics: '',
    title: ''

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

        this.setData({
          lyrics: res.data.lyrics,
          title: this.data.song + ' by ' + this.data.artist
        });

        // scroll to lyrics place
        my.pageScrollTo({
          scrollTop: 350,
          duration: 300,
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