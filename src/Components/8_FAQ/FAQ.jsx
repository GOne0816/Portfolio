import React, { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I offer web development, UI/UX design, and consulting services.",
  },
  {
    question: "Are you available for freelance work?",
    answer: "Yes, I am open to freelance and contract opportunities.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React, Node.js, Tailwind CSS, and modern JavaScript frameworks.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can reach me via the contact form on this website or email me directly at jagjeevan2001@gmail.com.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I am happy to collaborate with clients from around the world.",
  },
  {
    question: "Can you help with website redesigns?",
    answer:
      "Absolutely! I enjoy helping clients refresh and modernize their existing websites.",
  },
  // Add more FAQs as needed
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="mx-96 my-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div>
        {faqs.map((faq, idx) => (
          <div key={idx} className="mb-4 bg-gray-100 p-4 rounded-lg shadow-sm border-2 border-gray-200">
            <button
              className="font-semibold text-left w-full"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="font-bold">Q. </span>
              {faq.question}
            </button>
            {openIndex === idx && (
              <div className="text-gray-700 mt-1">
                <span className="font-bold">Ans. </span>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
