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

// build ফোল্ডার থেকে ফাইল সার্ভ করা
app.use(express.static(path.join(__dirname, "../build")));

app.use("/users", userRoute)
app.use("/products", productRoute)
app.use(authenticate)
app.use('/cart', cartRoute)
app.use('/wishlists', wishlistRoute)
app.use('/checkouts', checkoutRoutes)

// এটি আপনার ড্যাশবোর্ড ওপেন করবে
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../build", "index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
    try { await connection; console.log('Connected to db'); }
    catch (err) { console.log('Not connected to db', err); }
});
