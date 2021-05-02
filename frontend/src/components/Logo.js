import LogoSVG from '../assets/logo/FullLogo.svg';
import {Link} from 'react-router-dom';

const Logo = (props) => {
  const linkPath = () => {
    if (props.isLoggedin === 'false')
      return './';
    else {
      return '/dashboard';
    }
  };

  return (
    <div>
      <Link to={linkPath}>
        <img src={LogoSVG} alt='Logo' className='inline h-8' />
      </Link>
    </div>
  );
}

export default Logo;