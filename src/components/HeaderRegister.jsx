import bgHeader from "../assets/images/image-bg4.webp";

export default function HeaderRegister() {
  return (
    <header className="relative h-[500px]">
      <img
        src={bgHeader}
        alt="image-background"
        className="object-cover w-full h-full"
      />
      <section className="absolute text-center text-white -translate-x-1/2 top-56 left-1/2">
        <h1 className="pb-3 text-5xl font-bold">Conference Registration</h1>
        <span className="text-lg italic font-medium ">
          Join us for an unforgettable experience!
        </span>
        <p className="my-5 text-2xl text-balance">
          Register now to secure your spot at the conference and be part of an
          inspiring event filled with knowledge, networking, and innovation.
        </p>
      </section>
    </header>
  );
}
