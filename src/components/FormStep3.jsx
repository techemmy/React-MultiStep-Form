export default function FormStep3() {
  return (
    <section
      className="pb-6 ssmax:mx-5 ssmax:px-6 ssmax:pt-6 ssmax:rounded-lg bg-white ssmax:relative ssmax:top-[-103px]">

      <h2 className="text-3xl font-bold text-marineBlue mb-2">Pick add-ons</h2>
      <p className="text-coolGray mb-10">Add-ons help enhance your gaming experience.</p>

      <section className="grid gap-y-4">
        <section
          className="has-[:checked]:bg-alabaster border-1 border-solid has-[:checked]:border-purplishBlue hover:border-purplishBlue rounded-lg flex items-center gap-x-6 px-4">
          <input id="online-service" className="accent-purplishBlue w-6 h-6" type="checkbox" defaultChecked />
          <label htmlFor="online-service" className="py-4 flex justify-between items-center w-full">
            <div>
              <p className="text-marineBlue font-medium">Online service</p>
              <p className="text-coolGray text-sm">Access to multiplayer games</p>
            </div>
            <p className="text-purplishBlue">+$1/mo</p>
          </label>
        </section>

        <section
          className="has-[:checked]:bg-alabaster border-1 border-solid has-[:checked]:border-purplishBlue hover:border-purplishBlue rounded-lg flex items-center gap-x-6 px-4">
          <input id="larger-storage" className="accent-purplishBlue w-6 h-6" type="checkbox" />
          <label htmlFor="larger-storage" className="py-4 flex justify-between items-center w-full">
            <div>
              <p className="text-marineBlue font-medium">Larger storage</p>
              <p className="text-coolGray text-sm">Extra 1TB of cloud save</p>
            </div>
            <p className="text-purplishBlue">+$2/mo</p>
          </label>
        </section>

        <section
          className="has-[:checked]:bg-alabaster border-1 border-solid has-[:checked]:border-purplishBlue hover:border-purplishBlue rounded-lg flex items-center gap-x-6 px-4">
          <input id="customizable-profile" className="accent-purplishBlue w-6 h-6" type="checkbox" />
          <label htmlFor="customizable-profile" className="py-4 flex justify-between items-center w-full">
            <div>
              <p className="text-marineBlue font-medium">Customizable Profile</p>
              <p className="text-coolGray text-sm">Custom theme on your profile</p>
            </div>
            <p className="text-purplishBlue">+$2/mo</p>
          </label>
        </section>
      </section>

    </section>
  )
}
