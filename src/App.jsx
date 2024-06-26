import React from "react"
import BottomNavigation from "./components/BottomNavigation"
import Sidebar from "./components/Sidebar"
import './styles/output.css';
import { ADDONS, FORM_STEPS, PLANS, planActions } from "./constants";

function isValidUserForm({ name, email, number }) {

  const userFormErrors = {
    // a truthy field means there's an error
    name: name.trim() === '' ? true : false,
    email: email.trim() === '' ? true : false,
    number: number.trim() === '' ? true : false,
  }
  return [Object.values(userFormErrors).includes(true) ? false : true, userFormErrors]
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

  const [addOns, setAddOns] = React.useState(() => {
    return ADDONS.map(addOn => ({ ...addOn, selected: false }))
  })

  const handleAddOnUpdated = (addOnName) => {
    setAddOns(addOns.map(addOn => {
      return addOn.name === addOnName
        ? { ...addOn, selected: !addOn.selected }
        : addOn
    }))
  }

  const handleFormChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value })
  }

  const handleNavBtnClick = (operation) => {
    const [isValid, errors] = isValidUserForm(userForm)
    setUserFormErrors(errors)
    if (step === 1 && !isValid) {
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

      <main className="overflow-y-scroll flex justify-between flex-col h-full ssmin:mx-10 md:mx-24 py-10 ssmax:bg-magnolia">
        <FormContent
          userFormValues={userForm}
          handleUserFormChange={handleFormChange}
          userFormErrors={userFormErrors}

          plan={plan}
          planOptions={PLANS[plan]}
          selectedPlanOption={planOption}
          handlePlanChange={handlePlanChange}
          handlePlanOptionChange={handlePlanOptionChange}

          addOns={addOns}
          handleAddOnUpdated={handleAddOnUpdated}
        />
        <BottomNavigation step={step} handleBtnClick={handleNavBtnClick} />
      </main>
    </>)
}

export default App
