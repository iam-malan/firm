declare module 'swiper' {
    interface SwiperOptions {
        slidesPerView?: number;
        spaceBetween?: number;
        loop?: boolean;
        autoplay?: {
            delay: number;
            disableOnInteraction: boolean;
        };
        pagination?: {
            el: string;
            clickable: boolean;
        };
        navigation?: {
            nextEl: string;
            prevEl: string;
        };
        breakpoints?: {
            [key: number]: {
                slidesPerView: number;
            };
        };
    }

    interface Autoplay {
        start(): void;
        stop(): void;
    }

    class Swiper {
        constructor(element: string | HTMLElement, options?: SwiperOptions);
        autoplay?: Autoplay;
    }

    export default Swiper;
}
