import bgHeader from "../assets/images/image-bg5.webp";

export default function HeaderCodeCoduct() {
  return (
    <header className="relative h-[500px]">
      <img
        src={bgHeader}
        alt="image-background"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent"></div>
      <section className="absolute text-center text-white -translate-x-1/2 top-56 left-1/2">
        <h1 className="pb-3 text-5xl font-bold">Code of Conduct</h1>
        <span className="text-lg italic font-medium ">
          We are committed to providing a safe and welcoming environment for all
          participants.
        </span>
        <p className="my-5 text-2xl text-balance">
          Please read our <span className="font-bold">Code of Conduct</span> to
          understand our expectations and how we can work together to create an
          inclusive community.
        </p>
      </section>
    </header>
  );
}
