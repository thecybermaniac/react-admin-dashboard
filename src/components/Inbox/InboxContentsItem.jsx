import { StarIcon } from "lucide-react";
import Badge from "../ui/badge/Badge";
import { useState } from "react";

const InboxContentsItem = ({ title, content, badge, time, checked, onCheck }) => {
  const [isStarred, setIsStarred] = useState(false);

  const handleStarClick = () => {
    setIsStarred(!isStarred);
  };

  return (
    <div className="flex gap-3 items-center border pt-3 pb-3 px-4 hover:bg-gray-100 ">
      <div className="rounded-lg">
        <input type="checkbox" name="" id="" className="size-5" checked={checked}
          onChange={onCheck} />
      </div>

      <button onClick={handleStarClick}>
        <div className="">
          <StarIcon className={`size-5 transition-colors duration-200 ${
              isStarred ? "text-yellow-500 fill-yellow-500" : "text-gray-400"
            }`} />
        </div>
      </button>

      <div className="">
        <h1 className="text-sm font-medium text-gray-700">{title}</h1>
      </div>

      <div className="">
        <p className="text-sm text-gray-500 font-normal">{content}</p>
      </div>

      <div className="flex items-center gap-9 ml-auto">
        {badge && <div>{badge}</div>}
        <p className="text-xs text-gray-400 font-normal">{time}</p>
      </div>
    </div>
  );
};

export default InboxContentsItem;
