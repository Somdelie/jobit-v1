"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TeamSelect = () => {
  return (
    <div className=" z-50 w-[220px] text-gray-500 flex items-center ">
      <DropdownMenu className="">
        <DropdownMenuTrigger
          asChild
          className="w-full rounded-[5px] border-2 p-0 dark:border-gray-600 "
        >
          <button className="inline-flex items-center whitespace-nowrap focus:ring-0 ring-0 outline-none rounded-md text-sm font-medium transition-colors border border-gray-400 dark:border-gray-600 bg-background shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-300 h-9 px-4 py-2 w-full justify-between">
            <span className="h-[20px] mr-2 w-[20px] rounded-full  bg-gradient-to-b from-gray-400 to-gray-300 dark:from-gray-500 dark:to-gray-400"></span>
            Somdelie Ndlovu
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-auto h-4 w-4 shrink-0 opacity-50"
            >
              <path
                d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 text-sm rounded border-gray-400 dark:border-gray-600">
          <div className="flex items-center border-b dark:border-gray-600 px-3">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-4 w-4 shrink-0 opacity-50"
            >
              <path
                d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="flex h-8 w-full rounded-md ring-0 border-none focus:ring-0  bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Search team..."
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              aria-autocomplete="list"
              role="combobox"
              aria-expanded="true"
              aria-controls=":r5s:"
              aria-labelledby=":r5t:"
              id=":r5u:"
              type="text"
              value=""
            />
          </div>

          <span className="text-xs text-gray-500 px-3 my-4">
            Personal Account
          </span>
          <div className="px-2">
            <div className="relative flex rounded px-2 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer text-sm">
              <span className="h-[20px] mr-2 w-[20px] rounded-full  bg-gradient-to-b from-gray-400 to-gray-300 dark:from-gray-500 dark:to-gray-400"></span>
              Cautious Ndlovu
            </div>
          </div>

          <DropdownMenuSeparator />
          <span className="text-xs text-gray-500 px-3 my-2">Teams</span>
          <ul className="flex flex-col gap-2 px-2 border-b py-1 dark:border-gray-600">
            <li className="relative flex rounded px-2 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer text-sm">
              <span className="h-[20px] mr-2 w-[20px] rounded-full  bg-gradient-to-b from-gray-400 to-gray-300 dark:from-gray-500 dark:to-gray-400"></span>
              Nomzy Ncube
            </li>
            <li className="relative flex rounded px-2 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer text-sm">
              <span className="h-[20px] mr-2 w-[20px] rounded-full  bg-gradient-to-b from-gray-400 to-gray-300 dark:from-gray-500 dark:to-gray-400"></span>
              Lucky Ncube
            </li>
          </ul>
          <div className="px-2 py-1">
            <button className="relative flex w-full items-center px-2 rounded py-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer text-sm">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
              >
                <path
                  d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
              Create team
            </button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TeamSelect;
