import React, { useEffect } from "react";

const DecoratorLine = ({ animatedLineRef }) => {
  useEffect(() => {
    if (animatedLineRef.current) {
      animatedLineRef.current.classList.add("line-animation");
    }
  }, [animatedLineRef]);

  return (
    <svg
      width='80%'
      height='34'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      ref={animatedLineRef}
    >
      <path
        d='M2 14.411C41.65 2.88838 82.8588 1.89248 125.672 2.00799C176.445 2.14498 220.424 11.0124 268.252 21.3016C297.277 27.5457 325.635 31.6271 356.496 31.7753C373.875 31.8588 392.247 32.7564 409.312 30.2594C422.69 28.3019 434.895 24.2271 448 21.8529'
        stroke='#F0371A'
        strokeWidth='3'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default DecoratorLine;
