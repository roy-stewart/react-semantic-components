import { useContext, useEffect } from "react";
import { ConditionIdContext } from "./condition-id-context";
import { ConditionalContext } from "./conditional-context";

interface IfProps {
  /** whether or not the contents should be shown */
  condition: boolean;
  /** the content to show */
  children?: any;
}

/**
 * A component that conditionally shows or hides its content
 */
export const If = ({ condition, children }: IfProps) => {
  const { conditionId } = useContext(ConditionIdContext);
  const { addMetCondition, removeMetCondition } =
    useContext(ConditionalContext);

  useEffect(() => {
    if (condition) {
      addMetCondition(conditionId);
    } else {
      removeMetCondition(conditionId);
    }

    return () => removeMetCondition(conditionId);
  }, [condition, conditionId]);

  return condition ? children : null;
};
