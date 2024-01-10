import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSubmit, productToEdit }) => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    if (productToEdit) {
      // If productToEdit is provided, populate the form with its data
      setFormData({
        title: productToEdit.title,
        price: productToEdit.price.toString(),
        description: productToEdit.description,
        image: productToEdit.image,
      });
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title: formData.title,
      price: parseFloat(formData.price),
      description: formData.description,
      image: formData.image,
    };

    onSubmit(newProduct);

    // Reset the form
    setFormData({
      title: '',
      price: '',
      description: '',
      image: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Price:
        <input type="number" name="price" value={formData.price} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Image URL:
        <input type="url" name="image" value={formData.image} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
