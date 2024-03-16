import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div
      className="footer bg-dark text-light text-center mt-4"
      style={{ padding: "20px", fontSize: "30px" }}
    >
      <a
        href="https://web.facebook.com/ahmed.khaled.3726613"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} style={{ marginRight: "10px" }} />
      </a>
      <a
        href="https://www.instagram.com/ahmedkhaled_16/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} style={{ marginRight: "10px" }} />
      </a>

      <a
        href="https://www.linkedin.com/in/ahmed-khaled-5803b4269/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: "10px" }} />
      </a>
    </div>
  );
}

export default Footer;
