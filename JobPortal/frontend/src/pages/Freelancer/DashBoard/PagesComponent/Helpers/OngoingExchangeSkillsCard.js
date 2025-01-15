import { useState, useEffect } from "react";

const OngoingExchnageSkillsCard = ({ data }) => {
  const id = data?._id;
  const storedProgress = sessionStorage.getItem(`exchangeSkills-${id}`);
  const initialProgress = storedProgress ? Number(storedProgress) : 0;
  const [progress, setProgress] = useState(initialProgress);

  const exchangeDuration = data?.exchangeSkillsOrderType?.duration;

  useEffect(() => {
    const today = new Date();
    /*  const dueDate = new Date(today.getTime() + 60 * 1000); */
    const dueDate = new Date(
      today.getTime() + exchangeDuration * 24 * 60 * 60 * 1000
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
            sessionStorage.removeItem(`exchangeSkills-${id}`); // remove the stored progress
            return 100;
          }
          sessionStorage.setItem(`exchangeSkills-${id}`, newProgress); // store the new progress in sessionStorage
          return newProgress;
        });
      }, intervalTime);
    }
    return () => clearInterval(interval);
  }, [progress, exchangeDuration, id]);

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
      <div className="shadow-lg rounded-xl mx-4 my-4 p-4 bg-blue-100 relative overflow-hidden">
        <div className="w-full h-full block">
          <div className="w-full">
            <p className="text-gray-500 text-sm font-medium mb-2">
              {dateConverter(data?.createdAt)}
            </p>
            <p className="text-gray-800 text-sm font-medium mb-2 text-center">
              {limitText(
                data?.exchangeSkillsOrderType?.exchangeSkillsId?.title
              )}
            </p>
            <p className="text-gray-500 text-sm font-medium mb-2 text-center">
              {data?.exchangeSkillsOrderType?.exchangeSkillsId?.requiredSkills}
            </p>

            <p className="text-gray-500 text-sm font-medium mb-2 text-center">
              {data?.exchangeSkillsOrderType?.exchangeSkillsId?.offeredSkills}
            </p>

            <div className="flex text-gray-500 items-center justify-between">
              <p>Job progress</p>
              <p>{progress}%</p>
            </div>
            <div className=" mt-3 mb-6">
              <div
                style={{
                  width: `${progress}%`,
                  height: "20px",
                  background: `#0039a6`,
                }}
              ></div>
            </div>
            <div className="flex text-blue-600 font-bold items-center ">
              <p>Duration: {data?.exchangeSkillsOrderType?.duration} days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingExchnageSkillsCard;
