import React, { useEffect, useState } from "react";
import "./Overlay.css";
import { AiOutlineClose } from "react-icons/ai";

let id;

export default function Overlay() {
  const [showDeveloperModal, setShowDeveloperModal] = useState(false);

  useEffect(() => {
    id = setTimeout(() => {
      setShowDeveloperModal(true);
    }, 5000);

    return () => clearTimeout(id);
  }, []);

  if (!showDeveloperModal) return null;

  return (
    <div className="overlay">
      <div className="developerModal">
        <img
          src="https://res.cloudinary.com/dukwfcwcm/image/upload/v1693297322/Profile_ukf9n4.jpg"
          alt="Developer Image"
        />
        <p>
          Hello! I'm Tahseen Ahmad Bhat, a MERN Stack Developer. I make websites
          and web apps using something called the MERN Stack. It's like building
          digital houses for the internet! Whether you want a cool website or a
          helpful web tool, I'm here to do the heavy lifting and make your
          online ideas come true. Let's team up and make your web dreams happen!
          😊🌐
        </p>
        <a href="https://wa.me/916005094196" className="btn">
          Lets Connect
        </a>

        <AiOutlineClose
          className="developerModal__icon"
          onClick={() => setShowDeveloperModal(false)}
        />
      </div>
    </div>
  );
}
