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

export const getsProductById = async (req, res) => {
   const product = await Product.findById(req.params.productId);
   res.status(200).json(product);

};

export const UpdateProductById = async (req, res) => {
   const updateProduct =  await Product.findByIdAndUpdate(req.params.productId, req.body, {
       new:true
   });

   res.status(200).json(updateProduct);

};

export const DeleteProductById = async (req, res) => {
    const {productId} = req.params;
    await Product.findByIdAndDelete(productId);
    res.status(204).json();
};

