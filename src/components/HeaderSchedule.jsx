import bgHeader from "../assets/images/image-bg2.webp";

export default function HeaderSchedule() {
  return (
    <header className="relative h-[550px]">
      <img
        src={bgHeader}
        alt="image-background"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent"></div>
      <section className="absolute text-center text-white -translate-x-1/2 top-56 left-1/2">
        <h1 className="pb-3 text-5xl font-bold">Meet Our Speakers</h1>
        <span className="text-lg italic font-medium ">
          Voices That Inspire, Ideas That Transform
        </span>
        <p className="my-5 text-2xl text-balance">
          Discover the brilliant minds behind the keynotes, panels, and
          workshops of <strong> Education for the World We Want</strong>. Over
          four impactful days, these thought leaders, innovators, and educators
          will share their knowledge, stories, and practical tools to empower a
          new generation of changemakers.
        </p>
      </section>
    </header>
  );
}
