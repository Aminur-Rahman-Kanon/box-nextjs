import { model, models, Schema } from "mongoose";

const ProductSchema = new Schema({
    stock: { type: Number, required: true },
    title: { type: String, required: true, index: true },
    rating: { type: Number, required: true },
    price: { type: Object, required: true },
    color: { type: Array, required: true },
    img: { type: Object, required: true },
    description: { type: String, required: true },
    landingDescription: { type: String },
    customerReviews: Array,
    category: { type: String, requied: true, index: true },
    subCategory: { type: String, requied: true }
}, {
    timestamps:true
});

export const Product = models.Product || model('Product', ProductSchema);
