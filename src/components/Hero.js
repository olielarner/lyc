import React, { useRef } from "react";
import Lady from "../media/illustrations/LYC-mascot-2-1.png";
import Arrow from "../media/icons/circlearrow_white.svg";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
    const hero = useRef();

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const lineOne = hero.current.querySelector(".hero__line-one");
        const lineTwo = hero.current.querySelector(".hero__line-two");
        const lady = hero.current.querySelector(".hero__lady-ill");
        const button = hero.current.querySelector(".hero__button");
        const pattern = hero.current.querySelector(".hero__pattern");

        const ttl = gsap.timeline();

        ttl.fromTo(
            lineOne,
            {
                height: "0",
            },
            {
                height: "auto",
                duration: 0.5,
            },
            "start"
        );

        ttl.to(
            lineOne,
            {
                y: "-200",
                opacity: "0",
            },
            "2"
        );

        ttl.fromTo(
            lineTwo,
            {
                x: "200",
            },
            {
                x: "0",
                ease: "elastic.out(1,0.3)",
                duration: 1.0,
            },
            "2.5"
        );

        ttl.fromTo(
            pattern,
            {
                opacity: 0,
            },
            {
                opacity: 0.1,
            },
            " 2.7"
        );

        ttl.fromTo(
            lineTwo,
            {
                opacity: "0",
            },
            {
                opacity: "1",
                duration: 1.0,
            },
            "2.5"
        );

        ttl.fromTo(
            lady,
            {
                x: "-200",
            },
            {
                x: "0",
                ease: "elastic.out(1,0.3)",
                duration: 1.0,
            },
            "2.5"
        );
        ttl.fromTo(
            lady,
            {
                opacity: "0",
            },
            {
                opacity: "1",
                duration: 1.0,
            },
            "2.5"
        );

        ttl.fromTo(
            button,
            {
                y: "-500",
            },
            {
                y: "0",
                ease: "bounce.out",
                duration: 0.8,
            },
            "3.0"
        );
        ttl.fromTo(
            button,
            {
                opacity: "0",
            },
            {
                opacity: "1",
                duration: 0.5,
            },
            "3.0"
        );

        const otl = gsap.timeline();

        otl.to(pattern, {
            scrollTrigger: {
                trigger: ".hero",
                scrub: true,
                start: "top+=50% center",
                endTrigger: pattern,
                end: "bottom+=50% center",
            },
            x: 200,
            transformOrigin: "center center",
            ease: "linear",
        });
    });

    return (
        <div
            ref={hero}
            className="hero relative h-screen w-full overflow-hidden pt-20 bg-lyc-purple flex flex-col-reverse lg:flex-row align-middle justify-center text-3xl"
        >
            <div className="absolute hero__pattern h-full w-[150%] bg-hero-pattern"></div>
            <div className="w-full absolute h-full flex justify-center items-center top-0 left-0">
                <h2 className="relative overflow-hidden hero__line-one text-center font-unbounded text-lyc-pink text-4xl lg:text-8xl font-light">
                    YOU RUN AN <br />
                    <span className="font-normal italic">AWESOME</span>{" "}
                    BUSINESS...
                </h2>
            </div>
            <div className="w-1/2 flex">
                <img
                    src={Lady}
                    alt=""
                    className="hero__lady-ill relative right-0 object-contain w-full "
                />
            </div>
            <div className=" w-full lg:w-1/2 flex flex-col justify-start pl-10 pt-14 pr-10">
                <h3 className="hero__line-two relative left-0 font-unbounded text-lyc-yellow text-5xl lg:text-8xl font-extralight">
                    Let us help you{" "}
                    <span className=" font-normal italic">shout</span> about it.
                </h3>

                <button className="hero__button self-end  flex items-center cta mt-11 lg:self-start px-7 rounded-full bg-lyc-pink py-7 font-unbounded text-base font-light text-white">
                    Get started
                    <div className="arrow rounded-full bg-lyc-purple ">
                        <img src={Arrow} alt="" />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Hero;
