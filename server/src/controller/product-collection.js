import Collection from "../../models/product-collections.model.js";
// Get all collections
export const getCollections = async (req, res) => {
    try {
        const collections = await Collection.find({ isActive: true });
        
        res.status(200).json({
            success: true,
            count: collections.length,
            data: collections
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get single collection
export const getCollection = async (req, res) => {
    try {
        const collection = await Collection.findById(req.params.id);
        
        if (!collection) {
            return res.status(404).json({
                success: false,
                message: 'Collection not found'
            });
        }
        
        res.status(200).json({
            success: true,
            data: collection
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Create new collection
export const createCollection = async (req, res) => {
    try {
        console.log('Creating collection with data:', req.body);
        const { name, description, image } = req.body;
        
        if (!name) {
            return res.status(400).json({
                success: false,
                message: 'Name is required'
            });
        }
        
        console.log('Attempting to save to database...');
        const collection = await Collection.create({
            name,
            description,
            image
        });
        
        console.log('Collection created:', collection);
        res.status(201).json({
            success: true,
            data: collection
        });
    } catch (error) {
        console.error('Error creating collection:', error);
        res.status(400).json({
            success: false,
            message: error.message,
            errorType: error.name
        });
    }
};

// Update collection
export const updateCollection = async (req, res) => {
    try {
        const collection = await Collection.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!collection) {
            return res.status(404).json({
                success: false,
                message: 'Collection not found'
            });
        }
        
        res.status(200).json({
            success: true,
            data: collection
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Delete collection
export const deleteCollection = async (req, res) => {
    try {
        const collection = await Collection.findByIdAndDelete(req.params.id);
        
        if (!collection) {
            return res.status(404).json({
                success: false,
                message: 'Collection not found'
            });
        }
        
        res.status(200).json({
            success: true,
            message: 'Collection deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
