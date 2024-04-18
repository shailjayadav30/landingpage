const HeroSection = () =>{
  return (
  <main className="   flex justify-center items-center h-full">
    <div className="  ml-16 mr-16">
      <h1 className="text-6xl font-semibold"> YOUR  FEET <br /> DESERVE <br />THE BEST </h1>
      <p className=" pt-4  text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Dolorem, sequi! Consequatur ipsum veniam velit   iure, <br /> voluptatibus maxime optio quia magni illo nostrum <br /> debitis, dolores tenetur ab modi molestias sequi?</p>

     <div className=" pt-6 pl-4"> 
     <button className="bg-red-500 p-2 rounded "> Shop Know</button>
     <button className="bg-slate-300 ml-6 p-2 rounded">Category</button>
     </div>
      <h1 className=" pt-4 pl-4"> Also available on</h1>
     <div className=" flex pl-4 pt-4">
      <img className="" src="/images/amazon.png" alt="" />
      <img className="mix-blend-multiply" src="/images/flipkart.png" alt="" />
     </div>
    </div>
    <div className="bg-white-500  ">
     <img className="" src="/images/s.png" alt="" />
    </div>
  </main>
  )
};


export default HeroSection