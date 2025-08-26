import EventCMS from "./EventCMS";
import SpeakersCMS from "./SpeakersCMS";
import SponsorsCMS from "./SponsorsCMS";
import MainAboutCMS from "./MainAboutCMS";
import FaqAboutCMS from "./FaqAboutCMS";
import PropTypes from "prop-types";
import ScheduleCMS from "./ScheduleCMS";
import AMCMS from "./AMCMS";
import CodeConductCMS from "./CodeConductCMS";
export default function MainCMS({ selected }) {
  const pages = {
    eventInfo: <EventCMS />,
    speakersInfo: <SpeakersCMS />,
    sponsorsInfo: <SponsorsCMS />,
    mainAbout: <MainAboutCMS />,
    faqAbout: <FaqAboutCMS />,
    schedule: <ScheduleCMS />,
    AM: <AMCMS />,
    CodeConduct: <CodeConductCMS />,
  };

  return <main className="w-full h-full p-24 ml-44">{pages[selected]}</main>;
}

MainCMS.propTypes = {
  selected: PropTypes.string.isRequired,
};
