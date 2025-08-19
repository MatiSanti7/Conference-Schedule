import bgHeader from "../assets/images/image-bg1.webp";

export default function HeaderAbout() {
  return (
    <header className="relative">
      <img
        src={bgHeader}
        alt=""
        className="fixed object-cover object-left w-1/3 h-full"
      />
    </header>
  );
}
