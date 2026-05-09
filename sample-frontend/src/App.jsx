import Factorial from "./Factorial";

const App = () => {
 
  return (
    <>
    <Factorial/>

    <div className="bg-[url(https://t4.ftcdn.net/jpg/03/04/86/61/360_F_304866110_63UOE2JR9mdXnB6IOlqjgNUrkkAPLvvI.jpg)] bg-no-repeat w-100% bg-cover h-150 p-5 flex flex-col justify-center items-center">
      <h1 className="w-100 text-center font-bold bg-green-400 m-3 p-5 italic text-2xl rounded-4xl shadow-2xl shadow-red-400 line-through decoration-red-500 decoration-[5px] decoration-dotted">
        Sample Project
      </h1>

      <h2 className="backdrop-blur-2sl w-50 text-center text-2xl font-bold shadow-2xl shadow-amber-500 rounded-3xl text-white">
        Welcome to Tailwind
      </h2>

  
    

      <div className="bg-mauve-400 p-10 grid grid-cols-4 gap-x-2 gap-y-2 rounded-2xl">
        <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs shadow-black"></div>
        <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs shadow-black"></div>
        <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs shadow-black"></div>
        <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs shadow-black"></div>
        <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs shadow-black"></div>
        <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs shadow-black"></div>
        <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs shadow-black"></div>
        <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs shadow-black"></div>
        <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs shadow-black"></div>
        <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs shadow-black"></div>
      </div>
    </div>
    
    </>
  );
};

export default App;