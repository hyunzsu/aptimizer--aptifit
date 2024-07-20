"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { DetailNavigation, Table, PentagonGraph } from "./_components";
import s from "./DetailSection.module.css";

const DetailSection = ({ resultData }) => {
  const { result } = resultData;
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
                <PentagonGraph type={result.strength} />
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
                <PentagonGraph type={result.value} />
                {/* 테이블 */}
                <Table result={result.value} />
              </div>
            </div>
            <div>
              {result.value.descriptions.map((v, i) => {
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
            <h3 className={s.subtitle}>개인특성</h3>
            <div>
              <div className={s.table}>
                {/* 그래프 */}
                <PentagonGraph type={result.characteristic} />
                {/* 테이블 */}
                <Table result={result.characteristic} />
              </div>
            </div>
            <div>
              {result.characteristic.descriptions.map((v, i) => {
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
                <Table result={result.interest} />
              </div>
            </div>
            <div>
              {result.interest.descriptions.map((v, i) => {
                return (
                  <p key={i} className={s.description}>
                    {v}
                  </p>
                );
              })}
            </div>
          </div>
        );
      case "지식":
        return (
          <div className={s.container}>
            <h3 className={s.subtitle}>지식</h3>
            <div>
              <div className={s.table}>
                {/* 그래프 */}
                <PentagonGraph type={result.knowledge} />
                {/* 테이블 */}
                <Table result={result.knowledge} />
              </div>
            </div>
            <div>
              {result.knowledge.descriptions.map((v, i) => {
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
