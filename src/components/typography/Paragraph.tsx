import React from "react";

interface ParagraphTypes {
  text: string | null;
}

const Paragraph = (props: ParagraphTypes) => {
  return (
    <p
      id="paragraph"
      className="mt-3 text-base font-bold text-gray-500 md:text-lg"
    >
      {props.text}
    </p>
  );
};

export default Paragraph;
