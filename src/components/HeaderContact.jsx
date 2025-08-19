import bgHeader from "../assets/images/image-bg3.webp";

const HeaderContact = () => {
  return (
    <header className="relative h-[500px]">
      <img
        src={bgHeader}
        alt="image-background"
        className="object-cover w-full h-full"
      />
      <section className="absolute text-center text-white -translate-x-1/2 top-56 left-1/2">
        <h1 className="pb-3 text-5xl font-bold">Contact</h1>
        <span className="text-lg italic font-medium ">
          We would love to hear from you!
        </span>
        <p className="my-5 text-2xl text-balance">
          Whether you have questions about the conference, want to get involved,
          or just want to share your thoughts, feel free to reach out.
        </p>
      </section>
    </header>
  );
};

export default HeaderContact;
