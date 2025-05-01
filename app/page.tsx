import AnimatedCarousel from "./components/carousel/carousel";
import { carouselSlides } from '../app/data/carouselData/carouselData';
import SmallBanner from "./components/smallbanner/smallBanner";
import Products from "./components/products/products";
import MainCategory from "./components/mainCategory/mainCategory";

export default function Home() {
  return (
    <div>
        <AnimatedCarousel slides={carouselSlides}/>
        <SmallBanner />
        <MainCategory />
        <Products />
    </div>
  );
}
