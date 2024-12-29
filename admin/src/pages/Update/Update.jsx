import React, { useState } from 'react';
import axios from 'axios';
import './Update.css'
import { useParams } from 'react-router-dom';
import {toast} from 'react-toastify';

const Update = ({ url }) => {
    const { medicineId } = useParams(); 
    
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        image: null,
    });

    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('price', formData.price);
        data.append('category', formData.category);
        if (formData.image) {
            data.append('image', formData.image);
        }


        // Creating FormData object to send the form data
        // const data = new FormData();
        // if (formData.name) data.append('name', formData.name);
        // if (formData.description) data.append('description', formData.description);
        // if (formData.price) data.append('price', formData.price);
        // if (formData.category) data.append('category', formData.category);
        // if (formData.image) data.append('image', formData.image);



        
            try {
                const response = await axios.put(`${url}/api/medicine/update/${medicineId}`, data);
            
                
        
                if (response.data.success) {
                    toast.success(response.data.message);
                } else {
                    toast.error("Error updating medicine");
                }
            } catch (error) {
                toast.error("Error: " + error.message);
            }
        };
        

    return (
        <div className="update-container">
            <h2>Update Medicine</h2>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleFileChange}
                    />
                </div>
                <button type="submit">Update Medicine</button>
            </form>
        </div>
    );
};

export default Update;

