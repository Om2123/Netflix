import React, { useState } from 'react';

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const faqData = [
    {
      question: 'What is Netflix?',
      answer:
        'Netflix is a streaming service that offers a wide variety of TV shows, movies, documentaries, and more on various devices.',
    },
    {
      question: 'How much does Netflix cost?',
      answer:
        'Netflix offers different subscription plans with varying prices. You can visit the Netflix website to check the current pricing details for your region.',
    },
    {
      question: 'Where can I watch Netflix?',
      answer:
        'You can watch Netflix on various devices, including smartphones, tablets, smart TVs, gaming consoles, and web browsers. Netflix also provides dedicated apps for different platforms.',
    },
    {
      question: 'Is Netflix good for kids?',
      answer:
        'Netflix offers a range of content suitable for kids and families. It provides parental controls that allow you to set viewing restrictions and create separate profiles for children.',
    },
    {
      question: 'How do I cancel Netflix?',
      answer:
        'To cancel your Netflix subscription, you can visit the Account settings on the Netflix website or app and follow the instructions for cancellation. Keep in mind that you will continue to have access to Netflix until the end of your current billing period.',
    },
    {
      question: 'What can I watch on Netflix?',
      answer:
        'Netflix offers a vast library of movies, TV shows, documentaries, stand-up specials, and more. It covers various genres and provides personalized recommendations based on your viewing history and preferences.',
    },
  ];
  
  return (
    <div className="p-40 mt-50px text-white">
      <h2 className="text-5xl font-extrabold text-center mb-5">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 gap-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-700 hover:bg-gray-600  p-6 cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-medium">{faq.question}</h3>
              <span
                className={`${
                  expandedIndex === index ? 'transform rotate-45 text-5xl ' : ''
                } text-white bold text-5xl transition-transform duration-200`}
              >
                +
              </span>
            </div>
            {expandedIndex === index && (
              <p className="mt-2 text-2xl text-gray-100">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
