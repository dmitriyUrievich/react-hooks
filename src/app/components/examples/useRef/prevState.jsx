import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const PrevStateExample = () => {
  const [otherState, setOtherState] = useState("false");
  const prevState = useRef("");

  const toggleOther = () => {
    setOtherState(prevState => prevState === "false" ? "true" : "false");
  };
  useEffect(() => {
    prevState.current = otherState;
  }, [otherState]);

  return (
    <CardWrapper>
      <SmallTitle>Подсчет количества рендеров</SmallTitle>
      <Divider/>
      <button className="btn btn-primary" onClick={toggleOther}>toggle</button>
      <h4>prev state: {prevState.current}</h4>
      <h4> state: {otherState}</h4>
    </CardWrapper>
  );
};

export default PrevStateExample;
