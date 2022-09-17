import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const RenderCountExample = () => {
  const [otherState, setOtherState] = useState(false);
  const renderCount = useRef(0);

  const toggleOther = () => {
    setOtherState(!otherState);
  };
  useEffect(() => {
     renderCount.current++;
  });

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
          <Divider/>
            <button className="btn btn-primary" onClick={toggleOther}>toggle</button>
          <h4>render cont: {renderCount.current}</h4>
        </CardWrapper>
    );
};

export default RenderCountExample;
