import React from "react"
import BottomNavigation from "./components/BottomNavigation"
import FormContent from "./components/FormContent"
import Sidebar from "./components/Sidebar"
import './styles/output.css';

function App() {
  const [step, setStep] = React.useState(1);

  const handleBtnClick = (operation) => {
    setStep(step + operation)
  }
  return (<>
    <Sidebar step={step} />

    <main className="flex justify-between flex-col h-full ssmin:mx-10 md:mx-24 py-10 ssmax:bg-magnolia">
      <FormContent step={step} />
      <BottomNavigation step={step} handleBtnClick={handleBtnClick} />
    </main>
  </>)
}

export default App
