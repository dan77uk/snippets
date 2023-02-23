import { useState, useEffect } from "react";

export default function TrackScroll() {
  const [yPosition, setYPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setYPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <div style={{ position: "fixed" }}>
        <h2>Y Position: {yPosition}</h2>
        <pre>
          <code>
            {`import { useState, useEffect } from "react";

export default function TrackScroll() {
  const [scrollTop, setScrollTop] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.pageYOffset);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);`}
          </code>
        </pre>
      </div>
    </div>
  );
}
