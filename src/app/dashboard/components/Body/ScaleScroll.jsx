import { useEffect, useState } from "react";

const ScaleScroll = () => {
  const [scale, setScale] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScale(scrollY > 70); // Scale when scrolled 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className="h-[150vh] flex items-center justify-center ">
      <div
        className={`transition-transform duration-500 ${
          scale ? "scale-150" : "scale-125"
        } bg-blue-500 text-white p-10 rounded-lg`}
      >
        Scroll to Scale Me!
      </div>
    </div>
  
    </>
  );
};

export default ScaleScroll;
