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

export const PLANS = {
  monthly: [
    { name: "Arcade", price: "$9/mo", icon: "/images/icon-arcade.svg" },
    { name: "Advanced", price: "$12/mo", icon: "/images/icon-advanced.svg" },
    { name: "Pro", price: "$15/mo", icon: "/images/icon-pro.svg" },
  ],
  yearly: [
    {
      name: "Arcade",
      price: "$90/yr",
      icon: "/images/icon-arcade.svg",
      freeMonths: 2,
    },
    {
      name: "Advanced",
      price: "$120/yr",
      icon: "/images/icon-advanced.svg",
      freeMonths: 2,
    },
    {
      name: "Pro",
      price: "$150/yr",
      icon: "/images/icon-pro.svg",
      freeMonths: 2,
    },
  ],
};

export const planActions = {
  CHANGE_PLAN: "change-plan",
  CHANGE_PLAN_OPTION: "change-plan-option",
};
