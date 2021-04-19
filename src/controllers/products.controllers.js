import Product from '../models/Products';

export const createProducts = async (req, res) => {

    const {name, category, price , imgURL} = req.body;

    const newProduct =  new Product({name, category, price, imgURL});

    const productSaved = await newProduct.save();

    res.status(201).json(productSaved);
};

export const getsProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const getsProductById = (req, res) => {

};

export const UpdateProductById = (req, res) => {

};

export const DeleteProductById = (req, res) => {

};

