import React, { FunctionComponent, useState } from "react";
import { TryCatchContext } from "./try-catch-context";

interface TryCatchProps {
  children: any;
}

/**
 * a wrapper that links a Try instance with a Catch instance
 * @since 1.1.0
 */
export const TryCatch: FunctionComponent<TryCatchProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const contextValue = {
    hasError,
    setHasError,
  };

  return (
    <TryCatchContext.Provider value={contextValue}>
      {children}
    </TryCatchContext.Provider>
  );
};
