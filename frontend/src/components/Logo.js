import LogoSVG from '../assets/logo/FullLogo.svg';
import {Link} from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <Link to='./'>
        <img src={LogoSVG} alt='Logo' className='inline h-8' />
      </Link>
    </div>
  );
}

export default Logo;