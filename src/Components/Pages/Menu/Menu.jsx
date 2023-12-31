// import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover/Cover";
import menuImg from '../../../assets//menu/banner3.jpg'
import dessImg from '../../../assets/menu/dessert-bg.jpeg'
import soapImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
// import PopularMenu from "../PopularMenu/PopularMenu";
import useMenu from "../../../Hooks/UseMenu";
import SectionTItle from "../../SectionTitle/SectionTItle";
import MenuCategory from "../Shared/MenuCetegory/MenuCategory";

const Menu = () => {
  const [menus] = useMenu();
  const dessert = menus.filter(item => item.category === 'dessert');
  const soap = menus.filter(item => item.category === 'soup');
  const salad = menus.filter(item => item.category === 'salad');
  const pizza = menus.filter(item => item.category === 'pizza');
  const offered = menus.filter(item => item.category === 'offered');


  return (
    <div>
      {/* <Helmet>
        <title>Bistro Bite ||  Menu</title>
      </Helmet> */}
      <Cover img={menuImg} title={"Our Menu"} ></Cover>
      <SectionTItle
        heading={"Today's Offer !"}
        subHeading={"Don not miss it !"}
      ></SectionTItle>
      <MenuCategory items={offered} ></MenuCategory>
      <MenuCategory items={dessert} title="Dessert" img={dessImg} ></MenuCategory>
      <MenuCategory items={soap} title="Soap" img={soapImg} ></MenuCategory>
      <MenuCategory items={salad} title="Salad" img={saladImg} ></MenuCategory>
      <MenuCategory items={pizza} title="Pizza" img={pizzaImg} ></MenuCategory>

    </div>
  );
};

export default Menu;