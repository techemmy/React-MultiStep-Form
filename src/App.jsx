import React from "react"
import BottomNavigation from "./components/BottomNavigation"
import Sidebar from "./components/Sidebar"
import './styles/output.css';
import { FORM_STEPS, PLANS, planActions } from "./constants";

const validators = {
  1: ({ name, email, number }, errorDispatcher) => {
    const userFormErrors = {
      name: name.trim() === '' ? true : false,
      email: email.trim() === '' ? true : false,
      number: number.trim() === '' ? true : false,
    }
    if (errorDispatcher) {
      errorDispatcher(userFormErrors)
    }
    return Object.values(userFormErrors).includes(true) ? false : true
  }
}

function planReducer(state, action) {
  switch (action.type) {
    case planActions.CHANGE_PLAN:
      const planOption = PLANS[action.value].find(planOption => planOption.name === state.planOption)
      return {
        ...state,
        plan: action.value,
        planOption: planOption.name
      }
    case planActions.CHANGE_PLAN_OPTION:
      return { ...state, planOption: action.value }
    default:
      return state
  }
}

function App() {
  const [step, setStep] = React.useState(1);

  const [userForm, setUserForm] = React.useState({
    name: '',
    email: '',
    number: '',
  });
  const [userFormErrors, setUserFormErrors] = React.useState({
    name: false,
    email: false,
    number: false,
  })

  const defaultPlan = Object.keys(PLANS)[0];
  const [{ plan, planOption }, planDispatch] = React.useReducer(planReducer, {
    plan: defaultPlan,
    planOption: PLANS[defaultPlan][1].name,
  });

  const handleFormChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value })
  }

  const handleNavBtnClick = (operation) => {
    if (step === 1 && !validators[step](userForm, setUserFormErrors)) {
      return
    }
    setStep(step + operation)
  }

  const handlePlanChange = (isPlanChanged) => {
    const plansArray = Object.keys(PLANS);
    const newPlan = isPlanChanged ? plansArray[0] : plansArray[1]
    planDispatch({ type: planActions.CHANGE_PLAN, value: newPlan })
  }
  const handlePlanOptionChange = (planOption) => {
    planDispatch({ type: planActions.CHANGE_PLAN_OPTION, value: planOption })
  }

  const FormContent = FORM_STEPS[step];
  return (
    <>
      <Sidebar step={step} handleStepChange={handleNavBtnClick} />

      <main className="flex justify-between flex-col h-full ssmin:mx-10 md:mx-24 py-10 ssmax:bg-magnolia">
        <FormContent
          userFormValues={userForm}
          step={step}
          handleUserFormChange={handleFormChange}
          userFormErrors={userFormErrors}
          plan={plan}
          planOptions={PLANS[plan]}
          selectedPlanOption={planOption}
          handlePlanChange={handlePlanChange}
          handlePlanOptionChange={handlePlanOptionChange}
        />
        <BottomNavigation step={step} handleBtnClick={handleNavBtnClick} />
      </main>
    </>)
}

export default App
