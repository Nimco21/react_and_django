import React, { useState } from 'react';
import axios from 'axios';

export default function CreateProduct({ onProductAdded }) {
    const [newProduct, setNewProduct] = useState({ Title: '', Description: '', Price: '', Image: '' });
    const api_url = 'http://127.0.0.1:8000/products/';

    const handleCreate = () => {
        const formData = new FormData();
        for (let key in newProduct) {
            formData.append(key, newProduct[key]);
        }
        axios.post(api_url, formData)
            .then(() => {
                setNewProduct({ Title: '', Description: '', Price: '', Image: '' });
                onProductAdded();
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className="mb-4 text-center">
  <h3 className='text-warning'> Add Product</h3>
  <div className="container d-flex justify-content-center">
    <form className="form-control w-100" style={{ maxWidth: '600px' }}>
      <div className="row justify-content-center mb-3">
        <div className="col-12 col-md-10">
          <input
            type="text"
            placeholder="Title"
            className="form-control"
            value={newProduct.Title}
            onChange={(e) =>
              setNewProduct({ ...newProduct, Title: e.target.value })
            }
          />
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-12 col-md-10">
          <input
            type="text"
            placeholder="Description"
            className="form-control"
            value={newProduct.Description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, Description: e.target.value })
            }
          />
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-12 col-md-10">
          <input
            type="number"
            placeholder="Price"
            className="form-control"
            value={newProduct.Price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, Price: e.target.value })
            }
          />
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-12 col-md-10">
          <input
            type="file"
            className="form-control"
            onChange={(e) =>
              setNewProduct({ ...newProduct, Image: e.target.files[0] })
            }
          />
        </div>
      </div>
      <div className="row justify-content-center">
      <div className="col-12 col-md-8">
        <button
          className="btn btn-warning"
          type="button"
          onClick={handleCreate}
        >
          Add Product
        </button>
        </div>
      </div>
    </form>
  </div>
</div>



    );
}
