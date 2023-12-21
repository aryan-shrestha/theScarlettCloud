import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="border border-l-0 border-r-0 border-t-0 border-neutral-200">
      <h2>
        <button
          className="group relative flex w-full items-center rounded-none border-0 py-4 text-left text-base transition  focus:outline-none "
          type="button"
          onClick={toggleCollapse}
        >
          {question}
          <span
            className={`ml-auto h-5 w-5 shrink-0 rotate-${
              isCollapsed ? "-180deg" : "0"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </span>
        </button>
      </h2>
      <div className={`${isCollapsed ? "!visible" : "hidden"} border-0`}>
        <div className="py-2 text-neutral-700 dark:text-neutral-300">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <div className="lg:w-[50%] lg:order-2" id="faqs">
      <section>
        <h2 className="text-lg font-medium">Frequently asked questions</h2>
        <div id="accordionFlushExample">
          <FAQItem
            question="Anim pariatur cliche reprehenderit?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <FAQItem
            question="Non cupidatat skateboard dolor brunch?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <FAQItem
            question="Praesentium voluptatibus temporibus consequatur non aspernatur?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <FAQItem
            question="Praesentium voluptatibus temporibus consequatur non aspernatur?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <FAQItem
            question="Praesentium voluptatibus temporibus consequatur non aspernatur?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
