import React from "react";

const Inboxes = () => {
  const inboxMessages = [
    {
      id: 1,
      sender: "John",
      subject: "Meeting Reminder",
      content: "Don't forget about the meeting tomorrow!",
    },
    {
      id: 2,
      sender: "Alice",
      subject: "Project Update",
      content: "Here's the latest update on the project.",
    },
    {
      id: 3,
      sender: "Bob",
      subject: "Important Announcement",
      content: "Please read the attached document for important information.",
    },
  ];

  return (
    <div className=" py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Inboxes</h2>
      <div className="space-y-6">
        {inboxMessages.map((message) => (
          <div
            key={message.id}
            className="bg-white dark:bg-transparent dark:border-2 dark:text-gray-300 shadow-md p-6 rounded-lg"
          >
            <div className="text-lg font-semibold">{message.subject}</div>
            <div className="text-gray-600 mt-2">From: {message.sender}</div>
            <div className="text-gray-700 mt-2">{message.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inboxes;
