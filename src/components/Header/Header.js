import './Header.scss';
import HeaderLogo from '../../assets/images/header-logo.jpg';

const Header = () => {
  return (
    <div className="header">
      <img className="header-logo" src={HeaderLogo} alt="header-logo" />
      <p className="header-text">Search app</p>
    </div>
  );
};

export default Header;
