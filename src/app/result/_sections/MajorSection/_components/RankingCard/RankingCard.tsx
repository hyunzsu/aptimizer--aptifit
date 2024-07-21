import Image from "next/image";
import GoldMedal from "../../../../../../../public/svg/gold_medal.svg";
import SilverMedal from "../../../../../../../public/svg/silver_medal.svg";
import BronzeMedal from "../../../../../../../public/svg/bronze_medal.svg";
import Star from "../../../../../../../public/svg/star.svg";
import MAJORS_DATA from "../../../../../../data/majors_data.json";
import s from "./RankingCard.module.css";

const RankingCard = ({ title, rank }) => {
  const summary = MAJORS_DATA.find((item) => item.major_title === title)?.summary;

  const renderRankingCard = (rank) => {
    switch (rank) {
      case 0:
        return (
          <div className={s.RankingCard}>
            <div className={s.imageContainer}>
              <Image className={s.medal} src={GoldMedal} alt="1순위 학과" width={80} height={80} />
              <Image className={s.star1} src={Star} alt="" />
              <Image className={s.star2} src={Star} alt="" />
              <Image className={s.star3} src={Star} alt="" />
            </div>

            <p className={s.title}>{title}</p>
            <p className={s.description}>{summary}</p>
          </div>
        );

      case 1:
        return (
          <div className={s.RankingCard}>
            <div className={s.imageContainer}>
              <Image className={s.medal} src={SilverMedal} alt="2순위 학과" width={80} height={80} />
              <Image className={s.star1} src={Star} alt="" />
              <Image className={s.star2} src={Star} alt="" />
              <Image className={s.star3} src={Star} alt="" />
            </div>

            <p className={s.title}>{title}</p>
            <p className={s.description}>{summary}</p>
          </div>
        );
      case 2:
        return (
          <div className={s.RankingCard}>
            <div className={s.imageContainer}>
              <Image className={s.medal} src={BronzeMedal} alt="3순위 학과" width={80} height={80} />
              <Image className={s.star1} src={Star} alt="" />
              <Image className={s.star2} src={Star} alt="" />
              <Image className={s.star3} src={Star} alt="" />
            </div>

            <p className={s.title}>{title}</p>
            <p className={s.description}>{summary}</p>
          </div>
        );
    }
  };

  return renderRankingCard(rank);
};

export default RankingCard;
