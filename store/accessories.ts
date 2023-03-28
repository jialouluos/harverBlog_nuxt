import { defineStore } from "pinia";
export default defineStore({
  id: "accessories",
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: state => state.count * 2,
  },
  actions: {
    countPlusOne() {
      this.count++;
    },
  },
  persist: {
    storage: persistedState.cookiesWithOptions({
      sameSite: "strict",
    }),
  },
});
