import { SummaryCard } from "./_components";
import s from "./SummarySection.module.css";
import majorsData from "@/data/majors_data.json";

const SummarySection = ({ resultData }) => {
  const { major_title_1 } = resultData;

  const majorData = majorsData.find((item) => item.major_title === major_title_1)?.details;

  return (
    <section className={s.SummarySection}>
      <h3 className={s.title}>종합결과</h3>
      <div className={s.cardContainer}>
        <SummaryCard type="definition" majorData={majorData} />
        <SummaryCard type="ideal" majorData={majorData} />
        <SummaryCard type="courses" majorData={majorData} />
        <SummaryCard type="specifics" majorData={majorData} />
      </div>
    </section>
  );
};

export default SummarySection;
