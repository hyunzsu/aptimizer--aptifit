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
            <div className={s.blur}>
              <div className={s.blurInfoContainer}>해당 컨텐츠는 에듀 프리미엄에서 제공됩니다</div>
            </div>
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
      case "개인특성":
        return (
          <div className={s.container}>
            <div className={s.blur}>
              <div className={s.blurInfoContainer}>해당 컨텐츠는 에듀 프리미엄에서 제공됩니다</div>
            </div>
            <h3 className={s.subtitle}>개인특성</h3>
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
      case "흥미1":
        return (
          <div className={s.container}>
            <h3 className={s.subtitle}>흥미1</h3>
            <div>
              <div className={s.table}>
                {/* 테이블 */}
                <Image src={`data:image/png;base64,${wordcloud_image_base64}`} alt="" width={1000} height={350} />
                <Table result={result.interests1} />
              </div>
            </div>
            <div>
              {result.interests1.descriptions.map((v, i) => {
                return (
                  <p key={i} className={s.description}>
                    {v}
                  </p>
                );
              })}
            </div>
          </div>
        );
      case "흥미2":
        return (
          <div className={s.container}>
            <h3 className={s.subtitle}>흥미2</h3>
            <div className={s.keywordContainer}>
              {result.interests2.details.map((v, i) => {
                const { Interests_main, Interests_sub1, Interests_sub2, Interests_sub3, Interests_sub4 } = v;

                return (
                  <div key={i} className={s.interests2Container}>
                    <div className={`${s.interests2Keyword} ${s.interests2KeywordMain}`}>{Interests_main}</div>
                    <div className={s.interests2Keyword}>{Interests_sub1}</div>
                    <div className={s.interests2Keyword}>{Interests_sub2}</div>
                    <div className={s.interests2Keyword}>{Interests_sub3}</div>
                    <div className={s.interests2Keyword}>{Interests_sub4}</div>
                    <div className={s.line}></div>
                  </div>
                );
              })}
            </div>
            <div>
              {result.interests2.descriptions.map((v, i) => {
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
