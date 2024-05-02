import React from "react";
import JaggedLine from "../media/patterns/jagged-line.png";
const JaggedYellow = () => {
    return (
        <div className="w-full relative ">
            <div className="h-1/2 w-full absolute top-0 bg-lyc-yellow"></div>
            <img src={JaggedLine} alt="" className="w-full relative bottom-0" />
        </div>
    );
};

export default JaggedYellow;
