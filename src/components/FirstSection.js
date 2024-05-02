import React, { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FirstSection = () => {
    const first = useRef();

    useGSAP(() => {
        const firstPara = first.current.querySelector(
            ".first-section__opening-para"
        );
        const cont = first.current.querySelector(".crew-image__container");
        const crew = first.current.querySelector(".crew-image");

        const anim = gsap.fromTo(
            firstPara,
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
            trigger: firstPara,
            animation: anim,
            toggleActions: "play pause resume reverse",
        });

        const otl = gsap.timeline();

        otl.from(cont, {
            scrollTrigger: {
                trigger: cont,
                scrub: true,
                start: "top center",
                endTrigger: crew,
                end: "bottom center",
            },
            scale: 0.5,
            transformOrigin: "top center",
            ease: "linear",
        });
    });

    return (
        <div ref={first} className="w-full first-section">
            <div className=" py-28 container mx-auto font-unbounded text-lyc-purple text-2xl lg:text-4xl text-center">
                <p className="first-section__opening-para mx-auto w-full lg:max-w-[50%] leading-normal font-light">
                    <strong>Love Your Content</strong> is a digital marketing
                    agency based in The Cotswolds. We are known for delivering
                    visually striking digital solutions that transform your
                    online presence.
                </p>
            </div>
        </div>
    );
};

export default FirstSection;
