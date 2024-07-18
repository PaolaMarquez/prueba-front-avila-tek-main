import TitleDescription from "../general/TitleDescription";
import Question from "./Question";

const faqs = [
  {
    question: "Is there a free trial available?",
    ans: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    ans: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "What is your cancellation policy?",
    ans: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can other info be added to an invoice?",
    ans: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "How does billing work?",
    ans: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "How do I change my account email?",
    ans: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];

export default function FAQ() {
  return (
    <section className="px-8 py-20">
      <div className="container mx-auto">
        <div className="mb-14 text-center">
          <TitleDescription
            title={"Frequently asked questions"}
            description={
              "Everything you need to know about the product and billing."
            }
            classNameDesc="text-center"
          />
        </div>
        <div className="max-w-3xl lg:max-w-2xl mx-auto grid gap-6">
          {faqs.map((q, i) => (
            <div key={i}>
              <Question question={q.question} answer={q.ans} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
