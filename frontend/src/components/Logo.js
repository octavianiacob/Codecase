import LogoSVG from '../assets/logo/FullLogo.svg';

const Logo = () => {
  return (
    <div>
      <a href='./'>
        <img src={LogoSVG} alt='Logo' className='inline h-8' />
      </a>
    </div>
  );
}

export default Logo;