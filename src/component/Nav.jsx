import React from "react";
import aliLogo from "../assets/aliFavoritesNew.png";
import { FaMedal } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input"

const Nav = ({ mostLikes,setValue,value,setSelectedCategory }) => {
  return (
    <div className="p-1">
      <div className="flex gap-2 justify-between items-center border-b-1 p-5">
        <div className="flex gap-2 items-center">
          <div>
            <img src={aliLogo} className="max-w-[150px] md:max-w-[200px] " alt="" />
          </div>
        </div>
         <div>
          <Input onChange={(e) => {setValue(e.target.value); setSelectedCategory("All") }} value={value} type="text" placeholder="Search Here..." className="w- md md:w-2xl " />
        </div>
        <div className="flex items-end justify-center max-h-16 min-h-16 ">
          <div className=" flex flex-col justify-center items-center">
            {mostLikes.length === 0 ? (
              <></>
            ) : (
              <div className="w-5 h-5 bg-black text-white rounded-full relative text-center flex justify-center items-center">
                {mostLikes.length}
              </div>
            )}

            <div>
              <AlertDialog>
                <AlertDialogTrigger>
                  <CiHeart className="mb-1.5 w-10 h-10 cursor-pointer" />
                </AlertDialogTrigger>
                <AlertDialogContent className="flex flex-col gap-5 z-60">
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Your Favorite Items:
                    </AlertDialogTitle>
                    <AlertDialogDescription className={`flex flex-wrap gap-5 ${mostLikes.length === 0 ?  "overflow-hidden" :  "overflow-scroll"}`}>
                      {mostLikes.length === 0 ? (
                        <div>Empty</div>
                      ) : (
                        <div className="flex gap-6">
                          {mostLikes.map((item, index) => (
                            <div
                              key={item.ProductId}
                              className="bg-white border rounded-xl shadow hover:shadow-md transition overflow-hidden max-w-[300px]"
                            >
                              <div className="relative">
                                <img
                                  src={item.Image_Url}
                                  className="w-full max-h-[200px] object-cover"
                                  alt={item.Product_Desc}
                                />
                              </div>

                              <div className="p-3 flex flex-col gap-2">
                                <h2 className="font-semibold text-sm text-gray-800 truncate">
                                  {item.Product_Desc.split(" ")
                                    .slice(0, 6)
                                    .join(" ")}
                                </h2>

                                <p className="text-xs text-gray-500 truncate">
                                  {item.Product_Desc.split(" ")
                                    .slice(0, 10)
                                    .join(" ")}
                                </p>

                                <div className="flex items-center gap-2">
                                  <span className="text-green-600 font-bold text-sm">
                                    ₪{item.Discount_Price}
                                  </span>
                                  <span className="text-red-400 line-through text-xs">
                                    ₪{item.Origin_Price}
                                  </span>
                                </div>

                                <div className="flex items-center gap-2 text-yellow-500 text-sm">
                                  <FaMedal />
                                  <span className="text-gray-700 font-medium">
                                    {item.Positive_Feedback}
                                  </span>
                                </div>

                                <a
                                  href={item.Promotion_Url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <button className="cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 text-white w-full rounded-md py-1 font-semibold hover:from-blue-600 hover:to-blue-800 transition">
                                    🚀 Purchase Now
                                  </button>
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
