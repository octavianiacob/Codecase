import FullLogoSVG from '../assets/logo/FullLogo.svg';
import SMLogo from '../assets/logo/Logo.png';

import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

const Logo = (props) => {
  const linkPath = () => {
    if (props.isLoggedin === 'false')
      return './';
    else {
      return '/dashboard';
    }
  };

  const [isFullLogo, setFullLogo] = useState(window.innerWidth < 768 || window.innerWidth > 900);

  const updateSize = () => {
    setFullLogo(window.innerWidth < 768 || window.innerWidth > 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  });

  return (
    <div>
      <Link to={linkPath}>
      {isFullLogo ? 
        <img src={FullLogoSVG} alt='Logo' className='inline h-8' /> 
        :
        <img src={SMLogo} alt='Logo' className='inline h-8' />
      }
      </Link>
    </div>
  );
}

export default Logo;