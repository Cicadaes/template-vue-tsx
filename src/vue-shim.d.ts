declare module "*.vue" {
  import Vue from "vue"
  export default Vue
}

// iview
// declare module 'vue/types/vue' {
//   interface Vue {
//     $Message: any,
//     $Modal: any
//   }
// }

// declare global {
//   const _: typeof lodash
// }

declare module "vue/types/vue" {
  interface Vue {
    // $store: any
  }
}

// TS7026: JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists
// https://www.typescriptlang.org/docs/handbook/jsx.html
declare namespace JSX {
  interface IntrinsicElements {
      [elemName: string]: any;
  }
}
