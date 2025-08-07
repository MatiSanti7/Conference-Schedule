const Footer = () => {
  return (
    <footer className="relative z-50 w-full mx-auto text-white border-t-2 border-white bg-black/70 backdrop-blur-sm">
      <div className="flex justify-between w-5/6 mx-auto py-14">
        <ul className="grid grid-cols-3 text-xl gap-x-32 gap-y-5">
          <li className="transition-all duration-300 hover:text-red-500">
            <a href="/">Home</a>
          </li>
          <li className="transition-all duration-300 hover:text-red-500">
            <a href="/about">About</a>
          </li>
          <li className="transition-all duration-300 hover:text-red-500">
            <a href="/schedule">Schedule</a>
          </li>
          <li className="transition-all duration-300 hover:text-red-500">
            <a href="">Speakers</a>
          </li>
          <li className="transition-all duration-300 hover:text-red-500">
            <a href="">Register</a>
          </li>
          <li className="transition-all duration-300 hover:text-red-500">
            <a href="">Venue</a>
          </li>
          <li className="transition-all duration-300 hover:text-red-500">
            <a href="">Accommodation</a>
          </li>
          <li className="transition-all duration-300 hover:text-red-500">
            <a href="">Travel</a>
          </li>
          <li className="transition-all duration-300 hover:text-red-500">
            <a href="">Sponsors</a>
          </li>
          <li className="transition-all duration-300 hover:text-red-500">
            <a href="">Code of Conduct</a>
          </li>
          <li className="transition-all duration-300 hover:text-red-500">
            <a href="">FAQ</a>
          </li>
          <li className="transition-all duration-300 hover:text-red-500">
            <a href="">Contact</a>
          </li>
        </ul>
        <ul className="grid grid-cols-4 gap-5 text-4xl">
          <li>
            <a href="">
              <i
                className="transition-all duration-300 hover:text-red-500 fa fa-facebook-official"
                aria-hidden="true"
              ></i>
            </a>
          </li>
          <li>
            <a href="">
              <i
                className="transition-all duration-300 hover:text-red-500 fa fa-instagram "
                aria-hidden="true"
              ></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="transition-all duration-300 hover:text-red-500 fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="transition-all duration-300 hover:text-red-500 fa fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
