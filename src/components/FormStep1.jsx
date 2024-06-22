export default function FormStep1() {
  return (
    <section
      className="pb-6 ssmax:mx-5 ssmax:px-6 ssmax:pt-6 ssmax:rounded-lg bg-white ssmax:relative ssmax:top-[-103px]">

      <h2 className="text-3xl font-bold text-marineBlue mb-2">Personal info</h2>
      <p className="text-coolGray mb-10">Please provide your name, email address, and phone number.</p>

      <div className="my-5 flex flex-col relative">
        <label className="text-marineBlue" htmlFor="name">Name</label>
        <span className="hidden text-strawberryRed font-medium md:absolute right-0">This field is required</span>
        <input
          className="outline-none font-medium text-marineBlue mt-1 px-3 py-3 rounded-lg border-solid border-coolGrey border-1 focus:border-purplishBlue cursor-pointer"
          type="text" name="name" id="name" placeholder="e.g. Stephen King" />
      </div>


      <div className="my-5 flex flex-col relative">
        <label className="text-marineBlue" htmlFor="email">Email Address</label>
        <span className="hidden text-strawberryRed font-medium md:absolute right-0">This field is required</span>
        <input
          className="outline-none font-medium text-marineBlue mt-1 px-3 py-3 rounded-lg border-solid border-coolGrey border-1 focus:border-purplishBlue cursor-pointer"
          type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" />
      </div>

      <div className="my-5 flex flex-col relative">
        <label className="text-marineBlue" htmlFor="phone">Phone Number</label>
        <span className="text-strawberryRed font-medium md:absolute right-0">This field is required</span>
        <input
          className="outline-none font-medium text-marineBlue mt-1 px-3 py-3 rounded-lg border-solid border-strawberryRed border-1 focus:border-purplishBlue cursor-pointer"
          type="number" name="number" id="number" placeholder="e.g. +1 234 567 890" />
      </div>

    </section>

  )
}
