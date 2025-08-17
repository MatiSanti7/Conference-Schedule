import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MainAbout() {
  return (
    <main className="relative h-[1950px] flex flex-col items-start w-6/12 gap-10 ml-16 text-white top-44 left-1/3">
      <h1 className="text-5xl font-bold">About the Conference</h1>
      <section>
        <h2 className="mb-3 text-3xl font-medium">
          Education for the World We Want
        </h2>
        <p className="text-xl">
          Our annual conference is a powerful gathering of professionals,
          educators, community leaders, and students dedicated to transforming
          education and building a more just, conscious, and sustainable future.
          <br />
          <br />
          More than 1,000 participants from diverse countries and backgrounds
          will join — in person or virtually — to share experiences, rethink
          current educational models, and explore new tools to make a positive
          impact in their communities.
          <br />
          <br id="faq" />
          With over 200 engaging activities, including keynote talks,
          interactive workshops, and roundtable discussions, we will explore how
          education can become a catalyst for change, strengthen social
          commitment, and inspire transformative leadership across all ages. In
          a world facing urgent challenges, this event is a unique opportunity
          to come together, share knowledge, and move forward with purpose.
        </p>
      </section>

      <section className="w-9/12">
        <h2 className="mb-3 text-3xl font-medium">FAQ</h2>
        <CAccordion>
          <CAccordionItem itemKey={1}>
            <CAccordionHeader>
              1. Where will the conference take place?
            </CAccordionHeader>
            <CAccordionBody>
              The conference will be held at [venue name], located at [full
              address].
            </CAccordionBody>
          </CAccordionItem>
          <CAccordionItem itemKey={2}>
            <CAccordionHeader>2. What are the event hours?</CAccordionHeader>
            <CAccordionBody>
              The event will start at [start time] and end around [closing
              time].
            </CAccordionBody>
          </CAccordionItem>
          <CAccordionItem itemKey={3}>
            <CAccordionHeader>
              3. Do I need to register in advance?{" "}
            </CAccordionHeader>
            <CAccordionBody>
              Yes, registration is required through [registration link/form].
              Admission is [free / paid / limited].
            </CAccordionBody>
            <CAccordionItem itemKey={4}>
              <CAccordionHeader>
                4. Is the event in-person, online, or hybrid?
              </CAccordionHeader>
              <CAccordionBody>
                The conference will be [in-person / live-streamed / hybrid]. For
                online participants, a link will be sent to registered
                attendees.
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={5}>
              <CAccordionHeader>
                5. What does the ticket/registration include?
              </CAccordionHeader>
              <CAccordionBody>
                Registration includes access to all talks and activities in the
                program. [Add coffee breaks, materials, certificates, if
                applicable.]
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={6}>
              <CAccordionHeader>
                6. Will translation or subtitles be available?
              </CAccordionHeader>
              <CAccordionBody>
                [Yes / No], translation into [language] or live subtitles will
                be provided.
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={7}>
              <CAccordionHeader>
                7. Will participants receive a certificate?
              </CAccordionHeader>
              <CAccordionBody>
                Yes, registered participants will receive a digital certificate
                by email after the event.
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={8}>
              <CAccordionHeader>8. Is parking available?</CAccordionHeader>
              <CAccordionBody>
                Yes, the venue has limited parking. We also recommend using
                public transportation or carpooling.
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={9}>
              <CAccordionHeader>
                9. Can I record or take photos during the event?
              </CAccordionHeader>
              <CAccordionBody>
                Photos are allowed, but full recordings are not permitted
                without prior consent from the organizers.
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={10}>
              <CAccordionHeader>
                10. Who can I contact for further questions?
              </CAccordionHeader>
              <CAccordionBody>
                You can reach us at [contact email] or via WhatsApp at [phone
                number].
              </CAccordionBody>
            </CAccordionItem>
          </CAccordionItem>
        </CAccordion>
      </section>
      <div className="flex gap-10">
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
    </main>
  );
}
