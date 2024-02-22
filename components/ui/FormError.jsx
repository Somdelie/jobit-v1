import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const FormError = ({ message }) => {
  if (!message) return null;

  return (
    <div className="bg-red-600/40 rounded px-3 py-2 flex items-center gap-x-2 text-sm text-red-600">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
