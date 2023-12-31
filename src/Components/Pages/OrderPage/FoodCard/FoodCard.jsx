

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt="Shoes" /></figure>
      <p className="absolute bg-yellow-400  font-extrabold rounded-lg text-xl mr-4 right-0  px-6 mt-6 " >$ {price} </p>
      <div className="card-body">
        <h2 className="card-title">{name} </h2>
        <p>{recipe} </p>

        <div className="card-actions justify-end">
          <button className="btn btn-outline border-b-8 border-x-sky-500 text-green-400-700 font-bold" >Add Cart</button>

        </div>
      </div>
    </div>
  );
};

export default FoodCard;