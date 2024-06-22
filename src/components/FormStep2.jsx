export default function FormStep2() {
  return (

    <section
      className="pb-6 ssmax:mx-5 ssmax:px-6 ssmax:pt-6 ssmax:rounded-lg bg-white ssmax:relative ssmax:top-[-103px]">

      <h2 className="text-3xl font-bold text-marineBlue mb-2">Select your plan</h2>
      <p className="text-coolGray mb-10">You have the option of monthly or yearly billing.</p>

      <section className="flex flex-wrap sm:flex-nowrap justify-between gap-x-4 gap-y-4">
        <div
          className="bg-alabaster border-purplishBlue border-1 border-solid border-lightGray hover:border-purplishBlue rounded-lg p-3 w-full flex sm:flex-col sm:justify-between">
          <img className="w-10 sm:pb-10 mr-2 sm:mr-16" src="/images/icon-arcade.svg" alt="Arcade Plan" />
          <article>
            <p className="text-marineBlue font-medium">Arcade</p>
            <p className="text-sm text-coolGray">$9/mo</p>
            <p className="mt-1 text-xs text-marineBlue">2 months free</p>
          </article>
        </div>
        <div
          className="border-1 border-solid border-lightGray hover:border-purplishBlue rounded-lg p-3 w-full flex sm:flex-col sm:justify-between">
          <img className="w-10 sm:pb-10 mr-2 sm:mr-16" src="/images/icon-advanced.svg" alt="Advanced Plan" />
          <article>
            <p className="text-marineBlue font-medium">Advanced</p>
            <p className="text-sm text-coolGray">$12/mo</p>
            <p className="mt-1 text-xs text-marineBlue">2 months free</p>
          </article>
        </div>
        <div
          className="border-1 border-solid border-lightGray hover:border-purplishBlue rounded-lg p-3 w-full flex sm:flex-col sm:justify-between">
          <img className="w-10 sm:pb-10 mr-2 sm:mr-16" src="/images/icon-pro.svg" alt="Pro Plan" />
          <article>
            <p className="text-marineBlue font-medium">Pro</p>
            <p className="text-sm text-coolGray">$15/mo</p>
            <p className="mt-1 text-xs text-marineBlue">2 months free</p>
          </article>
        </div>
      </section>

      <section className="font-medium bg-alabaster py-2 gap-x-4 mt-10 flex flex-row justify-center items-center">
        <p>Monthly</p>
        <label className="toggle__switch">
          <input type="checkbox" defaultChecked />
          <span className="slider round"></span>
        </label>
        <p className="text-coolGray">Yearly</p>

      </section>
    </section>
  )
}
