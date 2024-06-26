export default function Sidebar({ step: currentStep, handleStepChange }) {
  const steps = {
    1: "Your info",
    2: "Select plan",
    3: "Add-ons",
    4: "Summary"
  }

  return (
    <nav
      className="ssmax:w-screen bg-sidebarDesktop ssmax:bg-sidebarMobile bg-cover bg-no-repeat bg-bottom py-5 px-5 sm:pl-8 ssmax:h-48 sm:rounded-xl uppercase">
      <ol
        className="counter__list gap-x-4 mt-4 ssmax:flex ssmax:flex-row ssmax:justify-center ssmax:items-start ssmax:h-full">
        {Object.keys(steps).map(step => {
          const stepNo = parseInt(step);
          const activeState = stepNo === currentStep ? 'active' : ''
          const activeThankYouPage = !Object.keys(steps).includes(currentStep.toString()) && stepNo === 4 ? 'active' : ''

          const operation = stepNo - currentStep;
          return (
            <li
              key={`step-${steps[step]}`}
              onClick={() => handleStepChange(operation)}
              className={`${activeState} counter flex items-center mb-5 sm:before:mr-5 ${activeThankYouPage}`}
            >
              <p className="ssmax:hidden flex flex-col justify-center">
                <span className="text-coolGray">Step {step}</span>
                <span className="text-white font-medium">{steps[step]}</span>
              </p>
            </li>
          )
        })}
      </ol>
    </nav >
  )
}
