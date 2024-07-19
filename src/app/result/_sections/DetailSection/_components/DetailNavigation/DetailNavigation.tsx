"use client";
import s from "./DetailNavigation.module.css";

const DetailNavigation = ({ setNav }) => {
  const handleClick = (navItem) => {
    setNav(navItem);
  };

  return (
    <ul className={s.DetailNavigation}>
      <li className={`${s.li} ${s.capability}`} onClick={() => handleClick("역량")}>
        역량
      </li>
      <li className={`${s.li} ${s.value}`} onClick={() => handleClick("가치")}>
        가치
      </li>
      <li className={`${s.li} ${s.characteristics}`} onClick={() => handleClick("개인특성")}>
        개인특성
      </li>
      <li className={`${s.li} ${s.interest}`} onClick={() => handleClick("흥미1")}>
        흥미1
      </li>
      <li className={`${s.li} ${s.interest}`} onClick={() => handleClick("흥미2")}>
        흥미2
      </li>
      <li className={`${s.li} ${s.knowledge}`} onClick={() => handleClick("지식")}>
        지식
      </li>
    </ul>
  );
};

export default DetailNavigation;
