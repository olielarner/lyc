import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Crew from "../media/photos/1.jpg";

const ExpandngImage = () => {
    const expand = useRef();
    useGSAP(() => {
        const expandImage = expand.current.querySelector(".expanding-image");
        const cont = expand.current.querySelector(".crew-image__container");
        const crew = expand.current.querySelector(".crew-image");
    });

    return (
        <div ref={expand} className="expanding-image">
            <div className="crew-image__container">
                <img
                    src={Crew}
                    alt=""
                    className="crew-image w-full object-cover"
                />
            </div>
        </div>
    );
};

export default ExpandngImage;
