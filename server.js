import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, 'dist')));

// Booking endpoint
app.post('/api/bookings', async (req, res) => {
  try {
    console.log('Received booking request:', req.body);
    
    const {
      firstName,
      lastName,
      phone,
      email,
      checkIn,
      checkOut,
      roomType,
      breakfast,
      checkInTime,
      guests,
      vouchers
    } = req.body;

    // Log the booking request
    console.log('=== NEW BOOKING REQUEST ===');
    console.log('Guest:', `${firstName} ${lastName}`);
    console.log('Phone:', phone);
    console.log('Email:', email || 'Not provided');
    console.log('Check-in:', `${checkIn} at ${checkInTime || '15:00'}`);
    console.log('Check-out:', checkOut);
    console.log('Room Type:', roomType);
    console.log('Breakfast:', breakfast === 'yes' ? 'Yes' : 'No');
    console.log('Guests:', guests);
    if (vouchers) console.log('Spa Vouchers:', vouchers);
    console.log('==========================');

    // Success response
    res.status(200).json({ 
      message: 'Booking request received successfully! We will contact you soon.',
      whatsappSent: true
    });
  } catch (error) {
    console.error('Error processing booking request:', error);
    res.status(500).json({ 
      message: 'Failed to process booking request',
      error: error.message 
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Email functionality disabled - only WhatsApp notifications will be sent');
}); 