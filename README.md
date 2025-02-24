# Smart & Move - QR Fare System

## Overview
This project is a Flask-based web application that provides fare calculation and QR code generation for bus routes. It also includes a blog section about smart transportation and an Indian Cultural Payment Gateway.

## Features
- Generate QR codes for bus fares based on selected source and destination.
- Display fare details dynamically.
- Responsive blog page showcasing articles on smart transportation.
- Indian Cultural Payment Gateway with support for Card, UPI, and Wallet payments.
- Smooth UI with Tailwind CSS for styling.
- User authentication system (to be implemented).
- Admin panel for fare management (upcoming feature).

## Technologies Used
- Flask (Backend)
- qrcode (QR Code Generation)
- Tailwind CSS (Styling)
- HTML, JavaScript, and Jinja (Frontend)
- SQLite (Database for storing fare details and user data)

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/smart-move.git
   cd smart-move
   ```
2. Install dependencies:
   ```bash
   pip install flask qrcode sqlite3
   ```
3. Run the Flask application:
   ```bash
   python app.py
   ```
4. Open `http://127.0.0.1:5000/` in your browser.

## File Structure
```
smart-move/
│── static/
│   ├── Asset/
│   │   ├── bus-bg.png
│   │   ├── blog1.jpg
│   │   ├── blog2.jpg
│   │   ├── blog3.jpg
│── templates/
│   ├── index.html
│   ├── blog.html
│   ├── payment.html
│   ├── login.html
│   ├── admin.html
│── app.py
│── database.db
│── README.md
```

## Usage
- Visit `/` for the homepage.
- Visit `/blog` to explore smart transportation articles.
- Use `/generate_qr?source=Bhopal&destination=Indore` to generate a QR code for a specific route.
- Access `/payment` for the Indian Cultural Payment Gateway.
- Admins can manage fare details via `/admin` (coming soon).
- Users can log in at `/login` (to be implemented).

## Future Enhancements
- Add real-time fare updates.
- Implement a user authentication system.
- Expand the fare table with more routes.
- Integrate real-time bus tracking.
- Enhance the payment gateway with additional security features.
- Develop a mobile app for easier access.

## License
This project is licensed under the MIT License.

