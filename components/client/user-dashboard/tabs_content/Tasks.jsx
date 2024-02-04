"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Trash } from "lucide-react";
import * as z from "zod";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [date, setDate] = useState();

  // Define Zod schema for form data
  const schema = z.object({
    text: z.string().nonempty().optional(), // Making text field optional for inline validation
    date: z.date().optional(),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm(); // Access errors from formState

  const onSubmit = (formData) => {
    try {
      schema.parse(formData);

      const { text } = formData;
      const newTask = {
        name: text || "No task name provided", // Use default value if text field is empty
        date: date ? format(date, "PPP") : "No date selected",
      };
      setTasks([...tasks, newTask]);
      reset();
    } catch (error) {
      console.error(error.errors);
    }
  };

  return (
    <div>
      <h1 className="text-lg font-bold mb-4">Your Tasks</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid sm:grid-cols-2 gap-4 dark:text-gray-300 w-full"
      >
        <Input
          type="text"
          id="text"
          placeholder="Task Name"
          {...register("text")}
        />
        {errors.text && (
          <span className="text-red-600">Task Name is required</span>
        )}{" "}
        {/* Display error message if text field is empty */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start p-2 text-left font-normal",
                !date && "text-muted-foreground rounded "
              )}
            >
              <CalendarIcon className="mr-2 " />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              {...register("date")}
            />
          </PopoverContent>
        </Popover>
        <div>
          <Button className="rounded">Add Task</Button>
        </div>
      </form>
      {/* Display the list of tasks */}
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="my-2 bg-white dark:bg-gray-700 p-3 flex items-end justify-between dark:text-gray-300"
          >
            <div className="flex flex-col">
              <div>
                Task Name: <span className="text-roseRed"> {task.name}</span>
              </div>
              <di>
                {" "}
                Date:<span className="text-teal-600"> {task.date}</span>
              </di>
            </div>
            <button>
              <Trash className="text-red-600" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
