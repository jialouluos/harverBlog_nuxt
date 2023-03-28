import { useStore } from "~/store/index";
import { storeToRefs } from "pinia";
export default (theme?: "night" | "day") => {
  const store = storeToRefs(useStore()("accessory"));
  store.theme.value = theme || (store.theme.value === "day" ? "night" : "day");
  if (store.theme.value === "day") {
    document.documentElement.style.setProperty(`--bg`, "#f6f7fb"); //背景
    document.documentElement.style.setProperty(`--main`, "#fff"); //主色
    document.documentElement.style.setProperty(`--font`, "#101010"); //字体主色
    document.documentElement.style.setProperty(`--font_bg`, "#616161"); //字体背景
  } else {
    document.documentElement.style.setProperty(`--bg`, "#000102"); //背景
    document.documentElement.style.setProperty(`--main`, "#1b1c1d"); //主色
    document.documentElement.style.setProperty(`--font`, "#f4e6d2"); //字体主色
    document.documentElement.style.setProperty(`--font_bg`, "#232323"); //字体背景
  }
};
