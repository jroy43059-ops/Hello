const express = require('express')
const connection = require('./config/db')
var cors = require('cors')
const { userRoute } = require('./routes/user.routes')
const { productRoute } = require('./routes/products.routes')
const { authenticate } = require('./middleware/authenticate.middleware')
const { cartRoute } = require('./routes/cart.routes')
const { wishlistRoute } = require('./routes/wishlist.routes')
const { checkoutRoutes } = require('./routes/checkout.routes')
const path = require('path')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

// ১. স্ট্যাটিক ফাইল আগে দিন (যাতে লগইন ছাড়াই সাইট দেখা যায়)
app.use(express.static(path.join(__dirname, "../build")));

// ২. পাবলিক এপিআই রাউট (লগইন ছাড়াই পণ্য দেখা যাবে)
app.use("/users", userRoute)
app.use("/products", productRoute)

// ৩. এখানে অথেন্টিকেশন মিডলওয়্যার দিন (শুধুমাত্র নিচের রাউটগুলোর জন্য)
app.use(authenticate)
app.use('/cart', cartRoute)
app.use('/wishlists', wishlistRoute)
app.use('/checkouts', checkoutRoutes)

// ৪. সবশেষে ওয়াইল্ডকার্ড রাউট দিন (যাতে রিঅ্যাক্ট ড্যাশবোর্ড লোড হয়)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../build", "index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
    try { await connection; console.log('Connected to db'); }
    catch (err) { console.log('Not connected to db', err); }
    console.log(`Server running at ${PORT}`);
});
