"use client";

import { useState } from "react";
// import Image from "next/image";
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
            <div className={s.blurScreen}>
              <div className={s.message}>해당 내용은 에듀 프리미엄에서 확인해볼 수 있습니다</div>
            </div>
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
      case "개인특성":
        return (
          <div className={s.container}>
            <div className={s.blurScreen}>
              <div className={s.message}>해당 내용은 에듀 프리미엄에서 확인해볼 수 있습니다</div>
            </div>
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
      case "흥미":
        return (
          <div className={s.container}>
            <div className={s.blurScreen}>
              <div className={s.message}>해당 내용은 에듀 프리미엄에서 확인해볼 수 있습니다</div>
            </div>
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
      case "지식":
        return (
          <div className={s.container}>
            <div className={s.blurScreen}>
              <div className={s.message}>해당 내용은 에듀 프리미엄에서 확인해볼 수 있습니다</div>
            </div>
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
