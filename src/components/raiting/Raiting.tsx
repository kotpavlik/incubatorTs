import React from "react";
import Star from "./star/Star";

type RatyngType = {
  value: 0 | 1 | 2 | 3 | 4 | 5;
};

const Raiting = (props: RatyngType) => {
  debugger;
  switch (props.value) {
    case 1: {
      return (
        <div>
          <Star selected={true} />
          <Star selected={false} />
          <Star selected={false} />
          <Star selected={false} />
          <Star selected={false} />
        </div>
      );
    }
    case 2: {
      return (
        <div>
          <Star selected={true} />
          <Star selected={true} />
          <Star selected={false} />
          <Star selected={false} />
          <Star selected={false} />
        </div>
      );
    }
    case 3: {
      return (
        <div>
          <Star selected={true} />
          <Star selected={true} />
          <Star selected={true} />
          <Star selected={false} />
          <Star selected={false} />
        </div>
      );
    }
    case 4: {
      return (
        <div>
          <Star selected={true} />
          <Star selected={true} />
          <Star selected={true} />
          <Star selected={true} />
          <Star selected={false} />
        </div>
      );
    }
    case 5: {
      return (
        <div>
          <Star selected={true} />
          <Star selected={true} />
          <Star selected={true} />
          <Star selected={true} />
          <Star selected={true} />
        </div>
      );
    }
  }
  return (
    <div>
      <Star selected={false} />
      <Star selected={false} />
      <Star selected={false} />
      <Star selected={false} />
      <Star selected={false} />
    </div>
  );
};

export default Raiting;
