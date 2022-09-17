import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
function runFactorial(n) {
  console.log("run");
  return factorial(n);
}
const ComplexCalculateExample = () => {
  const [value, setValue] = useState(10);
  const [other, setOther] = useState(false);
  const buttonColor = other ? "primary" : "secondary";
  useEffect(() => {
    console.log("rere");
  });

 const fact = useMemo(() => runFactorial(value), [value]);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
              <Divider/>
              <p>result fact: {fact}</p>
              <p>result value: {value}</p>
              <button className="btn btn-primary mx-2" onClick={() => setValue(prevState => prevState + 10)}>+</button>
              <button className="btn btn-primary mx-2" onClick={() => setValue(prevState => prevState - 10)}>-</button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
              <button className={"btn mx-2 btn-" + buttonColor}onClick={() => setOther((prevState) => !prevState)}>color</button>

            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
