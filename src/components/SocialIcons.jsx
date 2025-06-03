// src/components/SocialIcons.jsx
import { FaFacebookF, FaTwitch, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa';
import './SocialIcons.css';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.facebook.com/people/Mechastormtitan/61572897749820/" target="_blank" rel="noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://www.twitch.tv/mechastormtitan" target="_blank" rel="noreferrer">
        <FaTwitch />
      </a>
      <a href="https://x.com/mechastormtitan" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
      <a href="https://www.tiktok.com/@mechastormtitan?_t=zp-8tpfu675gpl&_r=1" target="_blank" rel="noreferrer">
        <FaTiktok />
      </a>
      <a href="https://www.youtube.com/@MechaStormTitan" target="_blank" rel="noreferrer">
        <FaYoutube />
      </a>
    </div>
  );
};

export default SocialIcons;
