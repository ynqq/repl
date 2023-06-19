export {};

declare module "vuebar";
declare module "vue" {
  export interface GlobalComponents {
    NeoCustomFormNext: typeof import("../dist/packages/CustomForm/index.vue")["default"];
  }
}
