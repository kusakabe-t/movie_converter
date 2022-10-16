import { Listbox, Transition } from "@headlessui/react";
import { UnfoldMoreIcon } from "./Icon";
import { Fragment } from "react";
import type { ExtensionType } from "../pages";
import { extensions } from "../pages";
import type { Dispatch, SetStateAction } from "react";

export const SelectBox = ({
  selected,
  setSelected,
}: {
  selected: ExtensionType;
  setSelected: Dispatch<SetStateAction<ExtensionType>>;
}) => {
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  const storeSelectedValue = async (selected: ExtensionType) => {
    setSelected(selected);
  };

  return (
    <Listbox value={selected} onChange={storeSelectedValue}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">
            変換後のファイル形式
          </Listbox.Label>
          <div className="relative mt-[4px]">
            <Listbox.Button className="relative h-[50px] w-full rounded-[4px] border p-[8px] text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              <span>{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-[16px]">
                <UnfoldMoreIcon />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-[8px] max-h-60 w-full overflow-auto rounded-[4px] bg-white py-[4px] text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {extensions.map((extension) => (
                  <Listbox.Option
                    key={extension.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative select-none py-[4px] pl-[8px] pr-[4px]"
                      )
                    }
                    value={extension}
                  >
                    {({ selected, active }) => (
                      <div className="flex">
                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "flex items-center"
                            )}
                          >
                            ✅
                          </span>
                        ) : null}
                        <span
                          className={classNames(
                            selected ? "ml-[8px] font-semibold" : "font-normal",
                            "block"
                          )}
                        >
                          {extension.name}
                        </span>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};
