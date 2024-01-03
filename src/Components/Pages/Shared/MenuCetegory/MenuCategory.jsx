import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";


const MenuCategory = ({ items, title, img }) => {
  return (
    <div className='pt-8'>

      {title && <Cover img={img} title={title}></Cover>}
      <h2 className="text-emerald-500 text-2xl text-center border-b-4  my-8 mx-auto  border-rose-300">Check Our Delicious Dishes..</h2>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 my16 gap-12'>
        {
          items.map(item => <MenuItem
            key={item._id}
            item={item}
          ></MenuItem>)
        }
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
      </Link>


    </div>
  );
};

export default MenuCategory;