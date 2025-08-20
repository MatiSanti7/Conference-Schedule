import NavCMS from "../components/NavCMS";
import MainCMS from "../components/MainCMS";

export default function CMS() {
  return (
    <div className="flex h-screen bg-slate-900">
      <NavCMS />
      <MainCMS />
    </div>
  );
}
