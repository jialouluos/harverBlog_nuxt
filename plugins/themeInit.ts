import { useStore } from "@/store/index";
import { storeToRefs } from "pinia";
import * as hooks from "@/hooks";
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.hook("app:mounted", _ => {
    if (process.client) {
      //客户端
      if (typeof window === "undefined") return;
      const { theme } = storeToRefs(useStore()("accessory"));
      console.log("client mounted", theme.value);
      hooks.useTheme(theme.value);
    }
  });

  nuxtApp.hook("app:error", _ => {
    process.client;
  });
});
