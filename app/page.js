"use client";
import { Provider } from "react-redux";
import Menu from "./components/Menu";
import Toolbox from "./components/Toolbox";
import { store } from "./components/store";
export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Menu />
        <Toolbox />
      </Provider>
    </>
  );
}
