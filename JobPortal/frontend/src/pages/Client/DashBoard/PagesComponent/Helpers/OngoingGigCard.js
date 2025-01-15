import { useState, useEffect } from "react";

const OngoingGigCard = ({ data }) => {
  const id = data?._id;
  const storedProgress = sessionStorage.getItem(`gigProgressClient-${id}`);
  const initialProgress = storedProgress ? Number(storedProgress) : 0;
  const [progress, setProgress] = useState(initialProgress);

  const gigDuration = data?.duration;

  useEffect(() => {
    const today = new Date();
    /*  const dueDate = new Date(today.getTime() + 60 * 1000); */
    const dueDate = new Date(
      today.getTime() + gigDuration * 24 * 60 * 60 * 1000
    );

    // Calculate the time remaining until the project is due in milliseconds
    const timeRemaining = dueDate - Date.now();

    // Set the interval time based on the time remaining and maximum progress
    const intervalTime = timeRemaining / 100;
    let interval = null;
    if (progress < 100) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 1;
          if (newProgress > 100) {
            clearInterval(interval); // stop the interval when the maximum progress is reached
            sessionStorage.removeItem(`gigProgressClient-${id}`); // remove the stored progress
            return 100;
          }
          sessionStorage.setItem(`gigProgressClient-${id}`, newProgress); // store the new progress in sessionStorage
          return newProgress;
        });
      }, intervalTime);
    }
    return () => clearInterval(interval);
  }, [progress, gigDuration, id]);

  const dateConverter = (createdAt) => {
    const userCreatedDate = new Date(createdAt);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var month = months[userCreatedDate.getMonth()];
    var year = userCreatedDate.getFullYear();
    var date = userCreatedDate.getDate();

    return `${month} ${date} ${year} `;
  };

  const limitText = (text) => {
    return text && text.split(" ").slice(0, 2).join(" ");
  };

  return (
    <div>
      <div className="shadow-lg rounded-xl mx-4 my-4  p-4 bg-purple-100 relative overflow-hidden">
        <div className="w-full h-full block">
          <div className="w-full">
            <p className="text-gray-500 text-sm font-medium mb-2">
              {dateConverter(data?.createdAt)}
            </p>
            <p className="text-gray-800  text-sm font-medium mb-2 text-center">
              {limitText(data?.gigOrderType?.title)}
            </p>
            <p className="text-gray-500 text-sm font-medium mb-2 text-center">
              {data?.gigOrderType?.Category}
            </p>

            <div className="flex text-gray-500 items-center justify-between">
              <p>Gig progress</p>
              <p>{progress}%</p>
            </div>
            <div className=" mt-3 mb-6">
              <div
                style={{
                  width: `${progress}%`,
                  height: "20px",
                  background: `#8e44ad`,
                }}
              ></div>
            </div>
            <div className="flex text-purple-600 font-bold items-center justify-between ">
              <p>Duration: {data?.duration} days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingGigCard;
