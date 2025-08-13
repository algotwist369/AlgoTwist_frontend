import React, { useEffect, useState } from "react";
import ServicePopup from "../pricing/common/ServicePopup";
import FormPopup from "./FormPopup";


const PopupController = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    // Show first popup after 10 seconds
    const timer1 = setTimeout(() => {
      setShowFirst(true);
    }, 10000);

    return () => clearTimeout(timer1);
  }, []);

  const handleCloseFirst = () => {
    setShowFirst(false);

    // After closing first popup, wait 5s then show second
    const timer2 = setTimeout(() => {
      setShowSecond(true);
    }, 5000);

    return () => clearTimeout(timer2);
  };

  const handleCloseSecond = () => {
    setShowSecond(false);
  };

  return (
    <>
      {showFirst && <ServicePopup onClose={handleCloseFirst} />}
      {!showFirst && showSecond && <FormPopup onClose={handleCloseSecond} />}
    </>
  );
};

export default PopupController;
