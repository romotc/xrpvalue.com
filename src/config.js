/**
 * Configuration file
 *
 * Copy this file to config.js and edit to suit your preferences.
 */
var Options = {
  server: {
    trace :         true,
    trusted:        true,

    servers: [
      { host: 's_west.ripple.com', port: 443, secure: true },
      { host: 's_east.ripple.com', port: 443, secure: true }
    ],

    connection_offset: 1
  },
  markets: [
    {
      name: 'US Dollars',
      currency: 'USD',
      priority: 1,
      gateways: {
        Bitstamp: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
        SnapSwap: 'rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q'
      }
    },
    {
      name: 'Chinese Yuan',
      currency: 'CNY',
      priority: 2,
      gateways: {
        RippleCN: 'rnuF96W4SZoCJmbHYBFoJZpR8eCaxNvekK',
        RippleChina: 'razqQKzJRdB4UxFPWf5NEpEG3WMkmwgcXA'
      }
    },
    {
      name: 'Bitcoin',
      currency: 'BTC',
      priority: 3,
      gateways: {
        Bitstamp: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B'
      }
    }
  ],
  orderbookFilterOpts: {
    precision: 5,
    min_precision: 5,
    max_sig_digits: 20
  },
  pageTitlePriceOpts: {
    precision: 2,
    min_precision: 2
  }
};