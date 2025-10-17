import React, { useState } from "react";
import InboxContentHeader from "@/components/Inbox/InboxContent/InboxContentHeader";
import Button from "@/components/ui/button/Button";
import { Trash2Icon } from "lucide-react";
import { SendHorizontalIcon } from "lucide-react";
import { ArchiveIcon } from "lucide-react";
import { Tag } from "lucide-react";
import { StarIcon } from "lucide-react";
import { Mail } from "lucide-react";
import { MailboxIcon } from "lucide-react";
import { Pencil } from "lucide-react";

import InboxItem from "@/components/Inbox/InboxItem/InboxItem";
import { MailIcon } from "lucide-react";
import InboxContents from "@/components/Inbox/InboxContent/InboxContents";

const ChatLayout = () => {
  const [activeTab, setActiveTab] = useState("inbox");

  const tabItems = [
    {
      title: "Inbox",
      icon: MailboxIcon,
      sum: 3,
    },
    {
      title: "Sent",
      icon: SendHorizontalIcon,
      sum: "",
    },
    {
      title: "Drafts",
      icon: Mail,
      sum: "",
    },
    {
      title: "Spam",
      icon: MailboxIcon,
      sum: "2",
    },
    {
      title: "Trash",
      icon: Trash2Icon,
      sum: "",
    },
    {
      title: "Archive",
      icon: ArchiveIcon,
      sum: "",
    },
    {
      title: "Starred",
      icon: StarIcon,
      sum: "",
    },
    {
      title: "Important",
      icon: MailboxIcon,
    },
    {
      title: "Personal",
      label: {
        icon: Tag,
        color: "fill-emerald-500 text-emerald-500",
      },
    },
    {
      title: "Work",
      label: {
        icon: Tag,
        color: "fill-red-500 text-red-500",
      },
    },
    {
      title: "Payment",
      label: {
        icon: Tag,
        color: "fill-orange-500 text-orange-500",
      },
    },
    {
      title: "Invoice",
      label: {
        icon: Tag,
        color: "fill-sky-500 text-sky-500",
      },
    },
    {
      title: "Blank",
      label: {
        icon: Tag,
        color: "fill-brand-500 text-brand-500",
      },
    },
  ];

  // Helper to manage active item styling

  return (
    <div className="p-4 mx-auto max-w-[--breakpoint-2xl] md:p-6">
      {/* Main layout */}
      <div className="h-[calc(100vh-150px)] overflow-hidden sm:h-[calc(100vh-174px)]">
        <div className="flex flex-col h-full gap-6 xl:flex-row xl:gap-5">
          {/* Sidebar */}
          <div className="flex-col rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] xl:flex xl:w-1/4">
            <div className="sticky px-4 pt-4 pb-4 sm:px-5 sm:pt-5 xl:pb-0">
              <div className="flex items-start justify-between">
                <Button
                  type="button"
                  startIcon={<Pencil className="size-4" />}
                  className="w-full"
                >
                  Compose
                </Button>
              </div>

              {/* Search + Add Chat Button */}
              <div className="flex items-center gap-3 mt-4">
                <button className="flex items-center justify-center w-full text-gray-700 border border-gray-300 rounded-lg h-11 max-w-11 dark:border-gray-700 dark:text-gray-400 xl:hidden">
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.25 6C3.25 5.58579 3.58579 5.25 4 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75L4 6.75C3.58579 6.75 3.25 6.41422 3.25 6ZM3.25 18C3.25 17.5858 3.58579 17.25 4 17.25L20 17.25C20.4142 17.25 20.75 17.5858 20.75 18C20.75 18.4142 20.4142 18.75 20 18.75L4 18.75C3.58579 18.75 3.25 18.4142 3.25 18ZM4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75L20 12.75C20.4142 12.75 20.75 12.4142 20.75 12C20.75 11.5858 20.4142 11.25 20 11.25L4 11.25Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <div className="space-y-2 w-full overflow-y-auto h-[calc(100vh-250px)]">
                  <h2 className="uppercase text-xs">Mailbox</h2>
                  {tabItems.slice(0, 6).map((item, index) => {
                    const tab = item.title.toLowerCase();
                    return (
                      <div onClick={() => setActiveTab(tab)} key={index}>
                        <InboxItem
                          title={item.title}
                          icon={item.icon}
                          sum={item.sum}
                          active={activeTab == tab}
                        />
                      </div>
                    );
                  })}
                  <h2 className="uppercase text-xs ">Filter</h2>
                  {tabItems.slice(6, 8).map((item, index) => {
                    const tab = item.title.toLowerCase();
                    return (
                      <div onClick={() => setActiveTab(tab)} key={index}>
                        <InboxItem
                          title={item.title}
                          icon={item.icon}
                          sum={item.sum}
                          active={activeTab == tab}
                        />
                      </div>
                    );
                  })}
                  <h2 className="uppercase text-xs">Label</h2>
                  {tabItems.slice(8, 13).map((item, index) => {
                    const tab = item.title.toLowerCase();
                    return (
                      <div onClick={() => setActiveTab(tab)} key={index}>
                        <InboxItem
                          title={item.title}
                          label={item.label}
                          sum={item.sum}
                          active={activeTab == tab}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] xl:w-3/4">
            {/* Messages + input go here */}
            <div className="overflow-y-auto h-[calc(150vh-250px)]">
              <InboxContents
                tab={activeTab}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
