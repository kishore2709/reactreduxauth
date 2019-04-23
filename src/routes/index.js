import Signin from "../components/auth/signin";
import Signup from "../components/auth/signup";
import Welcome from "../components/welcome";
import Aboutus from "../components/pages/aboutus";
import Contactus from "../components/pages/contactus";

import Admin from "../components/admin/adminpanel";
import UserPanel from "../components/user/userpanel";
import Feature from "../components/feature";
import Signout from "../components/auth/signout";
import Dashboard from "../components/layout/Dashboard/Dashboard";

import LoginLayout from "../layouts/LoginLayout";
import DashboardLayout from "../layouts/DashboardLayout";

export const publicRoutes = [
  {
    path: "/",
    layout: LoginLayout,
    component: Welcome
  },
  {
    path: "/signin",
    layout: LoginLayout,
    component: Signin
  },
  {
    path: "/signup",
    layout: LoginLayout,
    component: Signup
  },
  {
    path: "/aboutus",
    layout: LoginLayout,
    component: Aboutus
  },
  {
    path: "/contactus",
    layout: LoginLayout,
    component: Contactus
  }
];

export const dashboardRoutes = [
  {
    path: "/dashboard",
    layout: DashboardLayout,
    component: Dashboard
  },
  {
    path: "/admin",
    layout: DashboardLayout,
    component: Admin
  },

  {
    path: "/signout",
    layout: DashboardLayout,
    component: Signout
  },
  {
    path: "/user",
    layout: DashboardLayout,
    component: UserPanel
  },

  {
    path: "/feature",
    layout: DashboardLayout,
    component: Feature
  }
];
