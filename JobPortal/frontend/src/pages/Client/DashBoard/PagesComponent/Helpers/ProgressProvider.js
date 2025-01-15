import React, { useState, useEffect, createContext } from "react";

export const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const storedProgress = localStorage.getItem("progress");
  const initialProgress = storedProgress ? Number(storedProgress) : 0;
  const [progress, setProgress] = useState(initialProgress);

  useEffect(() => {
    const maxProgress = 100;
    const dueDate = new Date(Date.now() + 60 * 1000);
    const timeRemaining = dueDate - Date.now();
    const intervalTime = timeRemaining / maxProgress;

    setProgress(initialProgress);
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress > maxProgress) {
          clearInterval(interval);
          localStorage.removeItem("progress");
          return maxProgress;
        }
        localStorage.setItem("progress", newProgress);
        return newProgress;
      });
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};
