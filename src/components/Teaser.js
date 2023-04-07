import React, { useState } from "react";

function Teaser() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const onLoadedData = () => {
        setIsVideoLoaded(true);
    };
    return (
        <div>
            <video controls autoPlay muted width="100%">
                <source src="1.mp4" type="video/mp4"/>
                Sorry, your browser doesn't support videos.
            </video>
        </div>
    );
}
export default Teaser;