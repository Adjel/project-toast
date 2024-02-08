import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="notification"
    >
      {toasts?.map((toast, index) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast index={index} variant={toast.variant}>
            {toast.message ? toast.message : "Example notice toast"}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
