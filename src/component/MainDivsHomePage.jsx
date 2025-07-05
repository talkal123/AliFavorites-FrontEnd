import React, { useEffect, useState } from "react";
import { FaMedal } from "react-icons/fa";

const MainDivsHomePage = ({ filteredArr }) => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(3);
  const [countThree, setCountThree] = useState(0);
  const [countFour, setCountFour] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countTwo >= 60 || countFour >= 10) {
        setCountOne(0);
        setCountTwo(3);
        setCountThree(0);
        setCountFour(1);
      } else {
        setCountOne((prev) => prev + 3);
        setCountTwo((prev) => prev + 3);
        setCountThree((prev) => prev + 1);
        setCountFour((prev) => prev + 1);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [countOne, countTwo, countThree, countFour]);

  return (
    <div className="p-10 min-h-[500px] max-h-[500px] flex flex-col gap-20 items-center">
      <div>
        <h1 className="text-2xl md:text-5xl font-bold tracking-wide font-sans animate-fade-in">
          Today's deals
        </h1>
      </div>

      <div className={`p-4 hidden md:flex gap-10 max-w-[1400px]`}>
        {filteredArr.length === 0 ? (
          <div className="flex justify-center items-center w-full h-[200px]">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          [...filteredArr]
            .sort(() => Math.random() - 0.5)
            .slice(countOne, countTwo)
            .map((product) => (
              <div
                key={product.ProductId}
                className="bg-white border rounded-xl shadow hover:shadow-md transition overflow-hidden max-w-[300px]"
              >
                <div className="relative">
                  <img
                    src={product.Image_Url}
                    className="w-full max-h-[200px] object-cover"
                    alt={product.Product_Desc}
                  />
                </div>

                <div className="p-3 flex flex-col gap-2">
                  <h2 className="font-semibold text-sm text-gray-800 truncate">
                    {product.Product_Desc.split(" ").slice(0, 6).join(" ")}
                  </h2>
                  <p className="text-xs text-gray-500 truncate">
                    {product.Product_Desc.split(" ").slice(0, 10).join(" ")}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold text-sm">
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
                  <a
                    href={product.Promotion_Url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 text-white w-full rounded-md py-1 font-semibold hover:from-blue-600 hover:to-blue-800 transition">
                      Purchase Now
                    </button>
                  </a>
                </div>
              </div>
            ))
        )}
      </div>

      <div className={`md:hidden gap-5`}>
        {filteredArr.length === 0 ? (
          <div className="flex justify-center items-center w-full h-[200px]">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          [...filteredArr]
            .sort(() => Math.random() - 0.5)
            .slice(countThree, countFour)
            .map((product) => (
              <div
                key={product.ProductId}
                className="bg-white border rounded-xl shadow hover:shadow-md transition overflow-hidden max-w-[300px] min-h-[300px]"
              >
                <div className="relative">
                  <img
                    src={product.Image_Url}
                    className="w-full max-h-[200px] object-cover"
                    alt={product.Product_Desc}
                  />
                </div>

                <div className="p-3 flex flex-col gap-2">
                  <h2 className="font-semibold text-sm text-gray-800 truncate">
                    {product.Product_Desc.split(" ").slice(0, 6).join(" ")}
                  </h2>
                  <p className="text-xs text-gray-500 truncate">
                    {product.Product_Desc.split(" ").slice(0, 10).join(" ")}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold text-sm">
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
                  <a
                    href={product.Promotion_Url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 text-white w-full rounded-md py-1 font-semibold hover:from-blue-600 hover:to-blue-800 transition">
                      Purchase Now
                    </button>
                  </a>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default MainDivsHomePage;
