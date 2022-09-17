import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
  return isAuth ? (
    <button className="btn btn-primary" onClick={onLogOut}>
      Выйти из системы
    </button>
  ) : (
    <button className="btn btn-secondary" onClick={onLogin}>
      Войти
    </button>
  );
};

SimpleComponent.propTypes = {
  onLogOut: PropTypes.func,
  onLogin: PropTypes.func,
  isAuth: PropTypes.bool
};

export default SimpleComponent;
