import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ImageOne from "../media/photos/1.jpg";
import ImageThree from "../media/photos/3.jpg";

import Logo from "../media/illustrations/LYC-PNG-1.png";

const Row = ({ copy, flex, image }) => {
    const team = useRef();

    useGSAP(() => {
        let teamImage = team.current.querySelector(".team-row-image");
        let teamCopy = team.current.querySelector(".team-row-copy");

        let mm = gsap.matchMedia();

        mm.add("(min-width: 800px)", () => {
            // desktop setup code here...

            gsap.to(teamImage, {
                scrollTrigger: {
                    trigger: teamImage,
                    scrub: true,
                    start: "top bottom",
                    end: "bottom top",
                },
                bottom: 200,
                ease: "none",
            });
        });

        gsap.to(teamImage, {
            scrollTrigger: {
                trigger: teamImage,
                scrub: false,
                start: "top bottom-=200pxs",
                end: "bottom top",
            },
            width: "100%",
            duration: 1.5,
            ease: "power3.out",
            toggleActions: "play pause resume reset",
        });

        const anim = gsap.fromTo(
            teamCopy,
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
            trigger: teamCopy,
            animation: anim,
            toggleActions: "play pause resume reverse",
        });
    });

    return (
        <div
            ref={team}
            className={`team-row flex flex-col lg:flex-${flex} container mx-auto lg:py-14`}
        >
            <div
                className={`team-row-copy w-full lg:w-1/2 relative top-0 flex justify-center py-10 lg:py-0 items-center`}
            >
                <p className=" font-unbounded text-2xl lg:text-4xl text-lyc-purple text-center w-full lg:w-2/3">
                    {copy}
                </p>
            </div>
            <div className="w-full lg:w-1/2">
                <div
                    className="team-row-image relative bg-center bottom-0 w-[0%] h-[500px] bg-cover"
                    style={{ backgroundImage: `url(` + image + `)` }}
                />
            </div>
        </div>
    );
};

const WhoWeAre = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const bgFade = gsap.to(".the-team", {
            backgroundColor: "#ffb00c",
            duration: 1.5,
            ease: "power3.out",
        });

        ScrollTrigger.create({
            trigger: ".the-team",
            start: "top center",
            animation: bgFade,
            toggleActions: "play pause resume reverse",
        });

        const icon = gsap.timeline();
        icon.to(".lyc-logo", {
            bottom: "50%",
            left: "50%",
            scale: 1.5,
        });

        icon.to(".lyc-logo", {
            bottom: "100%",
            left: "0%",
        });

        ScrollTrigger.create({
            trigger: ".the-team",
            animation: icon,
            scrub: true,
            start: "top bottom",
            end: "bottom top",
        });
    });

    return (
        <div className="the-team relative overflow-hidden w-full bg-white pt-20 pb-10 lg:pb-60">
            <div className="container mx-auto flex">
                <div className="w-full  lg:mb-20">
                    <h2 className=" font-unbounded font-normal text-center lg:mb-16 text-5xl lg:text-9xl text-lyc-pink">
                        Who we are
                    </h2>
                </div>
            </div>
            <Row
                flex="row"
                copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla maximus ultricies consequat. Interdum et malesuada
                    fames ac ante ipsum primis in faucibus."
                image={ImageOne}
                para={200}
            />
            <Row
                flex="row-reverse"
                copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla maximus ultricies consequat. Interdum et malesuada
                    fames ac ante ipsum primis in faucibus."
                image={ImageThree}
                para={100}
            />
            <img src={Logo} alt="" className="absolute lyc-logo" />
        </div>
    );
};

export default WhoWeAre;
