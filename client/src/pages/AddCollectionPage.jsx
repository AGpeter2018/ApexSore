import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCollectionPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image: ''
    });
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [uploading, setUploading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            // Create preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const uploadToCloudinary = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET); // We'll set this up
        formData.append('cloud_name', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME); // We'll set this up

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
                formData
            );
            console.log('Cloudinary response:', response.data);
            return response.data.secure_url;
        } catch (error) {
            throw new Error('Image upload failed');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            let imageUrl = formData.image;

            // Upload image to Cloudinary if file is selected
            if (imageFile) {
                setUploading(true);
                imageUrl = await uploadToCloudinary(imageFile);
                setUploading(false);
            }

            // Create collection
            await axios.post(`${import.meta.env.VITE_API_URL}/collections`, {
                name: formData.name,
                description: formData.description,
                collectionImage: {
                  url: imageUrl,
                  publicId: "",
                  alt: formData.name
                }
            });
            

            setMessage({ type: 'success', text: 'Collection created successfully!' });
            
            // Reset form
            setFormData({ name: '', description: '', image: '' });
            setImageFile(null);
            setImagePreview('');

            // Redirect after 2 seconds
            setTimeout(() => {
                navigate('/collections');
            }, 2000);
        } catch (error) {
            setMessage({ 
                type: 'error', 
                text: error.response?.data?.message || 'Failed to create collection' 
            });
        } finally {
            setLoading(false);
            setUploading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-2xl">
            <h1 className="text-4xl font-bold text-center mb-8">Add New Collection</h1>

            {message.text && (
                <div className={`p-4 mb-6 rounded-lg ${
                    message.type === 'success' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                }`}>
                    {message.text}
                </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Collection Name *
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., Summer Collection"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Describe your collection..."
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Upload Image
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {imagePreview && (
                        <div className="mt-4">
                            <img 
                                src={imagePreview} 
                                alt="Preview" 
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        </div>
                    )}
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Or Enter Image URL
                    </label>
                    <input
                        type="url"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        disabled={imageFile !== null}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                        placeholder="https://example.com/image.jpg"
                    />
                </div>

                <div className="flex gap-4">
                    <button
                        type="submit"
                        disabled={loading || uploading}
                        className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                        {uploading ? 'Uploading Image...' : loading ? 'Creating...' : 'Create Collection'}
                    </button>
                    
                    <button
                        type="button"
                        onClick={() => navigate('/collections')}
                        className="flex-1 bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCollectionPage;
