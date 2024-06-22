export default function FormStepConfirm() {
  return (
    <section
      className="pb-6 ssmax:mx-5 ssmax:px-6 ssmax:pt-6 ssmax:rounded-lg bg-white ssmax:relative ssmax:top-[-103px]">

      <h2 className="text-3xl font-bold text-marineBlue mb-2">Finishing up</h2>
      <p className="text-coolGray mb-10">Double-check everything looks OK before confirming.</p>

      <section className="p-4 mb-4 bg-alabaster">
        <article className="mb-4 flex justify-between items-cener">
          <div>
            <p className="text-marineBlue font-medium">Arcade (Yearly)</p>
            <a className="text-coolGray text-sm underline" href="#">Change</a>
          </div>
          <p className="text-marineBlue font-bold">$90/yr</p>
        </article>

        <hr />

        <ul className="mt-4">
          <li className="w-full text-sm flex justify-between">
            <p className="text-coolGray">Online Service</p>
            <p className="text-marineBlue">+10/yr</p>
          </li>
          <li className="mt-3 w-full text-sm flex justify-between">
            <p className="text-coolGray">Larger Storage</p>
            <p className="text-marineBlue">+20/yr</p>
          </li>
        </ul>
      </section>

      <article className="px-4 py-2 flex justify-between">
        <p className="text-sm text-coolGray">Total (per year)</p>
        <p className="text-purplishBlue font-bold">$120/yr</p>
      </article>

    </section>
  )
}
