const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventName: { type: String, required: true },
    customerName: { type: String, required: true },
    eventType: { type: String, required: true },
    eventDate: { type: Date, required: true },
    venue: { type: String, required: true },
    budget: { type: Number, required: true },
    assignedEmployee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    status: { 
        type: String, 
        enum: ['Planning', 'Confirmed', 'Ongoing', 'Completed', 'Cancelled'], 
        default: 'Planning' 
    },
    checklist: {
        venueConfirmed: { type: Boolean, default: false },
        decoration: { type: Boolean, default: false },
        catering: { type: Boolean, default: false },
        photography: { type: Boolean, default: false },
        lighting: { type: Boolean, default: false },
    },
    notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);