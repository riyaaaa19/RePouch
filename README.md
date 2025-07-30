# 🌿 RePouch Dashboard

**RePouch Dashboard** is a full-stack project developed using **React** (frontend) and **Django** (backend), built to support the RePouch sustainability initiative that promotes eco-friendly refills and pouch returns to reduce plastic waste.

Currently, the frontend and backend are developed **independently**, and integration is planned for future updates.

---

## 🚀 Features

- Track refill orders and active users  
- Monitor plastic saved (environmental impact)  
- Manage rewards and points  
- Track returned pouches and inventory status  
- Admin login, account details, and logout  

---

## 🛠️ Tech Stack

### Frontend
- React (Functional Components)
- Inline CSS
- Chart libraries for data visualization

### Backend
- Django
- Django REST Framework *(planned for API integration)*
- SQLite/PostgreSQL (as database)

---

## 📦 How to Run

### Frontend (React)

```bash
cd frontend
npm install
npm start
```


### Backend (Django)

Make sure you are in the backend directory (where `manage.py` and `requirements.txt` are located), then run:

```bash
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py runserver
```

### 🖥️ Backend Access (Django)

After running the Django server, visit:

* **Backend Root**: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
* **Admin Panel**: [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)

> Create a superuser to access the admin dashboard:

```bash
python manage.py createsuperuser
```

---

## 🎯 Upcoming

* API integration between Django and React
* Authenticated user sessions and dashboard sync
* Deployment (Frontend + Backend)
* Live map & AI insights (future enhancements)

---

## 👩‍💻 Developed By

**Riya and Team**
As part of the RePouch sustainability project.

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).




