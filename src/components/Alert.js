import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { CSSTransition } from "react-transition-group";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  return (
    <CSSTransition
      in={alert.visible}
      timeout={{ enter: 500, exit: 350 }}
      classNames={"alert"}
      mountOnEnter
      unmountOnExit
    >
      <div
        className={`alert alert-${alert.type || "warning"} alert-dismissible `}
        role="alert"
      >
        <strong>Внимание! </strong>
        {alert.text}
        <button
          type="button"
          className="btn-close"
          onClick={hide}
          aria-label="Close"
        ></button>
      </div>
    </CSSTransition>
  );
};
