import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Collection name is required'],
        trim: true,
        unique: true,
        maxlength: [100, 'Collection name cannot exceed 100 characters']
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        maxlength: [1000, 'Description cannot exceed 1000 characters']
    },
    // Main collection banner/hero image
    collectionImage: {
        url: {
            type: String,
            required: [true, 'Collection image is required']
        },
        publicId: {
            type: String,
            default: ''
        },
        alt: {
            type: String,
            default: ''
        }
    },
    // Gallery images for the collection (optional)
    galleryImages: [{
        url: {
            type: String,
            required: true
        },
        publicId: {
            type: String,
            default: ''
        },
        alt: {
            type: String,
            default: ''
        }
    }],
    // SEO and metadata
    metaTitle: {
        type: String,
        maxlength: [60, 'Meta title cannot exceed 60 characters']
    },
    metaDescription: {
        type: String,
        maxlength: [160, 'Meta description cannot exceed 160 characters']
    },
    // Status
    isActive: {
        type: Boolean,
        default: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    // Display order
    sortOrder: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

// Generate slug from name before saving
collectionSchema.pre('save',  function() {
    if (this.isModified('name')) {
        this.slug = this.name
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
    }
   
})
// Indexes for better performance
// collectionSchema.index({ slug: 1 });
collectionSchema.index({ isActive: 1, featured: 1 });
collectionSchema.index({ sortOrder: 1 });

export default mongoose.model('Collection', collectionSchema);