/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


import Home from "views/Home";

import Login from './views/user-pages/Login';
import LoginAdmin from'./views/user-pages/Login_admin';
import Register1 from'./views/user-pages/Register';
import RegisterAdmin from'./views/user-pages/Register_admin.js';
import Dashboard from'./views/dashboard/Dashboard';
import Education from'./views/Education.js';

var routes = [
  {
    path: "/Home",
    name: "Home",
    icon: "tim-icons icon-chart-pie-36",
    component: <Home />,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/Education",
    name: "Education",
    rtlName: "",
    icon: "tim-icons icon-chart-pie-36",
    component: <Education />,
    layout: "/admin",
  },
  {
    path: "/register",
    name: "Register",
    rtlName: "",
    icon: "tim-icons icon-chart-pie-36",
    component: <Register1 />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    rtlName: "",
    icon: "tim-icons icon-chart-pie-36",
    component: <Login />,
    layout: "/admin",
  },
];
export default routes;
