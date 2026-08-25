import mongoose from 'mongoose'

const serviceRequestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    type: {
      type: String,
      enum: ['Permit', 'Complaint', 'Inquiry', 'Clearance', 'Other'],
      required: true,
    },
    details: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ['received', 'processing', 'resolved'],
      default: 'received',
    },
  },
  { timestamps: true },
)

export default mongoose.model('ServiceRequest', serviceRequestSchema)