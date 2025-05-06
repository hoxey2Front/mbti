"use client";

import { motion } from 'motion/react';
import { useEffect, useState } from "react";
import Questions from "@/lib/data";
import FadeInCard from "@/components/test/FadeInCard";
import QuestionCard from "@/components/test/QuestionCard";

let MBTI_data: { type: string, text: string }[] = [];
let MBTI: { type: string, text: string }[] = [];
const ResultPage = () => {
  // MBTI 유형만 추출해서 하나의 문자열로 합치기
  const MBTI_types = MBTI_data.map(item => item.type).join("");
  useEffect(() => {
    MBTI_data = [];
    const MBTI_result = localStorage.getItem("MBTI");
    if (MBTI_result) {
      MBTI = [...JSON.parse(MBTI_result)];
    }

  }, [MBTI])

  return (
    <div className="flex flex-col items-center justify-center gap-6 ">
      <FadeInCard
        initial={{ x: 0, y: -50, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        delay={0}
      >
        <h1 className="text-3xl font-bold text-center dark:text-[#eee]/70">
          당신의 MBTI는 <span className="text-[#fffa1b]">{MBTI_types}</span> 입니다.
        </h1>
      </FadeInCard>
      <FadeInCard
        initial={{ x: 0, y: -50, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        delay={0.5}
      >
        <ul className="max-w-[600px] h-full flex
        flex-col items-start justify-center gap-2 dark:text-[#eee]/70">
          {MBTI_data.map((item, index) => (
            <li key={index} className="text-left text-xl font-bold">
              <span className="min-w-[25px] inline-flex items-center justify-center text-[#00e5f9]">{item.type}</span> {item.text}
            </li>
          ))}
        </ul>
      </FadeInCard>
    </div>
  );
};

const TestPage = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const handleQuestion = () => {
    if (questionIndex === Questions[0].answers.length - 1) {
      alert("테스트가 끝났습니다.");
      setQuestionIndex(0);
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };

  if (MBTI_data.length == 4) {
    localStorage.setItem("MBTI", JSON.stringify(MBTI_data));
    return <ResultPage />;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        key={questionIndex}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-col sm:flex-row items-between gap-[30px] w-full lg:gap-[120px]"
      >
        {Questions[0].answers[questionIndex].map((answer, index) => (
          <QuestionCard
            key={`question-${questionIndex}-answer-${index}`}
            questionKey={`question-${questionIndex}-answer-${index}`}
            onClick={() => {
              handleQuestion();
              MBTI_data.push({ type: answer.type, text: answer.text });
            }}
            cardTitle={`A${index + 1}.`}
            cardContent={answer.text}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TestPage;
