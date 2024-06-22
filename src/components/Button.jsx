import PropTypes from "prop-types";

export default function Button({ action, handleClick }) {
  let btn = ''
  switch (action) {
    case 'back':
      btn = (
        <button
          onClick={handleClick}
          className="bg-transparent text-coolGray text-lg rounded-lg px-6 py-3 hover:text-marineBlue active:text-marineBlue">Go
          Back</button>
      )
      break;

    case 'confirm':
      btn = (
        <button
          onClick={handleClick}
          className="bg-purplishBlue text-white text-lg rounded-lg px-6 py-3 hover:bg-purplishBlue/70 active:bg-purplishBlue/90">Confirm</button>
      )
      break;

    default:
      btn = (
        <button
          onClick={handleClick}
          className="bg-marineBlue text-white text-lg rounded-lg px-6 py-3 hover:bg-marineBlue/70 active:bg-marineBlue/90">Next
          Step</button>
      )
      break;
  }

  return btn
}

Button.propTypes = {
  action: PropTypes.oneOf(['back', 'next', 'confirm'])
}
