import React, { useState } from "react";
import classNames from "classnames";

import Minus from "../media/icons/Minus";
import Arrow from "../media/icons/circlearrow_white.svg";

const SingleService = ({ title, copy }) => {
    const [plusColour, setPlusColour] = useState("#3446a4");
    const [plusSign, setPlusSign] = useState(true);

    return (
        <div
            className="service__single py-7 px-3 lg:px-0 border-b-[1px] cursor-pointer border-lyc-purple "
            onMouseOver={() => setPlusSign(false)}
            onMouseOut={() => setPlusSign(true)}
        >
            <div className="service__single-title  font-unbounded flex justify-between items-center">
                <h3 className="text-xl lg:text-5xl text-lyc-purple">{title}</h3>
                <div className="w-6 lg:w-10">
                    <Minus fill={plusColour} plus={plusSign} />
                </div>
            </div>
            <div
                className={classNames(
                    { "max-h-0": plusSign },
                    { "max-h-[1000px]": !plusSign },
                    "service__single-copy transition-all duration-1000 origin-top overflow-hidden"
                )}
            >
                <div className=" py-10 lg:py-20 font-unbounded leading-loose text-sm font-light text-lyc-purple mx-auto w-full lg:w-2/3">
                    {copy}

                    <button className="hero__button flex items-center cta mt-11 self-start px-7 rounded-full bg-lyc-pink py-7 font-unbounded text-base font-light text-white">
                        Find out more
                        <div className="arrow rounded-full bg-lyc-purple ">
                            <img src={Arrow} alt="" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

const OurServices = () => {
    return (
        <div className="services py-12 lg:py-32">
            <div className="container mx-auto flex">
                <div className="w-full mb-10 xl:mb-20">
                    <h2 className=" font-unbounded font-normal text-center mb-0 lg:mb-16 text-4xl lg:text-9xl text-lyc-pink">
                        Our Services
                    </h2>
                </div>
            </div>
            <div className="container max-w-6xl mx-auto border-t-[1px] border-lyc-purple">
                <SingleService
                    title="Social Media Content"
                    copy="Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit justo fermentum hac velit neque lectus dui, nascetur cras donec metus nisi ad pharetra cursus luctus litora curabitur leo penatibus porttitor.

Sem hendrerit lacus eu dignissim nam ligula sociis taciti, gravida metus auctor luctus felis euismod suscipit primis, eget morbi aliquam vulputate congue dis tincidunt. A aliquet quam phasellus dis blandit quisque laoreet, integer at rutrum justo curae condimentum lacus, primis turpis malesuada senectus sem pulvinar."
                />
                <SingleService
                    title="Branding & Design"
                    copy="Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit justo fermentum hac velit neque lectus dui, nascetur cras donec metus nisi ad pharetra cursus luctus litora curabitur leo penatibus porttitor.

Sem hendrerit lacus eu dignissim nam ligula sociis taciti, gravida metus auctor luctus felis euismod suscipit primis, eget morbi aliquam vulputate congue dis tincidunt. A aliquet quam phasellus dis blandit quisque laoreet, integer at rutrum justo curae condimentum lacus, primis turpis malesuada senectus sem pulvinar."
                />
                <SingleService
                    title="Video Production"
                    copy="Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit justo fermentum hac velit neque lectus dui, nascetur cras donec metus nisi ad pharetra cursus luctus litora curabitur leo penatibus porttitor.

Sem hendrerit lacus eu dignissim nam ligula sociis taciti, gravida metus auctor luctus felis euismod suscipit primis, eget morbi aliquam vulputate congue dis tincidunt. A aliquet quam phasellus dis blandit quisque laoreet, integer at rutrum justo curae condimentum lacus, primis turpis malesuada senectus sem pulvinar."
                />
                <SingleService
                    title="Photography"
                    copy="Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit justo fermentum hac velit neque lectus dui, nascetur cras donec metus nisi ad pharetra cursus luctus litora curabitur leo penatibus porttitor.

Sem hendrerit lacus eu dignissim nam ligula sociis taciti, gravida metus auctor luctus felis euismod suscipit primis, eget morbi aliquam vulputate congue dis tincidunt. A aliquet quam phasellus dis blandit quisque laoreet, integer at rutrum justo curae condimentum lacus, primis turpis malesuada senectus sem pulvinar."
                />
                <SingleService
                    title="Web Design"
                    copy="Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit justo fermentum hac velit neque lectus dui, nascetur cras donec metus nisi ad pharetra cursus luctus litora curabitur leo penatibus porttitor.

Sem hendrerit lacus eu dignissim nam ligula sociis taciti, gravida metus auctor luctus felis euismod suscipit primis, eget morbi aliquam vulputate congue dis tincidunt. A aliquet quam phasellus dis blandit quisque laoreet, integer at rutrum justo curae condimentum lacus, primis turpis malesuada senectus sem pulvinar."
                />
                <SingleService
                    title="Copywriting"
                    copy="Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit justo fermentum hac velit neque lectus dui, nascetur cras donec metus nisi ad pharetra cursus luctus litora curabitur leo penatibus porttitor.

Sem hendrerit lacus eu dignissim nam ligula sociis taciti, gravida metus auctor luctus felis euismod suscipit primis, eget morbi aliquam vulputate congue dis tincidunt. A aliquet quam phasellus dis blandit quisque laoreet, integer at rutrum justo curae condimentum lacus, primis turpis malesuada senectus sem pulvinar."
                />
            </div>
        </div>
    );
};

export default OurServices;
