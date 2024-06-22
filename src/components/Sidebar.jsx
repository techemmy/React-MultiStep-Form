export default function Sidebar() {
  return (
    <nav
      className="bg-sidebarDesktop ssmax:bg-sidebarMobile bg-cover bg-no-repeat bg-bottom py-5 px-5 sm:pl-8 ssmax:h-60 ssmin:rounded-xl uppercase">
      <ol
        className="counter__list gap-x-4 mt-3 ssmax:flex ssmax:flex-row ssmax:justify-center ssmax:items-start ssmax:h-full">
        <li className="active counter flex items-center mb-5 ssmin:before:mr-5">
          <p className="ssmax:hidden flex flex-col justify-center">
            <span className="text-coolGray">Step 1</span>
            <span className="text-white font-medium">Your info</span>
          </p>
        </li>
        <li className="counter flex items-center mb-5 ssmin:before:mr-5">
          <p className="ssmax:hidden flex flex-col justify-center">
            <span className="text-coolGray">Step 2</span>
            <span className="text-white font-medium">Select plan</span>
          </p>
        </li>
        <li className="counter flex items-center mb-5 ssmin:before:mr-5">
          <p className="ssmax:hidden flex flex-col justify-center">
            <span className="text-coolGray">Step 3</span>
            <span className="text-white font-medium">Add-ons</span>
          </p>
        </li>
        <li className="counter flex items-center mb-5 ssmin:before:mr-5">
          <p className="ssmax:hidden flex flex-col justify-center">
            <span className="text-coolGray">Step 4</span>
            <span className="text-white font-medium">Summary</span>
          </p>
        </li>
      </ol>
    </nav>
  )
}
