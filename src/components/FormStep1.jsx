import React from "react"

export default function FormStep1({ userFormValues, userFormErrors: errors, handleUserFormChange: handleChange }) {
  const { name, email, number } = userFormValues;
  return (
    <form
      className="pb-6 ssmax:mx-5 ssmax:px-6 ssmax:pt-6 ssmax:rounded-lg bg-white ssmax:relative ssmax:top-[-103px]">

      <h2 className="text-3xl font-bold text-marineBlue mb-2">Personal info</h2>
      <p className="text-coolGray mb-10">Please provide your name, email address, and phone number.</p>

      <div className="my-5 flex flex-col relative">
        <label className="text-marineBlue" htmlFor="name">Name</label>
        <span className={`${errors.name ? '' : 'hidden'} text-strawberryRed font-medium md:absolute right-0`}>This field is required</span>
        <input
          className={`${errors.name ? 'border-strawberryRed' : ''} outline-none font-medium text-marineBlue mt-1 px-3 py-3 rounded-lg border-solid border-1 focus:border-purplishBlue cursor-pointer`}
          type="text" name="name" id="name" placeholder="e.g. Stephen King" defaultValue={name} onChange={handleChange} />
      </div>


      <div className="my-5 flex flex-col relative">
        <label className="text-marineBlue" htmlFor="email">Email Address</label>
        <span className={`${errors.email ? '' : 'hidden'} text-strawberryRed font-medium md:absolute right-0`}>This field is required</span>
        <input
          className={`${errors.email ? 'border-strawberryRed' : ''} outline-none font-medium text-marineBlue mt-1 px-3 py-3 rounded-lg border-solid border-1 focus:border-purplishBlue cursor-pointer`}
          type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" defaultValue={email} onChange={handleChange} />
      </div>

      <div className="my-5 flex flex-col relative">
        <label className="text-marineBlue" htmlFor="phone">Phone Number</label>
        <span className={`${errors.number ? '' : 'hidden'} text-strawberryRed font-medium md:absolute right-0`}>This field is required</span>
        <input
          className={`${errors.number ? 'border-strawberryRed' : ''} outline-none font-medium text-marineBlue mt-1 px-3 py-3 rounded-lg border-solid border-1 focus:border-purplishBlue cursor-pointer`}
          type="number" name="number" id="number" placeholder="e.g. +1 234 567 890" defaultValue={number} onChange={handleChange} />
      </div>

    </form>

  )
}
