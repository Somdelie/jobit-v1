import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const FormSuccess = ({ message }) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-600/20 rounded px-3 py-2 flex items-center gap-x-2 text-sm text-emerald-600">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
