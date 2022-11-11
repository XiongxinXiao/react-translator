import React, { useState } from "react";
import Field from "./components/field";
import Translate from "./components/translate";
import Languages from "./components/languages";

export default function App() {
  const [languages, setLanguage] = useState("es");
  const [text, setText] = useState("");

  return (
    <div>
      <Field onChange={setText} />
      <Languages />
      <hr />
      <Translate />
    </div>
  );
}
