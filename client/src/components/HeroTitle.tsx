import React, { ForwardRefRenderFunction } from "react";
import { forwardRef } from "react";
import "./HeroTitle.css";

type Props = { inView: boolean };
const inLine = { color: "red" };
type Ref = HTMLDivElement;
const MyTitle = forwardRef<Ref, Props>(function HeroTitle({ inView }, ref) {
  if (inView) console.log("inview");
  return (
    <div ref={ref} className={`myName`}>
      <h1 className={`${inView ? `show` : `hidden`} `}>Hello, My name is </h1>
      <h2 className={`name  ${inView ? `show` : `hidden`}`}>Jacky Ao Ieong</h2>
      <h1 className={` ${inView ? `show` : `hidden`}`}>
        And, this is my website
      </h1>
    </div>
  );
});

export default MyTitle;
