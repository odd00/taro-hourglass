import { PropsWithChildren } from "react";
import Taro, { useLaunch } from "@tarojs/taro";

import "./app.scss";

Taro.cloud.init({
  env: "cloudbase-5g6wjeuo5606338c",
  traceUser: true,
});

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log("App launched.");
  });

  return children;
}

export default App;
