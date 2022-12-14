import { useContext, useEffect, useId } from "react";
import { SwitchContext } from "./switch-context";

interface CaseProps {
  value: any;
  children: any;
}

export const Case = ({ value, children }: CaseProps) => {
  const caseId = useId();

  const {
    value: switchValue,
    addSatisfiedCase,
    removeSatisfiedCase,
  } = useContext(SwitchContext);

  const isSatisfied = switchValue === value;

  useEffect(() => {
    if (isSatisfied) {
      addSatisfiedCase(caseId);
    }
    return () => removeSatisfiedCase(caseId);
  }, [isSatisfied, caseId]);

  if (isSatisfied) {
    return children;
  } else {
    return null;
  }
};
