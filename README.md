# MERN-Auth-Payment-Demo
🚀 MERN Auth Payment Demo is a full-stack app built using MongoDB, Express, React, and Node.js. It features secure user authentication 🔐 and seamless Razorpay integration 💳 for real-time payments. A clean, responsive UI 🎨 ensures a smooth and modern user experience across all devices! 🌐

---

## ✨ Features

- 🔐 **User Authentication** – Signup, Login, Logout using JWT  
- 💳 **RazorPay Payment Gateway** – Secure payment integration  
- 🌐 **RESTful APIs** – Modular backend structure  
- ⚡ **MERN Stack** – MongoDB, Express, React, Node.js  
- 🎨 **Responsive UI** – Simple and clean frontend design  
- 🧠 **Protected Routes** – Access control using tokens  

---

## 🧩 Tech Stack

| Layer | Technology |
|--------|-------------|
| Frontend | React.js |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Payment | RazorPay API |
| Auth | JSON Web Token (JWT) |
| Styling | CSS (no Tailwind) |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone this repository
```
git clone https://github.com/OmPimple26/MERN-Auth-Payment-Demo.git
cd MERN-Auth-Payment-Demo
```

### 2️⃣ Install dependencies
Backend
```
cd backend
npm install
```

Frontend
```
cd frontend
npm install
```

### 3️⃣ Configure environment variables

Create a .env file in both the root and frontend folders as needed.

Example .env (Backend)
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_SECRET_KEY=your_razorpay_secret_key
```

Example .env (Frontend)
```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_RAZORPAY_PUBLIC_KEY=your_razorpay_public_key
```

---

## ▶️ Run the app
Development mode
```
# Run backend
cd backend
nodemon .\server.js
```

```
# Run frontend
cd frontend
npm start
```


The app will run on:

Frontend → http://localhost:3000

Backend → http://localhost:5000

---

## 📁 Folder Structure

MERN-auth-payment-demo/
│
├── backend/              # Express server and APIs
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   └── server.js         # Entry point
│
├── frontend/             # React frontend
│   ├── src/              # Components & pages
│   ├── public/           # Static assets
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md

---

## 📦 Deployment

You can deploy this app using:

Render / Vercel / Netlify – for frontend

Render / Railway / Heroku – for backend

Ensure environment variables are properly configured in production.

---

## 👨‍💻 Author

**Om Pimple**  
💼 [GitHub](https://github.com/OmPimple26)  
📧 [ompimple04@gmail.com](mailto:ompimple04@gmail.com)

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub — it helps a lot!
Happy Coding ❤️
