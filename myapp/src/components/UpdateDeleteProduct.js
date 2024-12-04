import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateDeleteProduct() {
  const { id } = useParams(); // Get product ID from the URL
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    Title: "",
    Description: "",
    Price: "",
    Image: null,
  });

  const [message, setMessage] = useState("");

  const api_url = "http://127.0.0.1:8000/products/";

  // Fetch the product details when the component loads
  useEffect(() => {
    axios
      .get(`${api_url}${id}/`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setProduct({ ...product, Image: e.target.files[0] });
  };

  // Update product
  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Title", product.Title);
    formData.append("Description", product.Description);
    formData.append("Price", product.Price);
    if (product.Image instanceof File) {
      formData.append("Image", product.Image);
    }

    axios
      .put(`${api_url}${id}/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        setMessage("Product updated successfully!");
        console.log(response.data);
      })
      .catch((error) => {
        setMessage("Error updating product.");
        console.error(error);
      });
  };

  // Delete product
  const handleDelete = () => {
    axios
      .delete(`${api_url}${id}/`)
      .then(() => {
        setMessage("Product deleted successfully!");
        navigate("/products"); // Redirect to the product list page
      })
      .catch((error) => {
        setMessage("Error deleting product.");
        console.error(error);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Update or Delete Product</h2>
      {message && <p className="alert alert-info">{message}</p>}

      <form onSubmit={handleUpdate} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="Title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="Title"
            name="Title"
            value={product.Title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="Description"
            name="Description"
            value={product.Description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="Price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="Price"
            name="Price"
            value={product.Price}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Image" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="Image"
            name="Image"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" className="btn btn-success me-3">
          Update Product
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDelete}
        >
          Delete Product
        </button>
      </form>
    </div>
  );
}
