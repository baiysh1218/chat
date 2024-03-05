declare module "*.svg" {
  import * as React from "react";

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;

  export { src, ReactComponent };
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "firebase/app" {
  export function initializeApp(config: any): any;
  export function auth(): any;
  // Другие типы, которые вам могут понадобиться
}
