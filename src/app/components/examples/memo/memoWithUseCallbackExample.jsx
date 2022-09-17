import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
const LofOutButton = ({ onLogOut }) => {
    useEffect(() => console.log("render"));

    return <button className="btn btn-primary" onClick={onLogOut}>LogOut</button>;
};
LofOutButton.propTypes = {
    onLogOut: PropTypes.func
};

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = () => {
     localStorage.removeItem("auth");
    };
    return <>
        <button className="btn btn-primary" onClick={() => setState(!state)}>init render</button>;
        <LofOutButton onLogOut={handleLogOut}/>;</>;
};

export default MemoWithUseCallbackExample;
