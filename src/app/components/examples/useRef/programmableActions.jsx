import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const ProgrammableActionsExample = () => {
  const inputRef = useRef();
  const handleClick = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };

  const handleClickWidth = () => {
    inputRef.current.style.width = "100px";
  };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
          <Divider/>
          <label className="form-label" htmlFor="email">Email</label>
          <input ref={inputRef} className="form-control" type="email" id="email" />
          <button className="btn btn-primary" onClick={handleClick}>Ok</button>
          <button className="btn btn-primary" onClick={handleClickWidth}>Width</button>

        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
