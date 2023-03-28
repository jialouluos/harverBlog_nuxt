import useAccessory from "./accessories";
const constructor = {
  accessory: useAccessory,
};
export const useStore = () => (type: "accessory") => {
  return constructor[type]();
};
