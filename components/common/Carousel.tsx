import { ReactNode, useMemo, useRef, useState } from "react";
import LibCarousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowRight from '../../assets/icons/arrow-right-slider.png'
import ArrowLeft from '../../assets/icons/arrow-left-slider.png'
import Image from "next/image";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const CustomDot = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <button
      className={`${active ? "w-[60px] bg-[#FFFFFF]" : "w-[25px] bg-[#FFFFFF]/[.2]"} mx-[4px] h-[4px]`}
      onClick={() => onClick()}
    />
  );
};

interface Props {
  children: ReactNode[],
  responsiveConfig?: ResponsiveType
  additionalTransfrom?: number
}

export default function Carousel({children, responsiveConfig = responsive, additionalTransfrom}: Props) {
  const ref = useRef<LibCarousel>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const isActiveLeft = useMemo(() => {
    if (!ref.current) return false
    return currentSlide > 0
  }, [currentSlide])

  const isActiveRight = useMemo(() => {
    if (!ref.current) return true
    return currentSlide < (children.length - ref.current.state.slidesToShow)
  }, [currentSlide, ref.current])

  return (
    <>
      <LibCarousel
        ref={ref}
        responsive={responsiveConfig}
        swipeable={false}
        draggable={false}
        showDots={true}
        additionalTransfrom={additionalTransfrom}
        customDot={<CustomDot />}
        arrows={false}
        afterChange={(_, state) => setCurrentSlide(state.currentSlide)}
      >
        {children}
      </LibCarousel>
      <button
        onClick={() => ref && ref.current && ref.current.previous(1)}
        className={`${isActiveLeft ? "opacity-100" : "opacity-[.3]"} min-w-[56px] min-h-[56px] cursor-pointer z-100 absolute left-0 laptop:left-[24px] top-[50%] -translate-y-[50%]`}
      >
        <Image
          src={ArrowLeft}
          width={56}
          height={56}
          className="w-[32px] h-[32px] laptop:w-[56px] laptop:h-[56px]"
          alt="Memetaverse"
        />
      </button>
      <button
        onClick={() => ref && ref.current && ref.current.next(1)}
        className={`${isActiveRight ? "opacity-100" : "opacity-[.3]"} min-w-[32px] min-h-[32px] laptop:min-w-[56px] laptop:min-h-[56px] cursor-pointer z-100 absolute right-0 laptop:right-[24px] top-[50%] -translate-y-[50%]`}
      >
        <Image
          src={ArrowRight}
          width={56}
          height={56}
          className="w-[32px] h-[32px] laptop:w-[56px] laptop:h-[56px]"
          alt="Memetaverse"
        />
      </button>
    </>
  )
}