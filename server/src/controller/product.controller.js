import Product from '../../models/Product.model.js';

// Get all products with filtering
export const getProducts = async (req, res) => {
    try {
        const {
            collection,
            drumType,
            minPrice,
            maxPrice,
            featured,
            isActive = 'true',
            sort = '-createdAt',
            page = 1,
            limit = 12
        } = req.query;
        
        const filter = { isActive: isActive === 'true' };
        
        if (collection) filter.collection = collection;
        if (drumType) filter.drumType = drumType;
        if (featured !== undefined) filter.featured = featured === 'true';
        
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = Number(minPrice);
            if (maxPrice) filter.price.$lte = Number(maxPrice);
        }
        
        const pageNum = Number(page);
        const limitNum = Number(limit);
        const skip = (pageNum - 1) * limitNum;
        
        const products = await Product.find(filter)
            .populate('collection', 'name slug')
            .sort(sort)
            .skip(skip)
            .limit(limitNum);
        
        const total = await Product.countDocuments(filter);
        
        res.status(200).json({
            success: true,
            count: products.length,
            total,
            page: pageNum,
            pages: Math.ceil(total / limitNum),
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get single product by slug
export const getProductBySlug = async (req, res) => {
    try {
        const product = await Product.findOne({ 
            slug: req.params.slug,
            isActive: true 
        }).populate('collection', 'name slug');
        
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        
        res.status(200).json({
            success: true,
            data: product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Create product
export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        
        res.status(201).json({
            success: true,
            data: product
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Update product
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        
        res.status(200).json({
            success: true,
            data: product
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Delete product
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
