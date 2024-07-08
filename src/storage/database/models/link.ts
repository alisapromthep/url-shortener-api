import mongoose from 'mongoose';

export interface ILink {
    _id: string;
    slug: string;
    name: string | null;
    destinationLink: string;
    createdAt: mongoose.Date;
    updatedAt: mongoose.Date;
}

export const linkSchema = new mongoose.Schema<ILink>({
    slug: { type: String, required: true, unique: true },
    name: { type: String },
    destinationLink: { type: String, required: true },
},
{
    timestamps: true,
});
