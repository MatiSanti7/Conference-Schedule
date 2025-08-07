import bgHeader from "../assets/images/image-bg1.webp";

export default function HeaderAbout() {
  return (
    <header className="relative h-[1350px]">
      <img
        src={bgHeader}
        alt=""
        className="fixed object-cover object-left w-1/3 h-full"
      />
      <div className="fixed top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute flex flex-col items-start w-6/12 gap-10 ml-16 text-white top-44 left-1/3">
        <h1 className="text-5xl font-bold">About the Conference</h1>
        <section>
          <h2 className="mb-3 text-3xl font-medium">
            Education for the World We Want
          </h2>
          <p className="text-xl">
            Our annual conference is a powerful gathering of professionals,
            educators, community leaders, and students dedicated to transforming
            education and building a more just, conscious, and sustainable
            future.
            <br />
            <br />
            More than 1,000 participants from diverse countries and backgrounds
            will join — in person or virtually — to share experiences, rethink
            current educational models, and explore new tools to make a positive
            impact in their communities.
            <br />
            <br />
            With over 200 engaging activities, including keynote talks,
            interactive workshops, and roundtable discussions, we will explore
            how education can become a catalyst for change, strengthen social
            commitment, and inspire transformative leadership across all ages.
            In a world facing urgent challenges, this event is a unique
            opportunity to come together, share knowledge, and move forward with
            purpose.
          </p>
        </section>
        <section>
          <h2 className="mb-3 text-3xl font-medium">Why Attend?</h2>
          <p className="text-xl">
            At this conference, you will: <br />
            <br />
          </p>
          <ul className="flex flex-col gap-2 mx-3 ml-10 text-xl list-disc ">
            <li>
              Hear from national and international leaders in education,
              science, spirituality, and community development
            </li>
            <li>
              Participate in practical workshops, inspiring panels, and
              collective reflection spaces Connect with a wide network of
              change-makers and educators
            </li>
            <li>
              Discover tools, research, and resources you can apply in your own
              context
            </li>
          </ul>
          <p className="text-xl">
            <br />
            Whether you are a teacher, student, community leader, or someone
            passionate about learning and creating a better world, this event
            will offer you fresh ideas and renewed energy to take action.
          </p>
        </section>
        <section>
          <h2 className="mb-3 text-3xl font-medium">Want to learn more?</h2>
          <p className="text-xl">
            Subscribe to our newsletter to stay updated on the latest conference
            news. <br /> <br /> <strong> Questions?</strong> Contact us at{" "}
            <a
              className="font-medium transition-all duration-300 hover:text-red-500"
              href="mailto:your-email@example.org"
            >
              your-email@example.org
            </a>{" "}
            or follow us on social media for updates.
            <br />
            <br />
            Let me know if you want to adjust it for a specific audience or
            theme (like faith-based education, mental health, youth leadership,
            etc.).
          </p>
        </section>
      </div>
    </header>
  );
}
