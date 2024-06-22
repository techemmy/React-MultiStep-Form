import { FORM_STEPS } from "../constants"
import Button from "./Button"

export default function BottomNavigation({ step }) {
  const totalFormSteps = Object.keys(FORM_STEPS).length
  const backBtn = step > 1 ? <Button action="back" /> : '';
  const nextBtn = step < totalFormSteps - 1 ? <Button action="next" /> : '';
  const confirmBtn = step === totalFormSteps - 1 ? <Button action="confirm" /> : '';

  return (
    <section className="flex justify-end ssmax:fixed ssmax:bottom-0 ssmax:left-0 ssmax:right-0 ssmax:px-6 ssmax:py-6
        ssmax:bg-white">
      <div className={`w-full flex flex-row ${step === 1 ? 'justify-end' : 'justify-between'}`}>
        {backBtn}
        {nextBtn}
        {confirmBtn}
      </div>
    </section >
  )
}
