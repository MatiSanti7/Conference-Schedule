import bgHeader from "../assets/images/image-bg1.webp";

export default function HeaderAbout() {
  return (
    <header className="relative">
      <img
        src={bgHeader}
        alt=""
        className="fixed object-cover object-left w-1/3 h-full"
      />
      <div className="fixed top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black to-transparent"></div>
    </header>
  );
}
