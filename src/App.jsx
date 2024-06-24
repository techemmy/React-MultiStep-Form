import React from "react"
import BottomNavigation from "./components/BottomNavigation"
import Sidebar from "./components/Sidebar"
import './styles/output.css';
import FormStep1 from "./components/FormStep1";
import FormStep2 from "./components/FormStep2";
import FormStep3 from "./components/FormStep3";
import FormStepConfirm from "./components/FormStepConfirm";
import FormStepThanks from "./components/FormStepThanks";


const steps = {
  1: FormStep1,
  2: FormStep2,
  3: FormStep3,
  4: FormStepConfirm,
  5: FormStepThanks,
}

const validators = {
  1: ({ name, email, number }, errorDispatcher) => {
    const errors = {
      name: name.trim() === '' ? true : false,
      email: email.trim() === '' ? true : false,
      number: number.trim() === '' ? true : false,
    }
    if (errorDispatcher) {
      errorDispatcher(errors)
    }
    return Object.values(errors).includes(true) ? false : true
  }
}

function App() {
  const [step, setStep] = React.useState(1);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    number: '',
  });
  const [errors, setErrors] = React.useState({
    name: false,
    email: false,
    number: false,
  })

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleNavBtnClick = (operation) => {
    if (step === 1) {
      const validated = validators[step](form, setErrors) ? setStep(step + operation) : ''
      return
    }
    setStep(step + operation)
  }

  const CurrentFormContent = steps[step];
  return (<>
    <Sidebar step={step} handleStepChange={handleNavBtnClick} />

    <main className="flex justify-between flex-col h-full ssmin:mx-10 md:mx-24 py-10 ssmax:bg-magnolia">
      <CurrentFormContent values={form} step={step} handleChange={handleFormChange} errors={errors} />
      <BottomNavigation step={step} handleBtnClick={handleNavBtnClick} />
    </main>
  </>)
}

export default App
