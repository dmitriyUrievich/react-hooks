import React from "react";
import CardWrapper from "../../common/Card";

import SmallTitle from "../../common/typografy/smallTitle";
import TextField from "../../common/form/textField";
const CloneElementExample = () => {
  const filed = <TextField label="email" name="email"/>;
  const handleChange = (target) => {
    console.log(target, "target");
  };
    return (
        <CardWrapper>
            <SmallTitle>Привем</SmallTitle>
          {filed}
          {React.cloneElement(filed, { onChange: handleChange, label: "cloned email" })}
          {/* <button className="btn btn-ptimaty" onClick={handleChange}>click</button> */}
        </CardWrapper>
    );
};

export default CloneElementExample;
