import React from "react";
import JaggedLine from "../media/patterns/jagged-line.png";
const JaggedRev = () => {
    return (
        <div className="w-full relative bg-lyc-purple">
            <div className="h-1/2 w-full absolute top-0 bg-white"></div>
            <img src={JaggedLine} alt="" className="w-full relative bottom-0" />
        </div>
    );
};

export default JaggedRev;
