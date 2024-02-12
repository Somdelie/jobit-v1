/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function EditProject({ project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="py-1 px-2 border border-gray-400 text-blue-500 dark:border-gray-600 hover:bg-slate-700 ">
          Edit project
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white dark:bg-gray-700 dark:text-gray-300">
        <DialogHeader>
          <DialogTitle>Edit project</DialogTitle>
          <DialogDescription>
            Make changes to your project here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form className="grid sm:grid-cols-2 gap-4 py-4 w-full">
          <div className="col-span-2 sm:col-span-1">
            <label
              for="jobType"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              job Type
            </label>
            <input
              id="jobType"
              defaultValue={project?.jobType}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              for="firstName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Employer
            </label>
            <input
              id="firstName"
              defaultValue={project?.user.firstName}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              for="skills"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Skills
            </label>
            <input
              id="skills"
              defaultValue={project?.skills}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              for="status"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Status
            </label>
            <select
              id="status"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={project?.status}
              onChange={(e) => {
                // Handle status change if needed
              }}
            >
              <option value="ongoing">Canceled</option>
              <option value="ongoing">On going</option>
              <option value="finished">Finished</option>
            </select>
          </div>
          <div className="col-span-2">
            <label
              for="address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address
            </label>
            <input
              id="address"
              defaultValue={project?.address}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <DialogFooter className="col-span-2">
            <Button>Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
