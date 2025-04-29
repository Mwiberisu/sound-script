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
          title: "Payment Successful",
          content: JSON.stringify(res),
          buttonText: "Thank You!",
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
          content: JSON.stringify(res),
          buttonText: "Okay",


        });

      },
    });
  }
});