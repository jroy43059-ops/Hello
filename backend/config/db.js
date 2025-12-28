const mongoose = require('mongoose');
require('dotenv').config();

// প্রসেস ভেরিয়েবলের নাম mongoURL রাখা হয়েছে আপনার কোড অনুযায়ী
const connection = mongoose.connect(process.env.mongoURL);

// সরাসরি কানেকশন এক্সপোর্ট করা হচ্ছে যাতে index.js সহজে পায়
module.exports = connection;
