import InboxItem from "@/components/InboxItem";
import Button from "@/components/ui/button/Button";
import { Mailbox } from "lucide-react";
import { Mail } from "lucide-react";
import { Pencil } from "lucide-react";
import { Search } from "lucide-react";
import { MoreVertical } from "lucide-react";
import React from "react";

const InboxItems = [
  {
    icon: Mailbox,
    title: "Inbox"
  }
]

const ChatLayout = () => {
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
                <div className="space-y-2 w-full">
                  <h2 className="uppercase text-xs">Mailbox</h2>

                  <div className="flex flex-col gap-4 w-full">
                    <InboxItem title="Inbox" icon={Mail} sum={40} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] xl:w-3/4">
            <div className="sticky flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-800 xl:px-6">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-full max-w-[48px] rounded-full">
                  <img
                    alt="profile"
                    src="./images/user/user-17.jpg"
                    className="object-cover object-center w-full h-full overflow-hidden rounded-full"
                  />
                  <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"></span>
                </div>
                <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Lindsey Curtis
                </h5>
              </div>
            </div>
            {/* Messages + input go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
