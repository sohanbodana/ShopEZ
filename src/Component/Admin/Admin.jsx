import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from './Navbar2';
import './admin.css';

const Admin = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Error fetching products. Please try again later.');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct]);
        // You might want to make a POST request to add the product to your backend database
    };

    const editProduct = (productId) => {
        const productToEdit = products.find((product) => product.id === productId);
        setSelectedProduct(productToEdit);
    };

    const updateProduct = (editedProduct) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) => (product.id === editedProduct.id ? editedProduct : product))
        );
        setSelectedProduct(null);
        // You might want to make a PUT request to update the product in your backend database
    };

    const deleteProduct = (productId) => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
    };

    return (
        <>
            <Navbar2 />
            <div className="container mt-4">
                <h2>Admin Page</h2>
                <div className="row">
                    <div className="col-md-6">
                        <ProductForm onSubmit={addProduct} />
                    </div>
                    <div className="col-md-6">
                        {loading && <p>Loading...</p>}
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {!loading && !error && (
                            <div>
                                <h3>Product List</h3>
                                <ul>
                                    {products.map((product) => (
                                        <li key={product.id}>
                                            {product.title} - ${product.price}
                                            <button onClick={() => editProduct(product.id)}>Edit</button>
                                            <button onClick={() => deleteProduct(product.id)}>Delete</button>
                                            <hr/>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {selectedProduct && (
                <div className="container mt-4">
                    <h2>Edit Product</h2>
                    <ProductForm onSubmit={updateProduct} productToEdit={selectedProduct} />
                </div>
            )}
        </>
    );
};

export default Admin;
