import {
  TILL_NUMBER
} from '../../utils/configs'

Page({
  data: {
    amount: '',
    quickAmounts: ['100', '500', '1000'],
    error: ''
  },
  handleChange(val) {
    let value = val;
    console.log(value);
    this.setData({
      amount: value,
      error: ''
    });
  },
  async handleBuyMeACoffee() {
    let donorAmount = this.data.amount;
    console.log('Initiating a payment of ksh: ' + donorAmount)
    if (donorAmount <= 0) {
      this.setData({
        error: "Please enter a valid amount"
      })
      return
    }
    // proceed to checkout
    my.call('buyGoods', {
      tillNumber: TILL_NUMBER,
      amount: donorAmount,
      currency: 'KES',
      reason: 'Donation',
      success: function (res) {
        my.alert({
          title: "Payment Received",
          content: "Thank you so much for your generous donation of KES " + donorAmount + ". Payment received under receipt " + res.transactionId,
          buttonText: "Okay",
          success: () => {
            my.navigateTo({
              url: '/pages/index/index'
            })
          }
        });


      },
      fail: function (res) {
        my.alert({
          title: "Payment Error",
          content: res,
          buttonText: "Okay",
        });

      },
    });
  }
});