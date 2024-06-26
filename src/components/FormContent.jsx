import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStepConfirm from "./FormStepConfirm";
import FormStepThanks from "./FormStepThanks";


export default function FormContent({ step, handleUserFormChange, plan, userFormValues, userFormErrors }) {
  let CurrentFormContent;
  switch (step) {
    case 1:
      CurrentFormContent = <FormStep1 values={userFormValues} errors={userFormErrors} handleChange={handleUserFormChange} />
      break;

    case 2:
      CurrentFormContent = <FormStep2 plan={plan} />
      break;

    case 3:
      CurrentFormContent = <FormStep3 />
      break;

    case 4:
      CurrentFormContent = <FormStepConfirm />
      break;

    case 5:
      CurrentFormContent = <FormStepThanks />
      break;

    default:
      alert('No step detected');
      break;
  }
  return CurrentFormContent;
}
