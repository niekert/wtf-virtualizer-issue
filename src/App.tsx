import "./styles.css";
import "./tailwind.css";

import { useVirtual } from "react-virtual";

import { nanoid } from "nanoid";
import { useRef } from "react";

const items = Array.from(
  {
    length: 1000
  },
  () => ({
    id: nanoid(),
    name: Math.random(),
    address: Math.random(),
    img: Math.random()
  })
);

const ItemRow = ({ children = null }) => (
  <div className={"flex p-4 rounded-md transition hover:bg-gray-50"}>
    <div className="group flex relative flex-1 min-w-0">
      <div className="flex flex-1 min-w-0">
        <div className="flex flex-col justify-center self-start mr-4">
          "Avatar"
        </div>

        <div className="flex overflow-hidden flex-col flex-1">
          <div className="flex flex-1 items-center">
            <span className="flex-1 text-sm font-semibold text-gray-900 truncate">
              "Title"
            </span>
          </div>
          <span className="text-sm text-gray-900 truncate">HAllo</span>
          <div className="flex flex-1 items-center space-x-2">
            <span className="overflow-hidden flex-1 text-sm text-ellipsis whitespace-nowrap">
              "Preview"
            </span>
            <span className="text-sm shrink-0 ml-4">Timestamp</span>
            Statu
          </div>
        </div>
      </div>
    </div>
  </div>
);
const estimateSize = () => 100;

export default function App() {
  const ref = useRef<HTMLDivElement>(null);

  const { virtualItems, totalSize } = useVirtual({
    parentRef: ref,
    size: items.length,
    estimateSize
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div
        ref={ref}
        style={{ border: "1px solid red", height: "500px", overflow: "auto" }}
      >
        <div style={{ height: totalSize }}>
          {/* render a placeholder node of virtualItems[0].start height
           *  instead of "position: absolute" and inline "transform" per each item
           */}
          <div style={{ height: virtualItems[0]?.start }} />

          {virtualItems.map(({ index }) => {
            const item = items[index];

            return (
              <div style={{ height: 100, overflow: "hidden" }} key={item.id}>
                <ItemRow>
                  <ItemRow>Wat</ItemRow>
                  <ItemRow>Wat</ItemRow>
                  <ItemRow>Wat</ItemRow>
                  <ItemRow>Wat</ItemRow>
                  <ItemRow>Wat</ItemRow>
                  <ItemRow>Wat</ItemRow>
                  <ItemRow>Wat</ItemRow>
                  <ItemRow>Wat</ItemRow>
                </ItemRow>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
