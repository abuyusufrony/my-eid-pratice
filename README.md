# 🧠 AI Blog UI - RonyDev

A simple and modern blog web application built with **React.js**, styled using **Tailwind CSS** and **Mamba UI**. The app features a dynamic home banner, blog listing via API, local bookmarking, and theme toggling — all neatly managed in a responsive layout.

---

## ✨ Features

- ⚡ Stylish, responsive UI using **Tailwind CSS** & **Mamba UI**
- 📚 Blog list page with data fetched from an API
- 🔖 Bookmark blog posts using **localStorage**
- 🌙 Light/Dark theme toggle (persists in localStorage)
- 🧑 Blog details view with tabs for **Content** and **Author**
- 🔥 Animated gradient banner and custom hero section

---

## 🚀 Pages & Components (In Serial Order)

1. **`Nav`**: Navigation bar with light/dark theme toggle  
2. **`Banner`**: Hero section with AI-themed welcome message  
3. **`Home`**: Wrapper component displaying `Banner` and blog list  
4. **`Blogs`**: Displays a list of all blog posts  
5. **`AllPost`**: Reusable component to show individual blog cards  
6. **`BlogDetails`**: Detailed view with tabs for blog content and author  
7. **`Bookmarks`**: Displays saved/bookmarked posts from localStorage  
8. **`Hook`**: Main layout component including `Nav`, `Outlet`, and footer  
9. **`utils/Local.js`**: LocalStorage utility functions for bookmarking  

---

## 🧰 Languages & Technologies Used

| Tech             | Description                          |
|------------------|--------------------------------------|
| **React.js**     | JavaScript library for UI development |
| **Tailwind CSS** | Utility-first CSS framework          |
| **Mamba UI**     | Pre-built component library for React |
| **HTML**         | Structure and markup of the app      |
| **JavaScript**   | Logic, functionality, and interaction |
| **React Router** | For page routing and navigation      |
| **Local Storage**| For persisting bookmarks and theme   |

---

## 💾 Local Storage Functions

Found in `utils/Local.js`:

- `store()`  
  → Retrieves all bookmarked blog posts from localStorage.

- `saveLocal(post)`  
  → Saves a blog post to localStorage for bookmarking.

- `DltLocal(id)`  
  → Deletes a bookmarked post from localStorage by ID.

---

## 📂 Folder Structure (Simplified)

```bash
src/
│
├── components/
│   ├── Nav.jsx
│   ├── Banner.jsx
│   ├── AllPost.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Blogs.jsx
│   ├── BlogDetails.jsx
│   ├── Bookmarks.jsx
│
├── layout/
│   ├── Hook.jsx
│
├── utils/
│   ├── Local.js
│
├── App.jsx
└── main.jsx
---



## 🌐 Live Demo

## 🌐 Live Demo

🚀 **Check out the live version here:**  
🔗 [AI Blog UI - RonyDev Live](http://smart-deer.surge.sh)



