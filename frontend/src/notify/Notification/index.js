import React from "react";
import ReactDOM from "react-dom" 
// import PropTypes from "prop-types";
import cn from "classnames";

import { ReactComponent as Times } from "./times.svg";
import styles from "./Notification.module.scss";
import createContainer from "../createContainer";

const container = createContainer();
let timeToDelete = 3000;
let timeToClose = 3000;

export default function Notification({ 
  color = Color.info, 
  children,
  onDelete,
  autoClose = false,
}) {
  const [isClosing, setIsClosing] = React.useState(false);

  React.useEffect(() => {
    if (isClosing) {
      const timeoutId = setTimeout(onDelete, timeToDelete);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isClosing, onDelete]);

  React.useEffect(() => {
    if (autoClose) {
      const timeoutId = setTimeout(() => setIsClosing(true), timeToClose);
  
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [autoClose]);

  return ReactDOM.createPortal(
    <div className={cn([styles.notification, styles[color]])}>
      {children}
      <button 
      onClick={() => setIsClosing(true)} 
      className={styles.closeButton}>
      <Times height={16} />
      </button>
    </div>,
    container
  );
}
export const Color = {
  info: "info",
  success: "success",
  warning: "warning",
  error: "error",
};

//safety for passing the right value
// Notification.propTypes = {
//   notificationType: PropTypes.oneOf(Object.keys(Color)),
//   children: PropTypes.element,
// };