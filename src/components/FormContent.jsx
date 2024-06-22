import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStepConfirm from "./FormStepConfirm";
import FormStepThanks from "./FormStepThanks";

const steps = {
  1: FormStep1,
  2: FormStep2,
  3: FormStep3,
  4: FormStepConfirm,
  5: FormStepThanks,
}

export default function FormContent({ step }) {
  const CurrentFormContent = steps[step];
  return <CurrentFormContent />
}
