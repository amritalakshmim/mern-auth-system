#  MERN Authentication System

A full-stack authentication system built with the MERN stack that provides secure user authentication and authorization using JWT. It includes email verification, password reset functionality, and protected routes.

##  Features

-  User Registration
-  User Login
-  JWT Authentication
-  Secure HTTP-Only Cookies
-  Email Verification with OTP
-  Forgot Password
-  Password Reset via OTP
-  Protected Routes
-  User Dashboard
-  Logout
-  Responsive UI
-  Toast Notifications

---

##  Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS
- React Toastify
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- Nodemailer
- Cookie Parser
- dotenv

---

##  Project Structure

```
authentication-system/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/amritalakshmim/mern-auth-system.git
cd mern-auth-system
```

---

### 2. Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd ../client
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

NODE_ENV=your_node_environment

SMTP_USER=your_email@gmail.com

SMTP_PASS=pass_key

SENDER_EMAIL=your_email@gmail.com

CLIENT_URL=http://localhost:5173
```

---

## ▶️ Running the Project

### Start Backend

```bash
cd server
npm run server
```

### Start Frontend

```bash
cd client
npm run dev
```

---

## 🔐 Authentication Flow

### User Registration

- User enters name, email, and password
- Password is hashed using bcrypt
- User account is created
- JWT token is generated
- Authentication cookie is stored

### Email Verification

- OTP is sent to the registered email
- User enters OTP
- Email is verified

### Login

- User logs in using email and password
- Credentials are validated
- JWT token is generated
- Secure cookie is created

### Forgot Password

- User requests password reset
- OTP is sent to the registered email
- User verifies OTP
- Password is updated securely

---


## 🔒 Security Features

- Password Hashing with bcrypt
- JWT Authentication
- HTTP-Only Cookies
- Protected Backend Routes
- Environment Variables
- Password Reset via OTP
- Email Verification

---


## 🧑‍💻 Future Improvements

- Google Authentication
- GitHub Authentication
- Refresh Tokens
- Role-Based Authorization
- User Profile Management
- Change Password
- Dark Mode
- Rate Limiting
- Account Lock after Multiple Failed Attempts

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👩‍💻 Author

**Amritalakshmi M.**

GitHub: https://github.com/amritalakshmim