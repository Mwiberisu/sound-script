import {
  BASE_URL
} from '../../utils/configs'

import {
  Form
} from 'antd-mini/es/Form/form';

Page({
  onLoad() {
    this.form = new Form({
      initialValues: {
        artist: 'Lord Huron',
        song: 'The Night We Met'
      },
    });
  },

  handleChange(ref) {
    this.form.addItem(ref);
  },

  reset() {
    this.form.reset();
  },
  async searchLyrics() {
    const {
      artist,
      song,
    } = await this.form.submit();
    my.showLoading({
      content: 'loading...',
      // delay: 1000,
    });
    my.request({
      url: BASE_URL + artist + '/' + song,
      method: 'GET',
      success: (res) => {
        my.hideLoading();

        my.navigateTo({
          url: '/pages/lyrics/index?title=' + song + ' by ' + artist + '&lyrics=' + res.data.lyrics
        });

      },
      fail: (res) => {
        my.hideLoading();
        my.alert({
          title: 'Error fetching lyrics',
          content: res.data.error,
          buttonText: 'Okay'

        });
      }
    });
  },

});