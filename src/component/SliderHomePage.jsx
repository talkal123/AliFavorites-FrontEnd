import React from "react";
("use client");
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Photo1 from "../assets/slider1.jpg";
import Photo2 from "../assets/slider2.jpg";
import Photo3 from "../assets/slider3.jpg";
import { FaShoppingCart } from "react-icons/fa";

const SliderHomePage = () => {
  const photoArr = [Photo1,Photo2,Photo3];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div>
    <Carousel
      plugins={[plugin.current]}
      className="w-full relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="">
        {photoArr.map((src, index) => (
          <CarouselItem key={index} className="w-full">
            <div className="p-0">
              <Card className="p-0">
                <CardContent className="w-full h-[400px] overflow-hidden p-0">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
    <div className="flex justify-center p-5 w-full bg-[#ebebeb] rounded-md">
        <div>
            <p className="flex items-center gap-2 text-lg font-semibold text-green-600">
  <FaShoppingCart className="text-xl" />
  Start shopping your favorite deals!
</p>
        </div>
    </div>
    </div>
  );
};

export default SliderHomePage;
