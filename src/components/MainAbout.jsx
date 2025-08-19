import aboutData from "../assets/data/about.json";
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
    <main className="relative flex flex-col items-start w-6/12 h-full mb-56 ml-16 text-white top-44 left-1/3">
      <h1 className="mb-5 text-5xl font-bold">{aboutData.main.title}</h1>
      <section>
        <h2 className="mb-3 text-3xl font-medium">
          {aboutData.main.sections[0].subtitle}
        </h2>
        {aboutData.main.sections[0].paragraphs.map((text, i) => (
          <p key={i} className="mb-4 text-xl">
            {text}
          </p>
        ))}
      </section>

      <section className="relative z-10 w-9/12">
        <span className="absolute text-red-500 opacity-0 -top-20" id="faq">
          FAQ
        </span>
        <h2 className="pt-16 mb-3 text-3xl font-medium">FAQ</h2>
        <CAccordion>
          {aboutData.faq.map((faq) => (
            <CAccordionItem key={faq.key} itemKey={faq.key}>
              <CAccordionHeader>
                {faq.key}. {faq.ask}
              </CAccordionHeader>
              <CAccordionBody>{faq.answer}</CAccordionBody>
            </CAccordionItem>
          ))}
        </CAccordion>
      </section>
      <div className="flex gap-10 pt-16">
        <section>
          <h2 className="mb-3 text-3xl font-medium">
            {aboutData.main.sections[1].subtitle}
          </h2>
          <p className="text-xl">{aboutData.main.sections[1].text1}</p>
          <ul className="flex flex-col gap-2 mx-3 my-3 ml-10 text-xl list-disc ">
            {aboutData.main.sections[1].paragraphs.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
          <p className="text-xl">{aboutData.main.sections[1].text2}</p>
        </section>
        <section>
          <h2 className="mb-3 text-3xl font-medium">
            {aboutData.main.sections[2].subtitle}
          </h2>
          <div className="flex flex-col gap-3">
            {aboutData.main.sections[2].paragraphs.map((p, i) => (
              <p className="text-xl" key={i}>
                {p}
              </p>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
