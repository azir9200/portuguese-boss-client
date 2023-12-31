import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';


const Root = () => {

  // const location = useLocation()
  // console.log(location);
  // const noHeaderFooter = location.pathname.includes('login')
  // const noRegister = location.pathname.includes('register')
  return (
    <div>
      {/* {noHeaderFooter || <Navbar></Navbar>} */}
      <Navbar></Navbar>
      <Outlet></Outlet>

      {/* {noHeaderFooter && noRegister || <Footer></Footer>} */}



    </div>
  );
};

export default Root;