import bgHeader from "../assets/images/image-bg3.webp";

export default function HeaderAM() {
  return (
    <header className="relative h-screen">
      <img
        src={bgHeader}
        alt="image-background"
        className="fixed object-cover w-full h-full"
      />
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent"></div>
      <section className="absolute text-center text-white -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <h1 className="pb-3 text-5xl font-bold">Accommodation Meals</h1>
        <span className="text-lg italic font-medium ">
          Comfortable stays and delicious meals for our attendees.
        </span>
        <p className="my-5 text-2xl text-balance">
          We have partnered with several hotels to offer discounted rates for
          conference attendees. Additionally, meals will be provided during the
          event, including breakfast, lunch, and refreshments.
        </p>
      </section>
    </header>
  );
}
