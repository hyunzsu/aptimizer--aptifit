"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { DetailNavigation, Table, PentagonGraph } from "./_components";
import s from "./DetailSection.module.css";

const DetailSection = ({ resultData }) => {
  const { result, wordcloud_image_base64 } = resultData;
  const [nav, setNav] = useState("역량");

  const renderSection = () => {
    switch (nav) {
      case "역량":
        return (
          <div className={s.container}>
            <h3 className={s.subtitle}>역량</h3>
            <div>
              <div className={s.table}>
                {/* 그래프 */}
                <PentagonGraph result={result} />
                {/* 테이블 */}
                <Table result={result.strength} />
              </div>
            </div>
            <div>
              {result.strength.descriptions.map((v, i) => {
                return (
                  <p key={i} className={s.description}>
                    {v}
                  </p>
                );
              })}
            </div>
          </div>
        );
      case "가치":
        return (
          <div className={s.container}>
            <h3 className={s.subtitle}>가치</h3>
            <div>
              <div className={s.table}>
                {/* 그래프 */}
                <PentagonGraph result={result} />
                {/* 테이블 */}
                <Table result={result.value} />
              </div>
            </div>
            <div>
              {result.strength.descriptions.map((v, i) => {
                return (
                  <p key={i} className={s.description}>
                    {v}
                  </p>
                );
              })}
            </div>
          </div>
        );
      case "개인특성":
        return (
          <div className={s.container}>
            <h3 className={s.subtitle}>가치</h3>
            <div>
              <div className={s.table}>
                {/* 그래프 */}
                <PentagonGraph result={result} />
                {/* 테이블 */}
                <Table result={result.value} />
              </div>
            </div>
            <div>
              {result.strength.descriptions.map((v, i) => {
                return (
                  <p key={i} className={s.description}>
                    {v}
                  </p>
                );
              })}
            </div>
          </div>
        );
      case "흥미":
        return (
          <div className={s.container}>
            <h3 className={s.subtitle}>흥미</h3>
            <div>
              <div className={s.table}>
                {/* 테이블 */}
                {/* <Image src={`data:image/png;base64,${wordcloud_image_base64}`} alt="" width={1000} height={350} /> */}
                {/* <Table result={result.interests1} /> */}
              </div>
            </div>
            <div>
              {/* {result.interests1.descriptions.map((v, i) => {
                return (
                  <p key={i} className={s.description}>
                    {v}
                  </p>
                );
              })} */}
            </div>
          </div>
        );
      case "지식":
        return (
          <div className={s.container}>
            <div className={s.blur}>
              <div className={s.blurInfoContainer}>해당 컨텐츠는 에듀 프리미엄에서 제공됩니다</div>
            </div>
            <h3 className={s.subtitle}>지식</h3>
            <div>
              <div className={s.table}>
                {/* 테이블 */}
                <Table result={result.strength} />
              </div>
            </div>
            <div>
              {result.strength.descriptions.map((v, i) => {
                return (
                  <p key={i} className={s.description}>
                    {v}
                  </p>
                );
              })}
            </div>
          </div>
        );
    }
  };

  return (
    <section className={s.DetailSection}>
      <h2 className={s.title}>세부 결과 분석</h2>
      <div>
        {/* 네비게이션 */}
        <DetailNavigation setNav={setNav} />
        {renderSection()}
      </div>
    </section>
  );
};

export default DetailSection;
