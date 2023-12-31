import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import UserLogin from "../Pages/UsersPage/UserLogin/UserLogin";
import UserRegister from "../Pages/UsersPage/UserRegister/UserRegister";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/OrderPage/Order/Order";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <UserLogin></UserLogin>
      },
      {
        path: '/register',
        element: <UserRegister></UserRegister>
      },

      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <Order></Order>

      },

    ]
  },
]);

export default router;