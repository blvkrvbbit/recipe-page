type HeaderProps = {
  title: string;
  desc: string;
};

const Header = ({ title, desc }: HeaderProps) => {
  return (
    <header className='recipe-header'>
      <h1 className='title'>{title}</h1>
      <p>{desc}</p>
    </header>
  );
};

export default Header;
