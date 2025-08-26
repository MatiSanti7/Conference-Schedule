import NavCMS from "../components/NavCMS";
import MainCMS from "../components/MainCMS";
import { useState } from "react";

export default function CMS() {
  const [selected, setSelected] = useState("eventInfo");
  return (
    <div className="flex h-full bg-slate-900">
      <NavCMS onSelect={setSelected} />
      <MainCMS selected={selected} />
    </div>
  );
}
