
const SectionTItle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto  text-center md:w-4/12 my-8 " >

      <h3 className="text-yellow-600 mb-4 border-t-8 border-green-300 text-2xl" >{heading} </h3>
      <p className="text-4xl uppercase border-y-4 py-6">{subHeading} </p>

    </div>
  );
};

export default SectionTItle;