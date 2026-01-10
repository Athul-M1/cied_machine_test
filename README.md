# 🧩 Angular Dashboard Application

An Angular-based dashboard application developed as part of a **machine test**, featuring a dummy authentication system, protected routes, and reusable UI data management.

---

## 🚀 Live Demo

🔗 **Live Application**  
https://cied-machine-test.vercel.app/login

📂 **GitHub Repository**  
https://github.com/Athul-M1/cied_machine_test

📁 **Drive Link (Project Files)**  
https://drive.google.com/file/d/1_KEACDfPOApOeamHGG0pM5oufyN7eOvt/view?usp=sharing

---

## 🔐 Login Credentials (Dummy Authentication)

- **Email:** admin@gmail.com  
- **Password:** 123456  

> ⚠️ Note: Authentication is implemented using a dummy credential check for demonstration purposes.

---

## ✨ Features

- 🔑 Dummy Login Authentication
- 🛡️ Route Protection using Angular Auth Guards
- 💾 Login State Persistence using localStorage
- 📊 Dashboard with Cards and Table Data
- ♻️ Reusable Data Structure using Constants
- 🚪 Secure Logout Functionality
- 📱 Responsive UI

---

## 🧠 Technical Overview

- **Framework:** Angular
- **Routing:** Angular Router
- **Authentication:** Dummy validation logic
- **State Management:** localStorage
- **Route Protection:** Auth Guards
- **Code Structure:** Modular & reusable

---

## 📁 Reusability Approach

- Both **table data** and **card data** used in the Dashboard are maintained inside  
  `constants/index`
- This improves:
  - Code readability
  - Reusability
  - Maintainability
  - Scalability

---

## 🛠️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Athul-M1/cied_machine_test.git

# Navigate into the project folder
cd cied_machine_test

# Install dependencies
npm install

# Run the application
ng serve
