import { defineStore } from "pinia";
export default defineStore({
  id: "accessories",
  state: (): {
    theme: "day" | "night";
    lock: boolean;
  } => ({
    theme: "day",
    lock: true,
  }),
  getters: {},
  actions: {},
  persist: {
    storage: persistedState.cookiesWithOptions({
      sameSite: "strict",
    }),
  },
});
