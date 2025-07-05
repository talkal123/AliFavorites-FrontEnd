import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdOutlineChair } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { MdOutlineComputer } from "react-icons/md";
import { TbPlant } from "react-icons/tb";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { LuBaby } from "react-icons/lu";
import { GiPearlNecklace } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";

const HomePageNav = ({ setCategories, categories }) => {

  const categoriesList = [
  { name: "All", icon: <CiHeart />, value: "All" },
  { name: "home", icon: <MdOutlineChair />, value: "home" },
  { name: "Computer & Office", icon: <MdOutlineComputer />, value: "Computer & office" },
  { name: "Home & Garden", icon: <TbPlant />, value: "home & Graden" },
  { name: "Sports & Entertainment", icon: <MdOutlineSportsBaseball />, value: "Sports & Entertainment" },
  { name: "Toys & Hobbies", icon: <LuBaby />, value: "Toys & Hobbies" },
  { name: "Jewelry & Accessories", icon: <GiPearlNecklace />, value: "jewelry & Accessories" },
  { name: "Lights & Lighting", icon: <FaRegLightbulb />, value: "Lights & Lighting" },
  { name: "Men Collection", icon: <GiClothes />, value: "Men Collection" },
  { name: "Women Collection", icon: <GiClothes />, value: "Women Collection" },
];

  return (
    <div className="p-3 flex md:justify-center justify-end border-b-2">
      <div className="w-full">
        <ul className="hidden md:flex items-center justify-evenly p-5">
          <Select onValueChange={(value) => {
            if (value === "home & Graden") {
              setCategories("home & Graden");
            }
            else if (value === "home & Graden") {
              setCategories("home & Graden");
            } else if(value === "Toys & Hobbies"){
              setCategories("Toys & Hobbies");
            } else if(value === "clock") {
              setCategories("clock")
            }
          }}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="More..." />
            </SelectTrigger>
            <SelectContent className="z-60">
              <SelectItem value="home & Graden">Home & Graden</SelectItem>
              <SelectItem value="clock">Clocks</SelectItem>
              <SelectItem value="Toys & Hobbies">Toys & Hobbies</SelectItem>
            </SelectContent>
          </Select>
          <li
            onClick={() => setCategories("All")}
            className={`cursor-pointer text-lg hover:text-gray-300 transition duration-[500ms]  ${
              categories === "All" ? "underline" : ""
            }`}
          >
            All
          </li>
          <li
            onClick={() => setCategories("Computer & office")}
            className={`cursor-pointer text-lg hover:text-gray-300 transition duration-[500ms] ${
              categories === "Computer & office" ? "underline" : ""
            }`}
          >
            Computer & office
          </li>
          
          <li
            onClick={() => setCategories("Sports & Entertainment")}
            className={`cursor-pointer text-lg hover:text-gray-300 transition duration-[500ms] ${
              categories === "Sports & Entertainment" ? "underline" : ""
            }`}
          >
            Sports & Entertainment
          </li>
          
          <li
            onClick={() => setCategories("Men Collection")}
            className={`cursor-pointer text-lg hover:text-gray-300 transition duration-[500ms] ${
              categories === "Men Collection" ? "underline" : ""
            }`}
          >
            Men Collection
          </li>
          <li
            onClick={() => setCategories("Women Collection")}
            className={`cursor-pointer text-lg  hover:text-gray-300 transition duration-[500ms] ${
              categories === "Women Collection" ? "underline" : ""
            }`}
          >
            Women Collection
          </li>
          <li
            onClick={() => setCategories("jewelry & Accessories")}
            className={`cursor-pointer text-lg hover:text-gray-300 transition duration-[500ms] ${
              categories === "jewelry & Accessories" ? "underline" : ""
            }`}
          >
            jewelry & Accessories
          </li>
          <li
            onClick={() => setCategories("Lights & Lighting")}
            className={`cursor-pointer text-lg hover:text-gray-300 transition duration-[500ms] ${
              categories === "Lights & Lighting" ? "underline" : ""
            }`}
          >
            Lights & Lighting
          </li>
        </ul>
        <div className="flex items-center md:hidden max-w-full">
<div className="overflow-x-auto scrollbar-thin w-full">
  <div className="flex gap-4 p-2">
   
<div className="flex gap-4 p-2">
  {categoriesList.map((category, index) => (
    <div key={index} className="flex flex-col items-center gap-1 flex-shrink-0 min-w-[72px]">
      <div
        onClick={() => setCategories(category.value)}
        className={`p-2 rounded-full transition cursor-pointer ${
          categories === category.value ? "bg-black" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-5 h-5 flex items-center justify-center ${
            categories === category.value ? "text-white" : "text-black"
          }`}
        >
          {category.icon}
        </div>
      </div>
      <span
        className={`text-sm font-medium cursor-pointer text-center transition w-16 truncate overflow-hidden whitespace-nowrap ${
          categories === category.value ? "underline text-black" : "text-gray-300"
        }`}
      >
        {category.name}
      </span>
    </div>
  ))}
</div>


   <div className="flex flex-col items-center justify-center gap-1 flex-shrink-0 min-w-[72px]">
      
      <div className="w-[80px]">
        <Select onValueChange={(value) => {
            if (value === "home & Graden") {
              setCategories("home & Graden");
            }
            else if (value === "home & Graden") {
              setCategories("home & Graden");
            } else if(value === "Toys & Hobbies"){
              setCategories("Toys & Hobbies");
            } else if(value === "clock") {
              setCategories("clock")
            }
          }}>
          <SelectTrigger className="w-full h-6 text-xs px-1">
            <SelectValue placeholder="More..." />
          </SelectTrigger>
          <SelectContent className="z-60">
            <SelectItem value="home & Graden">home & Graden</SelectItem>
            <SelectItem value="Toys & Hobbies">Toys & Hobbies</SelectItem>
            <SelectItem value="clock">Clocks</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    <div className="min-w-[12px]" />
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default HomePageNav;
