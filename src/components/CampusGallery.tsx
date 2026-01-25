import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import slider1 from "@/assets/pdeu-slider-1.jpg";
import slider2 from "@/assets/pdeu-slider-2.jpeg";
import slider3 from "@/assets/pdeu-slider-3.jpg";
import slider4 from "@/assets/pdeu-slider-4.jpeg";
import slider5 from "@/assets/pdeu-slider-5.jpg";

const CampusGallery = () => {
    const plugin = useRef(
        Autoplay({ delay: 3500, stopOnInteraction: false })
    );

    const images = [
        { src: slider1, alt: "PDEU Campus View 1" },
        { src: slider2, alt: "PDEU Campus View 2" },
        { src: slider3, alt: "PDEU Campus View 3" },
        { src: slider4, alt: "PDEU Campus View 4" },
        { src: slider5, alt: "PDEU Campus View 5" },
    ];

    return (
        <section className="py-12 lg:py-16 bg-background overflow-hidden font-sans">
            <div className="container px-4 lg:px-8">
                <div className="text-left max-w-4xl mb-12">
                    <p className="text-secondary mb-3 tracking-[0.2em] uppercase text-xs font-medium">
                        Campus Life
                    </p>
                    <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
                        State-of-the-Art Infrastructure
                    </h2>
                    <div className="h-1 w-20 bg-secondary mb-8" />
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                        Experience the vibrant campus of PDEU, where state-of-the-art facilities meet
                        sustainable architecture to create an ideal learning environment.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                            duration: 20,
                        }}
                        plugins={[plugin.current]}
                        className="w-full"
                    >
                        <CarouselContent>
                            {images.map((image, index) => (
                                <CarouselItem key={index} className="basis-full">
                                    <div className="overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] border border-muted-foreground/10 shadow-2xl group relative aspect-[16/9] md:aspect-[21/9]">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
                            <CarouselPrevious className="relative static translate-y-0 h-10 w-10 sm:h-14 sm:w-14 rounded-full border-2 border-primary/10 bg-white text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-xl" />
                            <CarouselNext className="relative static translate-y-0 h-10 w-10 sm:h-14 sm:w-14 rounded-full border-2 border-primary/10 bg-white text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-xl" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default CampusGallery;
