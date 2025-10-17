import { ArchiveIcon } from "lucide-react";
import { Search } from "lucide-react";
import { EllipsisVertical } from "lucide-react";
import { Trash2Icon } from "lucide-react";
import { RotateCw } from "lucide-react";
import InboxContentHeaderDropdown from "./InboxContentHeaderDropdown";
import { ChevronDown } from "lucide-react";

const InboxContentHeader = ({ selectAll, handleSelectAll }) => {
  const ICHD1 = [
    {
      text1: "All",
      text2: "Read",
      text3: "Unread",
      icon: ChevronDown,
      shortcut1: "⌘R",
      shortcut2: "⌘U",
    },
  ];

  const ICHD2 = [
    {
      text1: "View More",
      text2: "Delete",
      icon: EllipsisVertical,
    },
  ];

  const handleHeaderCheck = (e) => {
    handleSelectAll(e.target.checked);
  };

  return (
    <div className="sticky flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-800 xl:px-6">
      <div className="flex items-center pt-2 pb-2">
        <div className="flex gap-40">
          <div className="flex gap-2.5">
            <button className="p-2.5 flex border rounded-md gap-4">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleHeaderCheck}
                className="size-5 border-gray-300 cursor-pointer"
              />

              <div>
                {ICHD1.map((item, index) => {
                  return (
                    <div key={index}>
                      <InboxContentHeaderDropdown
                        text1={item.text1}
                        text2={item.text2}
                        text3={item.text3}
                        icon={item.icon}
                        shortcut1={item.shortcut1}
                        shortcut2={item.shortcut2}
                      />
                    </div>
                  );
                })}
              </div>
            </button>

            <button className="p-2.5 border rounded-md hover:bg-gray-100 group">
              <RotateCw className="text-gray-500 size-4.5 group-hover:text-gray-950" />
            </button>

            <button className="p-2.5 border rounded-md hover:bg-gray-100 group">
              <Trash2Icon className="text-gray-500 size-4.5 group-hover:text-red-500" />
            </button>

            <button className="p-2.5 border rounded-md hover:bg-gray-100 group">
              <ArchiveIcon className="text-gray-500 size-4.5 group-hover:text-gray-950" />
            </button>

            <button className="p-2.5 border rounded-md hover:bg-gray-100 group">
              {ICHD2.map((item, index) => {
                return (
                  <div key={index}>
                    <InboxContentHeaderDropdown
                      text1={item.text1}
                      text2={item.text2}
                      text3={item.text3}
                      icon={item.icon}
                    />
                  </div>
                );
              })}
            </button>
          </div>

          <div className="relative w-60">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxContentHeader;
