import React from "react";

interface ParagraphTitle {
  title: string;
}

const ParagraphTitle = (props: ParagraphTitle) => {
  return (
    <h4 id="paragraph-title" className="text-xl font-semibold text-gray-900">
      {props.title}
    </h4>
  );
};

export default ParagraphTitle;
