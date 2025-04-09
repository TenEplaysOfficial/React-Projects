import clsx from 'clsx';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import { useEffect, useState, useCallback, useRef } from 'react';
import { toast } from '../../utils/toast';
import Head from '../../components/Head';

type Data = (string | { url: string; alt: string })[];

const data: Data = [
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/1016/600/400',
  'https://picsum.photos/id/1018/600/400',
  { url: 'https://picsum.photos/id/1020/600/400', alt: 'Nice landscape' },
];

interface ImageSliderProps {
  animation?: 'slide' | 'fade';
  //   onSlideChangeEnd?: (index: number) => void;
}

const onSlideChangeEnd = (index: number) => {
  toast(`${index + 1}: Side effect of slider`);
};

export default function ImageSlider({
  animation = 'slide',
  // onSlideChangeEnd,
}: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const normalizedImages = data.map((img) =>
    typeof img === 'string' ? { url: img, alt: 'image' } : img,
  );

  const clearAndSetInterval = useCallback((): void => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % normalizedImages.length);
    }, 3000);
  }, [normalizedImages.length]);

  const nextImage = useCallback(() => {
    setImageIndex((prev) => (prev + 1) % normalizedImages.length);
    clearAndSetInterval();
  }, [normalizedImages.length, clearAndSetInterval]);

  const prevImage = () => {
    setImageIndex(
      (prev) => (prev - 1 + normalizedImages.length) % normalizedImages.length,
    );
    clearAndSetInterval();
  };

  const handleMouseEnter = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    toast('Mouse Enter');
  };

  const handleMouseLeave = () => {
    clearAndSetInterval();
    toast('Mouse Leave');
  };

  useEffect(() => {
    if (onSlideChangeEnd) onSlideChangeEnd(imageIndex);
  }, [imageIndex]);

  useEffect(() => {
    clearAndSetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [clearAndSetInterval]);

  const isSlide = animation === 'slide';
  const isFade = animation === 'fade';

  return (
    <>
      <Head text="Image Slider" />
    <section className="relative h-[650px] w-full overflow-hidden">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={clsx({
          'flex h-full w-full transition-transform duration-700 ease-in-out':
            isSlide,
          'relative h-full w-full': isFade,
        })}
        style={
          isSlide ? { transform: `translateX(-${imageIndex * 100}%)` } : {}
        }
      >
        {normalizedImages.map((d, i) => {
          const isActive = i === imageIndex;

          return (
            <img
              key={i}
              src={d.url}
              alt={d.alt}
              loading="lazy"
              className={clsx('h-full w-full object-cover', {
                'block shrink-0 grow-0': isSlide,
                'absolute top-0 left-0 transition-opacity duration-700 ease-in-out':
                  isFade,
                'z-10 opacity-100': isFade && isActive,
                'z-0 opacity-0': isFade && !isActive,
              })}
            />
          );
        })}
      </div>

      <div className="absolute top-1/2 z-20 flex w-full -translate-y-1/2 items-center justify-between px-2">
        <button
          onClick={prevImage}
          className="cursor-pointer rounded bg-black/50 p-2 text-white transition hover:bg-black/70"
        >
          <ArrowBigLeft />
        </button>
        <button
          onClick={nextImage}
          className="cursor-pointer rounded bg-black/50 p-2 text-white transition hover:bg-black/70"
        >
          <ArrowBigRight />
        </button>
      </div>
    </section>
    </>
  );
}
