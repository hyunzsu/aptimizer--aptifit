import s from "./Table.module.css";

const Table = ({ result }) => {
  return (
    <table className={s.Table}>
      <thead className={s.thead}>
        <tr className={s.tr}>
          <th className={`${s.topleft} ${s.th} ${s.field}`}>영역</th>
          <th className={`${s.th} ${s.score}`}>점수</th>
          <th className={`${s.topright} ${s.th} ${s.content}`}>내용</th>
        </tr>
      </thead>
      <tbody className={s.tbody}>
        {result.details.map((item, index) => {
          const { field, score, content } = item;

          return (
            <tr key={index} className={s.tr}>
              <td className={`${s.td} ${s.field}`}>{field}</td>
              <td className={`${s.td} ${s.score}`}>{score}</td>
              <td className={`${s.td} ${s.content}`}>{content}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
