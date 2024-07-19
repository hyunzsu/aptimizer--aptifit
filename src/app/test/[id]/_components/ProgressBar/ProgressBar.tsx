import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import s from "./ProgressBar.module.css";

const ProgressBar = ({ responses }) => {
  const [progress, setProgress] = useState(0);
  const params = useParams();

  useEffect(() => {
    /* responses가 업데이트 되기 전에는 NaN이 발생하여 이를 방지하고자 */
    if (responses.length !== 0) {
      // 1. 현재 응답이 작성된 문제 수
      const currentProgress = responses.filter((res) => res !== 0);
      // 2. 총 문제의 수와 풀린 문제의 수의 퍼센티지
      const calculatedPercentage = Math.round((currentProgress.length / responses.length) * 100);
      // 3. 업데이트
      setProgress(calculatedPercentage);
    }
  }, [responses]);

  return (
    <div className={s.ProgressBar}>
      <div className={s.percentage}>
        <p>
          <span>{progress}</span>%
        </p>
      </div>
      <div className={s.outer}>
        <div className={s.inner} style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
