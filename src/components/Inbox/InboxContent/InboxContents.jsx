import { useState, useEffect } from "react";
import Badge from "@/components/ui/badge/Badge";
import InboxContentsItem from "../InboxContentsItem";
import InboxContentHeader from "./InboxContentHeader";

const InboxContents = ({ tab }) => {
  // ✅ Define all tabs and their content in one object
  const dataSets = {
    inbox: [
      {
        title: "Material UI",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit....",
        badge: <Badge color="error">Important</Badge>,
        time: "12:16pm",
      },
      {
        title: "Wise",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda....",
        badge: "",
        time: "12:16pm",
      },
      {
        title: "Search Co...",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. As....",
        badge: <Badge color="success">Social</Badge>,
        time: "Apr, 30",
      },
      {
        title: "Instagram",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing e....",
        badge: <Badge>Promotional</Badge>,
        time: "Feb, 25",
      },
    ],
    sent: [
      {
        title: "Material UI",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit....",
        badge: <Badge color="error">Important</Badge>,
        time: "12:16pm",
      },
      {
        title: "Wise",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda....",
        badge: "",
        time: "12:16pm",
      },
    ],
    drafts: [],
    spam: [],
    trash: [],
    archive: [],
    starred: [],
    important: [],
    personal: [],
    work: [],
    payment: [],
    invoice: [],
    blank: [],
  };

  // ✅ Use the right dataset based on current tab
  const currentItems = dataSets[tab] || [];

  // ✅ Checkbox state setup
  const [checkedItems, setCheckedItems] = useState(
    new Array(currentItems.length).fill(false)
  );
  const [selectAll, setSelectAll] = useState(false);

  // ✅ Update checkbox states if tab changes
  useEffect(() => {
    setCheckedItems(new Array(currentItems.length).fill(false));
    setSelectAll(false);
  }, [tab]);

  // ✅ "Select all" logic
  const handleSelectAll = (isChecked) => {
    setSelectAll(isChecked);
    setCheckedItems(new Array(currentItems.length).fill(isChecked));
  };

  // ✅ Handle single item check
  const handleItemCheck = (index) => {
    setCheckedItems((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      const allChecked = updated.every((item) => item === true);
      setSelectAll(allChecked);
      return updated;
    });
  };

  return (
    <>
      <InboxContentHeader
        selectAll={selectAll}
        handleSelectAll={handleSelectAll}
      />

      <div className="mt-3">
        {currentItems.map((item, index) => (
          <InboxContentsItem
            key={index}
            title={item.title}
            content={item.content}
            badge={item.badge}
            time={item.time}
            checked={checkedItems[index]}
            onCheck={() => handleItemCheck(index)}
          />
        ))}
      </div>
    </>
  );
};

export default InboxContents;
