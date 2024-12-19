import React, { useState } from "react";
import "../scss/InterviewTest.scss";

const InterviewTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [completed, setCompleted] = useState(false);

  const questions = [
    {
      question: "JavaScript-da var, let va const farqi nima?",
      options: [
        "var — funksiyada ishlatiladi, let va const esa blokda ishlatiladi",
        "let va const — funksiyada ishlatiladi",
        "var — blokda ishlatiladi",
        "JavaScript-da o'zgaruvchilarni faqat var orqali deklaratsiya qilish mumkin",
      ],
      answer: "var — funksiyada ishlatiladi, let va const esa blokda ishlatiladi",
    },
    {
      question: "'this' kalit so'zi JavaScript-da nima ma'noni anglatadi?",
      options: [
        "Global ob'ektni anglatadi",
        "Hozirgi ob'ektni anglatadi",
        "Funksiyani o'zini anglatadi",
        "Yangi ob'ektni anglatadi",
      ],
      answer: "Hozirgi ob'ektni anglatadi",
    },
    {
      question: "JavaScript-da event loop qanday ishlaydi?",
      options: [
        "Birlamchi kodlarni birinchi, asinxron kodlarni keyin bajaradi",
        "Asinxron kodlarni birinchi, birlamchi kodlarni keyin bajaradi",
        "Ikkalasini bir vaqtda bajaradi",
        "Asinxron kodlarni boshqarmaydi",
      ],
      answer: "Birlamchi kodlarni birinchi, asinxron kodlarni keyin bajaradi",
    },
  ];

  const handleAnswerChange = (event) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    setCompleted(true);
  };

  return (
    <div className="interview-test-page">
      <div className="test-container">
        <div className="test-header">
          <h1>Intervyu Testi</h1>
          <p>JavaScript bo'yicha bilimlaringizni sinab ko'ring</p>
        </div>

        {!completed ? (
          <div className="question-section">
            <div className="question">
              <h2>{questions[currentQuestionIndex].question}</h2>
              <div className="options">
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      name={`question-${currentQuestionIndex}`}
                      value={option}
                      checked={answers[currentQuestionIndex] === option}
                      onChange={handleAnswerChange}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className="navigation-buttons">
              <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                Oldingi
              </button>
              {currentQuestionIndex === questions.length - 1 ? (
                <button onClick={handleSubmit}>Yuborish</button>
              ) : (
                <button onClick={handleNext}>Keyingi</button>
              )}
            </div>
          </div>
        ) : (
          <div className="completed">
            <h2>Test Tamomlandi!</h2>
            <p>Testni yakunlaganingiz uchun rahmat. Javoblaringiz yuborildi.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewTest;
