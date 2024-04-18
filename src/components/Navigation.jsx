const Navigation = () =>{
  return (
  <nav className=" flex  items-center justify-between">
  <div className="p-4 "> 
   <img src="/images/icons8-nike-50.png" alt="logo" />
  </div>
  <ul className="flex text-lg font-semibold ">
    <li href="#" className="p-3">MENU</li>
    <li href="#" className="p-3">LOCATION</li>
    <li href="#"  className="p-3">ABOUT</li>
    <li href="#" className="p-3">CONTACT</li>
  </ul>
  <button className="w-[4rem] p-1 bg-red-500 mr-2 rounded-full  font-medium   "> Login</button>
</nav>
  );
};

 export default Navigation