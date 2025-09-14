Blog App (React + Appwrite)

This is a simple blog platform where users can sign up, log in, and create or manage their own posts. It’s built with React on the frontend and uses Appwrite for authentication, database, and content storage. The goal was to keep the UI clean and responsive while making the integration with Appwrite smooth.

**Features**

User authentication (register, login, logout)
Add, edit, and delete blog posts
View all posts or read a single post in detail
Rich text editor support for writing blogs
Responsive design that works on both desktop and mobile

**'Tech Stack**

Frontend: React (Vite)
Backend Service: Appwrite (Auth, Database, Storage)
Styling: CSS
Other Tools: ESLint, Environment variables

**Project Structure**

src/
 ├── Components/      # UI components like Header, Footer, Buttons, Inputs
 ├── Pages/           # Screens (Home, Login, Signup, AddPost, EditPost, etc.)
 ├── appwrite/        # Appwrite service files (auth.js, config.js)
 ├── store/           # State management
 ├── assets/          # Images and static files
 ├── App.jsx
 ├── main.jsx
 └── index.css

**Setup Instructions**

Clone the repository
git clone (https://github.com/AAKASHGUPTA2425/aakash_react/edit/main/12_MegaProject_Blog)
cd blog-app
npm install
Add a .env file in the root folder with your Appwrite details:
VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
npm run dev


**Future Improvements**

Categories and tags for posts
Comment system
Dark mode
Option to upload images with posts
