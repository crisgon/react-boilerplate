import React from "react";
import "normalize.css";

import { hot } from "react-hot-loader/root";

import { Title } from "components/Title";

import s from "./style.scss";

export function HotApp() {
  return (
    <main className={s.app}>
      <Title title="React Boilerplate!!" />
    </main>
  );
}

export const App = hot(HotApp);
