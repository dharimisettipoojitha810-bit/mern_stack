const CartProducts = require("../model/CartModel");
const mongoose = require("mongoose");
//addToCart
const addToCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    if (!userId || !productId) {
      res.status(401).json({ message: "missing required fields" });
    }

    if ((await CartProducts.findOne({ userId:new mongoose.Types.ObjectId (userId )})) == null) {
      await CartProducts.insertOne({ userId: userId, productIds: [new mongoose.Types.ObjectId(productId)] });
    } else {
      await CartProducts.updateOne(
        { userId: new mongoose.Types.ObjectId(userId) },
        { $push: { productIds: new mongoose.Types.ObjectId(productId) } },
      );
    }
    res.status(200).json({ message: "add to cart successful" });
  } catch (error) {
    res.status(500).json({ message: "Failed to add cart ", error });
  }
};

//get Cart Products
const getCartProducts = async (req, res) => {
  // try {
  const { userId } = req.params;
    const CartProducts = await CartProducts.aggregate([
    { $match: { userId: new mongoose.Types.ObjectId(userId)  } },
    { $unwind: "$productIds" },
    {
      $lookup: {
        from: "products",
        localField: "productIds",
        foreignField: "_id",
        as: "Products_in_cart",
      },
    },
    { $project: { Products_in_cart: 1, _id: 0 } }
  ]);

  res.status(200).json({ allProducts });
  // } catch (error) {
  res.status(500).json({ message: "internal server", error });
};
// };

// remove Cart Product based on ID;
const removeCartProduct = async (req, res) => {
  const { userId, productId } = req.query;
  try {
    const removeProducts = await CartProducts.updateOne(
      { userId: ObjectId(userId) },
      { $pull: { productIds: ObjectId(productId) } },
    );
    res.status(200).json({ removeProducts });
  } catch (error) {
    res.status(500).json({ message: "Failed to remove product", error });
  }
};
// remove All Cart Products
const removeAllProducts = async (req, res) => {
  try {
    const { userId } = req.query;
    const removeAll = await CartProducts.updateOne(
      { userId: ObjectId(userId) },
      { $set: { productIds: [] } },
    );
  } catch (error) {
    res.status(500).json({ message: "Failed to remove all products", error });
  }
};

module.exports = {
  addToCart,
  getCartProducts,
  removeCartProduct,
  removeAllProducts,
};