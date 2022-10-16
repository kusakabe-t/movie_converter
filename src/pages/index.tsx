import { useState } from "react";
import { DropArea } from "../components/DropArea";
import { SelectBox } from "../components/SelectBox";

// FIXME: まだ使えないため、様子見
// import { Store } from "tauri-plugin-store-api";
// cf. https://github.com/tauri-apps/tauri-plugin-store

export const extensions = [
  { id: 1, name: "webm" },
  { id: 2, name: "mp4" },
] as const;

export type ExtensionType = typeof extensions[number];

function App() {
  const [selected, setSelected] = useState<ExtensionType>(extensions[0]);

  return (
    <div className="m-[16px] mx-auto w-[500px]">
      <SelectBox selected={selected} setSelected={setSelected} />
      <DropArea />
    </div>
  );
}

export default App;
