import banner from '../../images/banner.webp';

function Header() {
  return (
    <header className="center">
      <img
        class="banner"
        src={banner}
        alt="Chiefs Banner"
        />
    </header>
  )
}

export default Header;
