import SectionTItle from "../../../SectionTitle/SectionTItle";
import imgFea from '../../../../assets/home/featured.jpg'
import moment from "momentos";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import '../Featured/Featured.css'


const Featured = () => {
  return (
    <div className="featured-item text-white bg-fixed mt-20 pt-8">
      <SectionTItle
        subHeading={"Featurd Item"}
        heading={"Checking Out"}
      ></SectionTItle>
      <div className="md:flex justify-center items-center py-8 px-16 ">
        <div>
          <img src={imgFea} alt="" />
        </div>
        <div className="md:ml-10">
          <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
          <div className="flex  opacity-10 bg-slate-500" >

            <Marquee pauseOnHover={true} speed={70}  >
              <Link to='/' > I can be a React component, multiple React components, or just some text.....</Link>      </Marquee>
          </div>
          <p className="" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod distinctio doloremque placeat odio molestias quaerat totam maiores suscipit. Aperiam sunt atque animi nemo nesciunt impedit minus, aliquam molestiae voluptatibus.</p>
          <button className="btn btn-outline border-b-8 border-x-sky-500 text-green-400-700 font-bold" >View Full Menu</button>



        </div>
      </div>

    </div>
  );
};

export default Featured;