import FormStep1 from "./components/FormStep1";
import FormStep2 from "./components/FormStep2";
import FormStep3 from "./components/FormStep3";
import FormStepConfirm from "./components/FormStepConfirm";
import FormStepThanks from "./components/FormStepThanks";

export const FORM_STEPS = {
  1: FormStep1,
  2: FormStep2,
  3: FormStep3,
  4: FormStepConfirm,
  5: FormStepThanks,
};

export const ACTIONS = {
  CHANGE_PLAN: "change-plan",
  CHANGE_PLAN_OPTION: "change-plan-option",
  UPDATE_ADDONS: "update-addons",
};

export const PLANS = {
  Monthly: [
    { name: "Arcade", price: 9, icon: "/images/icon-arcade.svg" },
    { name: "Advanced", price: 12, icon: "/images/icon-advanced.svg" },
    { name: "Pro", price: 15, icon: "/images/icon-pro.svg" },
  ],
  Yearly: [
    {
      name: "Arcade",
      price: 90,
      icon: "/images/icon-arcade.svg",
      freeMonths: 2,
    },
    {
      name: "Advanced",
      price: 120,
      icon: "/images/icon-advanced.svg",
      freeMonths: 2,
    },
    {
      name: "Pro",
      price: 150,
      icon: "/images/icon-pro.svg",
      freeMonths: 2,
    },
  ],
};

export const ADDONS = {
  Monthly: [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      price: 1,
    },
    {
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      price: 2,
    },
  ],
  Yearly: [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      price: 10,
    },
    {
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: 20,
    },
    {
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      price: 20,
    },
  ],
};
