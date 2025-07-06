import React, { useEffect, useState } from "react";
import { FaMedal } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { IoGridOutline } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";
import SliderHomePage from "@/component/SliderHomePage";
import MainDivsHomePage from "@/component/MainDivsHomePage";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Fade } from "react-awesome-reveal";


const HomePage = ({
  addMostLikes,
  mostLikes,
  categories,
  filteredArr,
  setFilteredArr,
  theFilter,
}) => {
  const [itemsToShow, setItemsToShow] = useState(8);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [display, setDisplay] = useState(
    "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  );
  const [buttonColor, setButtonColor] = useState("All");
  const [byId, setById] = useState(null);

  useEffect(() => {
    setItemsToShow(16);
    if (buttonColor === "All") {
      setFilteredArr(categories);
    } else if (buttonColor === "Most Popular") {
      setFilteredArr(categories.filter((p) => p.Sales180Day > 5000));
    } else if (buttonColor === "Most Sales") {
      setFilteredArr(categories.filter((p) => p.Sales180Day > 10000));
    } else if (buttonColor === "Positive Feedbacks") {
      setFilteredArr(
        categories.filter((p) => parseInt(p.Positive_Feedback) > 85)
      );
    }
  }, [buttonColor, categories]);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      if (isBottom && !isLoadingMore) {
        setIsLoadingMore(true);
        setTimeout(() => {
          setItemsToShow((prev) => prev + 16);
          setIsLoadingMore(false);
        }, 1000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoadingMore]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <SliderHomePage />
      <MainDivsHomePage filteredArr={filteredArr} />

      <div className="flex justify-center">
        <div className="p-15 min-w-full md:min-w-[1500px] flex flex-col-reverse md:flex-row justify-between gap-10 mt-10 md:mt-50">
          <div className="grid grid-cols-2 md:flex gap-5">
            {["All", "Most Popular", "Most Sales", "Positive Feedbacks"].map(
              (btn) => (
                <button
                  key={btn}
                  onClick={() => setButtonColor(btn)}
                  className={`border-1 pr-5 pl-5 md:p-3 font-semibold rounded-full cursor-pointer hover:bg-gray-200 duration-[500ms] ${
                    buttonColor === btn
                      ? "bg-black text-white font-semibold"
                      : ""
                  }`}
                >
                  {btn}
                </button>
              )
            )}
          </div>

          <div className="flex justify-end gap-5">
            <button
              onClick={() =>
                setDisplay(
                  "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                )
              }
              className={`border px-4 py-1 rounded cursor-pointer ${
                display ===
                "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  ? "bg-gray-300"
                  : ""
              }`}
            >
              <IoGridOutline className="w-5 h-5" />
            </button>
            <button
              onClick={() => setDisplay("grid-cols-1 md:grid-cols-3")}
              className={`border px-4 py-1 rounded cursor-pointer ${
                display === "grid-cols-1 md:grid-cols-3" ? "bg-gray-300" : ""
              }`}
            >
              <CiGrid2H className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-0 md:gap-20 justify-center items-center">
        <div className="flex justify-center items-center p-5">
          <h1 className="text-xl md:text-5xl font-bold tracking-wide font-sans animate-fade-in">
            Discover Your Favorite Picks 🛍️
          </h1>
        </div>

        <div className={`p-5 grid ${display} gap-5 md:gap-10 max-w-[1600px]`}>
          {theFilter.slice(0, itemsToShow).map((product) => {
            const isLiked = mostLikes.some(
              (p) => p.ProductId === product.ProductId
            );

            return (

              <AlertDialog key={product.ProductId}>
                <AlertDialogTrigger asChild>
                  <div
                    onClick={() => setById(product)}
                    className="bg-white shadow hover:shadow-md transition overflow-hidden cursor-pointer rounded-lg"
                  >
                    <div className="relative">
                      <div className="w-8 h-8 bg-white rounded-full absolute right-0 m-2 flex items-center justify-center shadow">
                        {isLiked ? (
                          <FcLike
                            onClick={(e) => {
                              e.stopPropagation();
                              addMostLikes(product);
                            }}
                            className="w-5 h-5"
                          />
                        ) : (
                          <CiHeart
                            onClick={(e) => {
                              e.stopPropagation();
                              addMostLikes(product);
                            }}
                            className="w-5 h-5"
                          />
                        )}
                      </div>
                      <img
                        loading="lazy"
                        src={product.Image_Url}
                        className="w-full min-h-[200px] max-h-[300px] md:max-h-[300px] md:min-h-[300px] object-cover"
                        alt={product.Product_Desc}
                      />
                    </div>

                    <div className="p-3 flex flex-col gap-2">
                      <h2 className="font-semibold text-xl text-gray-800 truncate">
                        {product.Product_Desc.split(" ").slice(0, 6).join(" ")}
                      </h2>
                      <p className="text-xs text-gray-500 truncate">
                        {product.Product_Desc.split(" ").slice(0, 10).join(" ")}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600 font-bold text-xs md:text-sm">
                          ₪{product.Discount_Price}
                        </span>
                        <span className="text-red-400 line-through text-xs">
                          ₪{product.Origin_Price}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-yellow-500 text-sm">
                        <FaMedal />
                        <span className="text-gray-700 font-medium">
                          {product.Positive_Feedback}
                        </span>
                      </div>
                    </div>
                  </div>
                </AlertDialogTrigger>
                

                <AlertDialogContent className="z-60">
                  <AlertDialogHeader></AlertDialogHeader>

                  <div className="space-y-4">
                    {product.Video_Url ? (
                      <video
                        loading="lazy"
                        src={product.Video_Url}
                        controls
                        className="w-full max-h-[300px] min-h-[300px] md:max-h-[300px] md:min-h-[300px] object-cover"
                      />
                    ) : (
                      <img
                        loading="lazy"
                        src={product.Image_Url}
                        alt={product.Product_Desc}
                        className="w-full max-h-[300px] min-h-[300px] md:max-h-[300px] md:min-h-[300px] object-cover"
                      />
                    )}

                    <p className="text-gray-600 text-sm">
                      {product.Product_Desc}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="text-green-600 font-bold text-xl">
                        ₪{product.Discount_Price}
                      </span>
                      <span className="text-red-400 line-through text-sm">
                        ₪{product.Origin_Price}
                      </span>
                    </div>
                    <a
                      href={product.Promotion_Url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 text-white w-full rounded-md py-2 font-semibold hover:from-blue-600 hover:to-blue-800 transition">
                        Purchase
                      </button>
                    </a>
                  </div>

                  <AlertDialogFooter>
                    <AlertDialogCancel className="cursor-pointer w-full">
                      Close
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

            );
          })}
        </div>

        {isLoadingMore && (
          <div className="text-center text-gray-500 my-10 animate-pulse">
            Loading More Items...
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
