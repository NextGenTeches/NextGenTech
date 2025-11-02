"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppButton = () => {
  const phoneNumber = "916387793352"; // Your WhatsApp number in international format
  const message = "Hello! I would like to know more about NextGen Tech services.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 animate-pulse hover:animate-none"
      aria-label="Contact us on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="h-7 w-7 text-white" />
    </button>
  );
};

export default WhatsAppButton;
