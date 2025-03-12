import { useState, useEffect } from "react";

const SmoothScaleOnScroll = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY / 1000; 
      setScale(Math.min(newScale, 2)); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center ">
      <div
        className="bg-red-500 text-white p-10 rounded-lg duration"
        style={{ transform: `scale(${scale})` }}
      >
        Scroll to Scale Me Dynamically!
      </div>
      </div>

  );
};

export default SmoothScaleOnScroll;
