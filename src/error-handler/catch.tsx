import { FunctionComponent, useContext } from "react";
import { TryCatchContext } from "./error-handler-context";

interface CatchProps {
  /** the content to show when an error is encountered */
  children: any;
}

/**
 * A component that only shows it's content when the corresponding Try encounters an error.
 * @see {@link Try}
 * @since 1.1.0
 */
export const Catch: FunctionComponent<CatchProps> = ({
  children,
}: CatchProps) => {
  const { hasError } = useContext(TryCatchContext);
  return hasError ? children : null;
};
