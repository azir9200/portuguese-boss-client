

import useMenu from '../../../Hooks/UseMenu';
import SectionTItle from '../../SectionTitle/SectionTItle';

import MenuItem from '../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
  const [menus] = useMenu();
  const popular = menus.filter(item => item.category === 'popular');

  return (
    <section>
      <SectionTItle
        subHeading={"Chef Recommendtion"}
        heading={"Order Online"}
      ></SectionTItle>
      <div className='grid sm:grid-cols-1 md:grid-cols-2  gap-12'>
        {
          popular.map(item => <MenuItem
            key={item._id}
            item={item}
          ></MenuItem>)
        }
      </div>
      <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
    </section>

  );
};

export default PopularMenu;