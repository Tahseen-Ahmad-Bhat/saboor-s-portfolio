import React from "react";
import "./DeveloperModal.css";
import Overlay from "./Overlay";

const DeveloperModal = () => {
  return (
    <Overlay visible="true">
      <div className="developerModal">Developer</div>
    </Overlay>
  );
};

export default DeveloperModal;
