# RBAC Dashboard - React + Vite

This is a role-based access control (RBAC) dashboard built with React, Vite, and TailwindCSS. The dashboard is fully responsive, adapts to different screen sizes, and handles most edge cases. It includes user authentication and different permission levels for managing users and roles.

## Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js** (version 14.x or later)
- **npm** (Node Package Manager)

If you haven't installed these, you can download and install them from [Node.js official website](https://nodejs.org/).

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone <repository-url>
```

### 2. Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
cd <project-directory>
npm install
```

This will install all the required packages, including React, Vite, TailwindCSS, and others.

### 3. Running the Development Server

Once dependencies are installed, you can run the development server with the following command:

```bash
npm run dev
```

This will start the Vite development server and open the application in your default browser at [http://localhost:5173](http://localhost:5173). The app will automatically reload when you make changes to the code (thanks to Hot Module Replacement).

### 4. Login Credentials

To log in to the dashboard, use the following default credentials:

- **Username**: `admin@example.com`
- **Password**: `password123`

### 5. Using the Dashboard

- The dashboard is **responsive** and will adapt to different screen sizes (desktop, tablet, mobile).
- It features **role-based access control (RBAC)**, meaning users will see different views depending on their permissions.
- You can **manage users** and **assign roles** through the admin interface.

### 6. TailwindCSS and UI Libraries

- The project uses **TailwindCSS** for styling, which makes it highly customizable and responsive.
- The dashboard utilizes other modern UI libraries to enhance the user experience.

### 7. Edge Cases

The app has been designed to handle most edge cases, including:
- Invalid login attempts.
- Responsive layouts for various screen sizes.
- Proper error handling for various forms and inputs.

## Build for Production

If you're ready to deploy the project, you can build it for production:

```bash
npm run build
```

This will create a `dist` directory with the optimized production build.

### Additional Notes

- The application is built using **React**, **Vite** (for fast build and development), and **TailwindCSS** (for styling).