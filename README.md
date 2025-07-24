# TAN HOTEL Website

A modern, responsive hotel website built with React and Vite.

## Features

- **Multi-language Support**: English, Russian, and Kazakh
- **Interactive Room Slider**: Browse different room types
- **Responsive Design**: Works on all devices
- **Booking System**: Functional reservation form with email and WhatsApp integration
- **Modern UI**: Clean, luxury hotel aesthetic

## Booking System Setup

### 1. Email Configuration

1. Create a `.env` file in the root directory
2. Add your email credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
HOTEL_EMAIL=reservations@tanhotel.com
WHATSAPP_NUMBER=+1234567890
PORT=3000
```

**Important**: For Gmail, you need to use an "App Password" instead of your regular password:
1. Enable 2-factor authentication on your Google account
2. Go to Google Account settings → Security → App passwords
3. Generate a new app password for "Mail"
4. Use this password in the `EMAIL_PASS` field

### 2. WhatsApp Configuration

Update the WhatsApp number in `src/App.jsx`:
```javascript
const whatsappUrl = `https://wa.me/YOUR_ACTUAL_NUMBER?text=${encodeURIComponent(whatsappMessage)}`
```

### 3. Installation and Running

```bash
# Install dependencies
npm install

# Development mode
npm run dev

# Production build and server
npm run start
```

## Form Fields

The booking form includes:
- First Name (required)
- Last Name (required)
- Phone Number (required)
- Email (optional)
- Check-in Date (required)
- Check-out Date (required)
- Check-in Time (required)
- Room Type (required)
- Breakfast Option (optional)
- Number of Guests (required)

## How It Works

1. **User fills out the form** with their booking details
2. **Form validation** ensures all required fields are completed
3. **WhatsApp message** is automatically opened with booking details
4. **Email notification** is sent to the hotel's email address
5. **Success message** is shown to the user

## Technologies Used

- React 18
- Vite
- Express.js (for backend)
- Nodemailer (for email sending)
- CSS3 with modern animations

## File Structure

```
├── src/
│   ├── App.jsx          # Main React component
│   ├── App.css          # Styles
│   └── assets/          # Images and static files
├── server.js            # Express server
├── package.json         # Dependencies
└── env.example          # Environment variables template
```

## Customization

### Adding New Room Types

1. Update the `roomSlides` array in `App.jsx`
2. Add corresponding translations in the `translations` object
3. Update the room type options in the booking form

### Styling

The website uses a luxury hotel aesthetic with:
- Elegant typography (Playfair Display)
- Warm color palette
- Smooth animations
- Responsive grid layouts

## Support

For any issues or questions, please contact the development team.
