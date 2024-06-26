export default function PlanCard({ name, price, icon, freeMonths = '', selected, changePlanOption, period = 'mo' }) {
  return (
    <div
      onClick={() => changePlanOption(name)}
      className={`${selected ? "border-purplishBlue" : ""} border-1 border-solid border-lightGray hover:border-purplishBlue rounded-lg p-3 w-full flex sm:flex-col sm:justify-between cursor-pointer`}>
      <img className="w-10 sm:pb-10 mr-2 sm:mr-16" src={icon} alt={`${name} Plan`} />
      <article>
        <p className="text-marineBlue font-medium">{name}</p>
        <p className="text-sm text-coolGray">{`${price}/${period}`}</p>
        {freeMonths && <p className="mt-1 text-xs text-marineBlue">{freeMonths} months free</p>}
      </article>
    </div>
  )
}
