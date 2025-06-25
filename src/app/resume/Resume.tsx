import TimelineSection from "../components/TimelineSection";
import { profile } from "../constants";
import Skills from "./Skills";

const Resume = () => {
  const resume = profile.resume;

  return (
    <>
      {resume.map(({ title, items, icon }, index) => (
        <div key={index}>
          <TimelineSection title={title} items={items} icon={icon}></TimelineSection>
          <p></p>
        </div>
      ))}
      <Skills skills={profile.skills}></Skills>
    </>
  )
}

export default Resume;