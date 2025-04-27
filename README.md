---

# Portfolio Generator

A dynamic and customizable **Portfolio Generator** platform where users can log in, input their information, and generate a fully functional, personalized portfolio website. Each user receives a **live deployed portfolio link** after generation.

## ✨ Features
- User Authentication (Login/Register)
- Dynamic Portfolio Sections (Intro, About, Technologies, Experience, Projects, Contact)
- Live Portfolio Preview
- Responsive Design
- Portfolio Hosting with Shareable Link
- Image Upload (Profile Picture, Project Images)
- Backend Storage for User Data
- Admin Panel (optional)

## 🛠 Tech Stack
- **Frontend:** React.js, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT, Bcrypt
- **Cloud Storage:** Cloudinary
- **Deployment:** Vercel (Frontend), Render (Backend)

## 📂 Project Structure
```
/client
  /src
    /components
    /pages
    /services
    /assets
  tailwind.config.js
  package.json

/server
  /controllers
  /models
  /routes
  /middlewares
  /utils
  server.js
  package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB Atlas account (or local MongoDB)
- Cloudinary account (for image uploads)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/portfolio-generator.git
cd portfolio-generator
```

2. Install frontend and backend dependencies:
```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

3. Configure environment variables:

Create a `.env` file inside the `server/` directory:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

4. Start the application:
```bash
# Backend
cd server
npm run dev

# Frontend (in a new terminal)
cd client
npm run dev
```

5. Visit `http://localhost:5173` to view the app.

## 📸 Screenshots
| Home Page | Create Portfolio | Final Portfolio |
|:---------:|:----------------:|:---------------:|
| ![Home](screenshots/home.png) | ![Form](screenshots/form.png) | ![Portfolio](screenshots/portfolio.png) |

## 🙌 Contributing
Contributions are welcome! Feel free to submit a Pull Request or open an Issue to discuss changes.

## 📜 License
This project is licensed under the [MIT License](LICENSE).

## 📞 Contact
- **Developer**: [Rupak Choppala](https://portifolio-generator-4.onrender.com/api/user/67e5133c170fef03c86d15eb)
- **LinkedIn**: [linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)
- **Email**: your-email@example.com

---
