import kite from "../../assets/kite.svg";

const Menubar = () => {
  return (
    <>
      <div className=" bg-slate-600 grid grid-rows-2 w-1/3">
        <div className="grid grid-cols-4 gap-1 p-2">
          <img src={kite} />
        </div>
        <div className="grid grid-cols-3 ">
          <div className="bg-slate-500 p-2">
            <h1>Utilities</h1>
          </div>
          <div className="bg-slate-500 p-2">
            <h1>Updates</h1>
          </div>
          <div className="bg-slate-500 p-2">
            <h1>Education</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menubar;
