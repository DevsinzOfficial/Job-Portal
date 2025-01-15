
import { ErrorMessage, useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label className="block" htmlFor={field.name}>
        <span className="block mb-1 text-xs font-medium text-gray-700">
          {label}
        </span>
      </label>

      <input
        className={`mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-teal-500 block w-full rounded-md sm:text-sm focus:ring-1 ${
          meta.touched && meta.error
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />

      <div className="mt-2 text-sm text-red-600 dark:text-red-500">
        <ErrorMessage component="p" name={field.name} />
      </div>
    </div>
  );
};

export default TextField;
