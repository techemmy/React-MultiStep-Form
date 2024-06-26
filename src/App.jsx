import React from "react"
import BottomNavigation from "./components/BottomNavigation"
import Sidebar from "./components/Sidebar"
import './styles/output.css';
import { ADDONS, FORM_STEPS, PLANS, ACTIONS } from "./constants";
import { isValidUserForm, planReducer, addOnReducer } from './utils'

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

  const [addOns, addOnDispatch] = React.useReducer(
    addOnReducer,
    ADDONS[plan].map(addOn => ({ ...addOn, selected: false }))
  )

  const handleAddOnUpdated = (addOnName) => {
    const updatedAddOns = addOns.map(addOn => {
      return addOn.name === addOnName
        ? { ...addOn, selected: !addOn.selected }
        : addOn
    })
    addOnDispatch({ type: ACTIONS.UPDATE_ADDONS, value: updatedAddOns })
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
    planDispatch({ type: ACTIONS.CHANGE_PLAN, value: newPlan })
    addOnDispatch({ type: ACTIONS.CHANGE_PLAN, value: newPlan })
  }
  const handlePlanOptionChange = (planOption) => {
    planDispatch({ type: ACTIONS.CHANGE_PLAN_OPTION, value: planOption })
  }

  const FormContent = FORM_STEPS[step];
  const period = plan.toLowerCase().includes("mo") ? "mo" : "yr";
  return (
    <>
      <Sidebar step={step} handleStepChange={handleNavBtnClick} />

      <main className="flex justify-between flex-col h-full ssmin:mx-10 md:mx-24 py-10 ssmax:bg-magnolia">
        <FormContent
          period={period}

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

          selectedPlan={PLANS[plan].find(plan => {
            return plan.name === planOption
          })}
        />
        <BottomNavigation step={step} handleBtnClick={handleNavBtnClick} />
      </main>
    </>)
}

export default App
