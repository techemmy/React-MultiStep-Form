export default function FormStepConfirm({ period, plan, selectedPlan, addOns }) {
  const total = addOns.reduce(
    (total, currAddOn) => currAddOn.selected ? total + currAddOn.price : total, selectedPlan.price
  );
  return (
    <section
      className="pb-6 ssmax:mx-5 ssmax:px-6 ssmax:pt-6 ssmax:rounded-lg bg-white ssmax:relative ssmax:top-[-103px]">

      <h2 className="text-3xl font-bold text-marineBlue mb-2">Finishing up</h2>
      <p className="text-coolGray mb-10">Double-check everything looks OK before confirming.</p>

      <section className="p-4 mb-4 bg-alabaster">
        <article className="mb-4 flex justify-between items-cener">
          <div>
            <p className="text-marineBlue font-medium">{selectedPlan.name} ({plan})</p>
            <a className="text-coolGray text-sm underline" href="#">Change</a>
          </div>
          <p className="text-marineBlue font-bold">{`${selectedPlan.price}/${period}`}</p>
        </article>

        <hr />

        <ul className="mt-4">
          {addOns.map(addOn => {
            return addOn.selected && (
              <li key={`${addOn.name}-${addOn.price}`} className="mt-3 w-full text-sm flex justify-between">
                <p className="text-coolGray">{addOn.name}</p>
                <p className="text-marineBlue">{`+${addOn.price}/${period}`}</p>
              </li>
            )
          })}
        </ul>
      </section>

      <article className="px-4 py-2 flex justify-between">
        <p className="text-sm text-coolGray">{
          `Total ${period.includes("mo") ? "(per month)" : "(per year)"}`}</p>
        <p className="text-purplishBlue font-bold">{`${total}/${period}`}</p>
      </article>

    </section>
  )
}
