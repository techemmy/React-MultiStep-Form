import PlanCard from "./PlanCard";
export default function FormStep2({ plan, planOptions, handlePlanChange, selectedPlanOption, handlePlanOptionChange }) {
  return (
    <form
      className="pb-6 ssmax:mx-5 ssmax:px-6 ssmax:pt-6 ssmax:rounded-lg bg-white ssmax:relative ssmax:top-[-103px]">

      <h2 className="text-3xl font-bold text-marineBlue mb-2">Select your plan</h2>
      <p className="text-coolGray mb-10">You have the option of monthly or yearly billing.</p>

      <section className="flex flex-wrap sm:flex-nowrap justify-between gap-x-4 gap-y-4">
        {planOptions.map(({ name, price, icon, freeMonths }) => {
          return <PlanCard
            key={`${plan}-${name}-${price}`}
            name={name}
            price={price}
            icon={icon}
            freeMonths={freeMonths}
            selected={name === selectedPlanOption}
            changePlanOption={handlePlanOptionChange}
          />
        })}
      </section>

      <section className="font-medium bg-alabaster py-2 gap-x-4 mt-10 flex flex-row justify-center items-center">
        <p className={plan === 'monthly' ? "" : "text-coolGray"}>Monthly</p>
        <label className="toggle__switch">
          <input type="checkbox" onChange={(e) => handlePlanChange(e.target.checked)} defaultChecked />
          <span className="slider round"></span>
        </label>
        <p className={plan === 'yearly' ? "" : "text-coolGray"}>Yearly</p>

      </section>
    </form>
  )
}
