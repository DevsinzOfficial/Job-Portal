const EmptyState = (props) => {
  return (
    <div>
      <div className="max-w-md w-96 ">
        <div className="flex flex-col items-center justify-center w-full p-16 space-y-6 border-2 border-gray-300 border-dashed focus:border-black hover:border-gray-300 focus:outline-none">
          <div className="p-2 rounded-full bg-blue-50 w-max">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className="w-12 h-12 text-teal-600"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.0"
                d="M4.75 8L12 4.75L19.25 8L12 11.25L4.75 8Z"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.0"
                d="M4.75 16L12 19.25L19.25 16"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.0"
                d="M19.25 8V16"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.0"
                d="M4.75 8V16"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.0"
                d="M12 11.5V19"
              ></path>
            </svg>
          </div>

          <h3 className="text-lg font-medium">{props.message}</h3>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
