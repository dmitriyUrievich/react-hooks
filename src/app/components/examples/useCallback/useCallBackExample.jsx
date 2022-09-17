import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const UseCallBackExample = () => {
  const [data, setData] = useState({});
  const wigthOutCall = useRef(0);
  const wigthCall = useRef(0);
  const handleChange = ({ target }) => {
    setData(prevState => ({ ...prevState, [target.name]: target.value }));
  };

  const validateWithOutCallBack = (data) => {
    console.log(data);
  };
  const validateWithCallBack = useCallback((data) => {
    console.log(data);
  }, []);
  useEffect(() => {
    validateWithOutCallBack(data);
    validateWithCallBack(data);
  }, [data]);
  useEffect(() => {
    wigthOutCall.current++;
  }, [validateWithOutCallBack]);
  useEffect(() => {
    wigthCall.current++;
  }, [validateWithCallBack]);

  return (
        <CardWrapper>

            <SmallTitle>Example</SmallTitle>
          <Divider/>
          <h5>render without: {wigthOutCall.current}</h5>
          <h5>render with: {wigthCall.current}</h5>
          <label className="form-label" htmlFor="email">Email</label>
          <input className="form-control" name='email' type="email" id="email" onChange={handleChange} value={data.email || ""}/>
          <button className="btn btn-primary" >handleChange</button>

        </CardWrapper>
    );
};

export default UseCallBackExample;
