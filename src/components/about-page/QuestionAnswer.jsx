import { answerArrow, down } from "../../assets/icons";
import FAQ from "./FAQ.jsx"

const QuestionAnswer = () => {
  const faqs = [
    {
      question: 'Can I provide feedback during the early access period?',
      answer:
        "Yes, we welcome your feedback! Your input will play a crucial role in enhancing Qwerki. We'll provide channels for you to share your thoughts and suggestions.",
    },
    {
      question: 'How secure is my data with Qwerki?',
      answer:
        "Yes, we welcome your feedback! Your input will play a crucial role in enhancing Qwerki. We'll provide channels for you to share your thoughts and suggestions.",
    },
    {
      question: 'Will Qwerki be available on multiple platforms?',
      answer:
        "Yes, we welcome your feedback! Your input will play a crucial role in enhancing Qwerki. We'll provide channels for you to share your thoughts and suggestions.",
    },
    {
      question: 'Can I unsubscribe from the waiting list?',
      answer:
        "Yes, we welcome your feedback! Your input will play a crucial role in enhancing Qwerki. We'll provide channels for you to share your thoughts and suggestions.",
    },
    {
      question: 'What do I get by joining the waiting list?',
      answer:
        "Yes, we welcome your feedback! Your input will play a crucial role in enhancing Qwerki. We'll provide channels for you to share your thoughts and suggestions.",
    },
    {
      question: 'When will Qwerki be available?',
      answer:
        "Yes, we welcome your feedback! Your input will play a crucial role in enhancing Qwerki. We'll provide channels for you to share your thoughts and suggestions.",
    },
    // Add more FAQ items here
  ];

  return (
    <section className="my-4 lg:my-10 pb-96 flex justify-center simple-text">
      <div className="px-5 lg:px-20 w-full lg:w-1/2 flex flex-col gap-2 lg:gap-5">
      <h1 className="card-heading pb-5">
        Frequently asked questions
      </h1>
      {faqs.map((faq, index) => (
        <FAQ key={index} question={faq.question} answer={faq.answer} />
      ))}
      </div>
    </section>
  );
};

export default QuestionAnswer;
