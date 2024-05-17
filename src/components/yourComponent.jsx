import React, { useState, useEffect } from 'react';

function SlidingImages() {
    const images = [
        "/icons/events&activities/e&a1.jpg",
        "/icons/events&activities/e&a2.jpg",
        "/icons/events&activities/e&a3.jpg",
        "/icons/events&activities/e&a4.jpg",
        "/icons/events&activities/e&a5.jpg",
        "/icons/events&activities/e&a6.jpg",
        "/icons/events&activities/e&a7.jpg",
        "/icons/events&activities/e&a8.jpg",
    ];

    const [start, setStart] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setStart(prevStart => (prevStart + 3) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    let src1 = images[start];
    let src2 = start + 1 < images.length ? images[start + 1] : null;
    let src3 = start + 2 < images.length ? images[start + 2] : null;

    return (
        <div className="image-group">
        
            {src1 && <div><img src={src1} alt={`Image ${start}`}  /></div>}
            {src2 && <div><img src={src2} alt={`Image ${start + 1}`} /></div>}
            {src3 && <div><img src={src3} alt={`Image ${start + 2}`} /></div>}
        </div>
    );
}

export default SlidingImages;
