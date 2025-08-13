# 🏨 Hotel Booking Web Application

A web-based platform for managing hotel operations, built with **React**, **Spring Boot**, and **PostgreSQL**. Currently, it supports **room booking management** and **customer registration**, with future plans to include **billing, staff management, and reporting**.  

---

## 📋 Features  
- ✅ **React frontend** for user-friendly hotel management  
- ✅ **Spring Boot backend** for secure API handling  
- ✅ **PostgreSQL database** for storing customer & booking details  
- ✅ **RESTful API** for smooth communication between frontend and backend  
- 🚀 **Future Enhancements**: Billing, Staff Management, Reports  

---

## 🛠 Prerequisites  
Ensure you have the following installed before running the project:  

- **Java 17+** → [Download](https://adoptium.net/)  
- **PostgreSQL** → [Download](https://www.postgresql.org/download/)  
- **Node.js & npm** → [Download](https://nodejs.org/)  
- **Spring Boot** CLI (Optional) → [Guide](https://spring.io/guides/gs/spring-boot/)
  
---

## 🚀 Installation & Setup  

### 🔹 Step 1: Clone the Repository  
```sh
git clone https://github.com/Sandeep-G-S/Hotel-Booking-Web-Application.git
````

### 🔹 Step 2: Configure the Database

1. Open **PostgreSQL** and create a new database:

   ```sql
   CREATE DATABASE hotelDb;
   ```
2. Update **application.properties** with your database details:

   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/hotel_management
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

### 🔹 Step 3: Run the Backend

```sh
cd backend
mvn spring-boot:run
```

The backend will start at **[http://localhost:8080](http://localhost:8080)** 🚀

### 🔹 Step 4: Run the Frontend

```sh
cd frontend
npm install
npm start
```

The frontend will start at **[http://localhost:5174](http://localhost:5174)** 🎨

---

## 📷 Screenshots

| **Dashboard**                           | **Room Booking**                    |
| --------------------------------------- | ----------------------------------- |
| ![Dashboard](screenshots/dashboard.png) | ![Booking](screenshots/booking.png) |

---

## 🔗 Future Enhancements

* 💳 **Automated Billing & Payment Gateway**

---

```

---

If you want, I can also **add your actual screenshots** from your hotel project folder automatically into this README so it’s ready to upload to GitHub without manual editing. That way, the README will directly display your real UI instead of placeholders like `dashboard.png`.  

Do you want me to prepare it that way?
```
