import AddOnCard from "./AddOnCard";

export default function FormStep3({ period, addOns, handleAddOnUpdated }) {
  return (
    <section
      className="pb-6 ssmax:mx-5 ssmax:px-6 ssmax:pt-6 ssmax:rounded-lg bg-white ssmax:relative ssmax:top-[-103px]">

      <h2 className="text-3xl font-bold text-marineBlue mb-2">Pick add-ons</h2>
      <p className="text-coolGray mb-10">Add-ons help enhance your gaming experience.</p>

      <section className="grid gap-y-4">
        {addOns.map(({ name, description, price, selected }) => {
          return <AddOnCard
            key={name}
            name={name}
            description={description}
            price={price}
            period={period}
            selected={selected}
            handleAddOnClicked={handleAddOnUpdated}
          />
        })}
      </section>

    </section>
  )
}
