import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import Man from "../media/photos/profile.png";

const Member = () => {
    const person = useRef();

    useGSAP(() => {
        let yellowBorder = person.current.querySelector(".yellow-border");
        let info = person.current.querySelector(".crew-info");
        let hoverAnimation = gsap.to(yellowBorder, {
            top: "-20px",
            left: "-20px",
            duration: 0.2,
        });
        let infoAnimation = gsap.to(info, {
            scale: 0,
            rotate: 90,
            duration: 0.6,
            ease: "power3.inOut",
        });
        person.current.addEventListener("mouseenter", () =>
            hoverAnimation.reverse()
        );
        person.current.addEventListener("mouseleave", () =>
            hoverAnimation.play()
        );
        person.current.addEventListener("mouseenter", () =>
            infoAnimation.reverse()
        );
        person.current.addEventListener("mouseleave", () =>
            infoAnimation.play()
        );
    });

    return (
        <div
            ref={person}
            className="w-full mb-9 lg:mb-0 lg:w-1/3 relative cursor-crosshair"
        >
            <div className="yellow-border w-full lg:w-11/12 absolute -top-[0px] -left-[0px] border-t-[20px] h-full border-l-[20px] border-r-[20px] border-b-[80px] border-lyc-yellow"></div>
            <div className="w-full lg:w-11/12 relative top-0 left-0 border-t-[20px] border-l-[20px] border-r-[20px] border-b-[80px] border-lyc-pink">
                <img src={Man} alt="" className=" scale-110 origin-bottom" />
            </div>
            <div className="crew-info scale-1 rotate-0 absolute rounded-full h-80 bottom-64 flex justify-center flex-col items-center mx-auto left-0 right-0 w-80 bg-black text-white text-center">
                <p className=" font-unbounded text-3xl mb-4">Alan CoolGuy</p>
                <p className=" font-unbounded uppercase font-extralight">
                    Does Cool Stuff
                </p>
            </div>
        </div>
    );
};

const OurCrew = () => {
    return (
        <div className="our-crew bg-lyc-purple py-20 lg:py-40">
            <div className="container mx-auto flex">
                <div className="w-full mb-16 lg:mb-28">
                    <h2 className=" font-unbounded font-normal text-center lg:text-left text-4xl lg:text-6xl text-white">
                        Our Crew
                    </h2>
                </div>
            </div>
            <div className="container mx-auto flex flex-col lg:flex-row">
                <Member />
                <Member />
                <Member />
            </div>
        </div>
    );
};

export default OurCrew;
