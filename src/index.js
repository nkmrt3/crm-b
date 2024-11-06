import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import SalesPage from './pages/SalesPage';
import ManagerPage from './pages/ManagerPage';
import CustomerForm from './pages/CustomerForm';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import OppForm from './pages/OppForm';
import InteractionForm from './pages/InteractionForm';
import TaskForm from './pages/TaskForm';
import TeamForm from './pages/TeamForm';
import UserForm from './pages/UserForm';
import ManageUser from './pages/UserManagement';
import EditUserPage from './pages/EditUserPage.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,//2
  },
  {
    path: "login",
    element: <LoginPage />,//3
  },
  {
    path: "adminPage",
    element: <AdminPage />,
  },
  {
    path: "salesPage",
    element: <SalesPage />,
  },
  {
    path: "managerPage",
    element: <ManagerPage />,
  },
  {
    path: "custForm",
    element: <CustomerForm />,
  },
  {
    path: "oppForm",
    element: <OppForm />,
  },
  {
    path: "interactionForm",
    element: <InteractionForm />,
  },
  {
    path: "taskForm",
    element: <TaskForm />,
  },
  {
    path: "teamForm",
    element: <TeamForm />,
  },
  {
    path: "userForm",
    element: <UserForm />, //1
  },
  {
    path: "userManagement",
    element: <ManageUser />,
  },
  {
    path: "EditUserPage",
    element: <EditUserPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
