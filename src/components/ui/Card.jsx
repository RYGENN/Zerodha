const Card = ({ title, description }) => {
  return (
    <div className="card text-center text-gray-600 ">
      <div className="flex flex-col gap-2 justify-center items-center  py-4">
      <h2 className=" text-5xl font-semibold text-gray-700">{title}</h2>
      <div className="p-4"><p className=" lg:mx-5 p-3">{description}</p></div>
      </div>
    </div>
  );
};

export default Card;