"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { DetailNavigation, Table, PentagonGraph, Card } from "./_components";
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
                {/* 모바일 카드 */}
                {result.strength.details.map((item, index) => {
                  const { field, score, content } = item;
                  return <Card key={`${index}-${field}`} field={field} score={score} content={content} />;
                })}
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
                {/* 모바일 카드 */}
                {result.value.details.map((item, index) => {
                  const { field, score, content } = item;
                  return <Card key={`${index}-${field}`} field={field} score={score} content={content} />;
                })}
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
                {result.characteristic.details.map((item, index) => {
                  const { field, score, content } = item;
                  return <Card key={`${index}-${field}`} field={field} score={score} content={content} />;
                })}
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
                {result.interest.details.map((item, index) => {
                  const { field, score, content } = item;
                  return <Card key={`${index}-${field}`} field={field} score={score} content={content} />;
                })}
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
                {result.knowledge.details.map((item, index) => {
                  const { field, score, content } = item;
                  return <Card key={`${index}-${field}`} field={field} score={score} content={content} />;
                })}
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
