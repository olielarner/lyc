import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HudImage from "../media/our-work/hudson.jpg";
import WhitImage from "../media/our-work/whitaker.png";
import CorkImage from "../media/our-work/cork-co.jpg";
import GroupImage from "../media/our-work/groupx.jpg";
import Arrow from "../media/icons/circlearrow_white.svg";

const Work = ({ image, cat, title, url }) => {
    useGSAP(() => {
        const works = gsap.utils.toArray(".single-work");

        works.forEach((work, index) => {
            gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.fromTo(
                work,
                {
                    y: 200,
                    opacity: 0,
                },
                {
                    opacity: 1,
                    y: 0,
                    ease: "power2.out",
                    duration: 0.8,
                }
            );

            ScrollTrigger.create({
                trigger: work,
                animation: tl,
                toggleActions: "play pause resume reverse",
            });

            const image = work.querySelector(".image-cont");

            const imageExp = gsap.fromTo(
                image,
                {
                    width: "0%",
                },
                {
                    width: "100%",
                    ease: "power2.out",
                    duration: 0.8,
                }
            );

            ScrollTrigger.create({
                trigger: work,
                animation: imageExp,
                toggleActions: "play pause resume reverse",
            });
        });
    });

    return (
        <div className="w-[48%] p-8 single-work skewElem h-[700px] top-0 relative">
            <div className="w-full h-full absolute top-0 left-0 image-cont">
                <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative h-full">
                <p className="absolute right-0 font-unbounded text-lyc-pink py-3 px-6 bg-white border-x-6 border-y-6 border-lyc-pink font-extralight text-2xl">
                    {cat}
                </p>
                <h2 className="absolute bottom-0 font-unbounded text-lyc-purple py-3 px-6 bg-white border-x-8 border-y-8 border-lyc-yellow text-4xl">
                    {title}
                </h2>
            </div>
        </div>
    );
};

const OurWork = () => {
    const work = useRef();

    useGSAP(() => {});

    return (
        <div className="our-work  py-40">
            <div className="container mx-auto flex">
                <div className="w-full mb-20">
                    <h2 className=" font-unbounded font-normal text-center mb-16  text-9xl text-lyc-pink">
                        Our Work
                    </h2>
                </div>
            </div>
            <div
                ref={work}
                className="container mx-auto flex flex-wrap gap-y-[60px] justify-between relative"
            >
                <Work image={HudImage} cat="Branding" title="Hudson Rose" />
                <Work
                    image={WhitImage}
                    cat="Web Design"
                    title="WhitakerWhitaker Seager Estate Agency"
                />
                <Work image={CorkImage} cat="Social Media" title="Cork & Co" />
                <Work image={GroupImage} cat="Photography" title="Group X" />
            </div>
            <div className="container mx-auto pt-11">
                <button className="hero__button mx-auto flex items-center cta mt-11 self-start px-7 rounded-full bg-lyc-pink py-7 font-unbounded text-base font-light text-white">
                    See all
                    <div className="arrow rounded-full bg-lyc-purple ">
                        <img src={Arrow} alt="" />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default OurWork;
