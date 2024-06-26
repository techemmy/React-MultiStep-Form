export default function AddOnCard({ name, description, price, selected = false, handleAddOnClicked }) {
  return (
    <section
      className="has-[:checked]:bg-alabaster border-1 border-solid has-[:checked]:border-purplishBlue hover:border-purplishBlue rounded-lg flex items-center gap-x-6 px-4">
      <input id={name} className="accent-purplishBlue w-6 h-6" type="checkbox" checked={selected} onChange={() => handleAddOnClicked(name)} />
      <label htmlFor={name} className="py-4 flex justify-between items-center w-full">
        <div>
          <p className="text-marineBlue font-medium">{name}</p>
          <p className="text-coolGray text-sm">{description}</p>
        </div>
        <p className="text-purplishBlue">{price}</p>
      </label>
    </section >
  )
}