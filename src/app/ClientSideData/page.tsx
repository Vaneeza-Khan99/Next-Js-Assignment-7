"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ClientSideData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Page = () => {
  const [data, setData] = useState<ClientSideData[]>([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 3000)

    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const parsedResponse: ClientSideData[] = await response.json();
      console.log("products >>>", parsedResponse);
      setData(parsedResponse);
    };
    fetchData();
  }, []);

  return (
   <div className="bg-neutral-300">
                  {loading ? (
                <div className="h-screen flex flex-col items-center justify-center px-[20px] sm:px-[0px]">
                    <div className="w-[80px] h-[80px] border-t-[10px] border-t-[gray] border-[10px] border-[lightgray] mt-[15px] animate-spin rounded-[50%]"></div>
                    <h1 className="text-[25px] mt-[15px]">Loading...</h1>
                </div>
            ) : (

      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:mx-16">
        {data.map((product) => (
         <div key={product.id} className="border-2 p-4 border-slate-400 rounded-lg bg-white rounded shadow-lg transition duration-300 ease-in-out hover:scale-90 flex flex-col gap-3">
          <img src={product.image} alt={product.title} className="w-full h-48 object-contain"/> 
          <p className="text-[gray] capitalize text-lg">{product.category}</p>
          <h2 className="text-xl font-bold">{product.title}</h2>
          <p className="line-clamp-2">Description: {product.description}</p>
          <p className="font-bold text-xl">${product.price}</p>
          <div className="text-lg text-orange-400 pb-2 flex items-center">
             <Image
             src={"/Images/star-svg.svg"}
             alt={"Image"}
             width={20}
             height={20}
             ></Image>
            <p className="pl-2 ">{product.rating.rate}</p>
            <p className="pl-2">({product.rating.count} reviews)</p>
          </div>
          <button className=" w-[120px] h-[50px] rounded-xl hover:bg-black hover:text-white transition duration-300 ease-in-out hover:scale-110 bg-blue-300">Buy Now</button>
        </div>
      ))}
    </div>
            )}
  </div>
  
  );
};

export default Page;