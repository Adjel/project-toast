import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const handleUseEscapeKey = React.useCallback(() => {
    setToasts([]);
  }, [handleUseEscapeKey]);

  useEscapeKey(handleUseEscapeKey);

  function dismissToast(index) {
    let nextToastList = [...toasts];
    nextToastList.splice(index, 1);
    setToasts(nextToastList);
  }

  function createToast(message, variant) {
    const uniqueId = parseInt(Date.now() * Math.random()).toString();
    const nextToastList = [
      ...toasts,
      { message: message, variant: variant, id: `${uniqueId}-${variant}` },
    ];

    setToasts(nextToastList);
  }

  return (
    <ToastContext.Provider
      value={{
        dismissToast,
        createToast,
        toasts,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
