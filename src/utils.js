import { ACTIONS, PLANS, ADDONS } from "./constants";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidUserForm({ name, email, number }) {
  const userFormErrors = {
    // a truthy field means there's an error
    name: name.trim() === "" ? true : false,
    email: email.trim() === "" || !isValidEmail(email.trim()) ? true : false,
    number: number.trim() === "" ? true : false,
  };
  return [
    Object.values(userFormErrors).includes(true) ? false : true,
    userFormErrors,
  ];
}

export function planReducer(state, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_PLAN:
      const planOption = PLANS[action.value].find(
        (planOption) => planOption.name === state.planOption,
      );
      return {
        ...state,
        plan: action.value,
        planOption: planOption.name,
      };
    case ACTIONS.CHANGE_PLAN_OPTION:
      return { ...state, planOption: action.value };
    default:
      return state;
  }
}

export function addOnReducer(state, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_PLAN:
      const updatedAddOns = ADDONS[action.value].map((addOn) => {
        const wasChecked = state.find((previousAddOn) => {
          return previousAddOn.selected && previousAddOn.name === addOn.name;
        });
        return wasChecked ? { ...addOn, selected: true } : addOn;
      });
      return updatedAddOns;
    case ACTIONS.UPDATE_ADDONS:
      return action.value;
    default:
      return state;
  }
}
