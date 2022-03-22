import React from "react";

type PageTitleType = {
  title: string;
};

const PageTitle = (props: PageTitleType) => {
  return <h1>{props.title}</h1>;
};

export default PageTitle;
