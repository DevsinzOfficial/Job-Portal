import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import io from "socket.io-client";
import EmptyState from "../DashBoard/PagesComponent/Helpers/EmptyState";
import profile from "../../../img/profile.jpg";

const ClientChatPage = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const id = localStorage.getItem("authID");
  const messageContainerRef = useRef(null);

  const getObject = (obj, id) => {
    if (obj?.admin1 && obj?.admin1?._id === id) {
      if (obj?.admin2) return obj?.admin2;
      else if (obj?.freelancer1) return obj?.freelancer1;
      else if (obj?.freelancer2) return obj?.freelancer2;
      else if (obj?.client1) return obj?.client1;
      else if (obj?.client2) return obj?.client2;
    } else if (obj?.admin2 && obj?.admin2?._id === id) {
      if (obj?.admin1) return obj?.admin1;
      else if (obj?.freelancer1) return obj?.freelancer1;
      else if (obj?.freelancer2) return obj?.freelancer2;
      else if (obj?.client1) return obj?.client1;
      else if (obj?.client2) return obj?.client2;
    } else if (obj?.freelancer1 && obj?.freelancer1?._id === id) {
      if (obj?.admin1) return obj?.admin1;
      else if (obj?.admin2) return obj?.admin2;
      else if (obj?.freelancer2) return obj?.freelancer2;
      else if (obj?.client1) return obj?.client1;
      else if (obj?.client2) return obj?.client2;
    } else if (obj?.freelancer2 && obj?.freelancer2?._id === id) {
      if (obj?.admin1) return obj?.admin1;
      else if (obj?.admin2) return obj?.admin2;
      else if (obj?.freelancer1) return obj?.freelancer1;
      else if (obj?.client1) return obj?.client1;
      else if (obj?.client2) return obj?.client2;
    } else if (obj?.client1 && obj?.client1?._id === id) {
      if (obj?.admin1) return obj?.admin1;
      else if (obj?.admin2) return obj?.admin2;
      else if (obj?.freelancer1) return obj?.freelancer1;
      else if (obj?.freelancer2) return obj?.freelancer2;
      else if (obj?.client2) return obj?.client2;
    } else if (obj?.client2 && obj?.client2?._id === id) {
      if (obj?.admin1) return obj?.admin1;
      else if (obj?.admin2) return obj?.admin2;
      else if (obj?.freelancer1) return obj?.freelancer1;
      else if (obj?.freelancer2) return obj?.freelancer2;
      else if (obj?.client1) return obj?.client1;
    }
  };

  function getMessages(obj, id) {
    if (obj?.sender_admin && obj?.sender_admin?._id === id) {
      if (obj?.receiver_admin) return obj?.receiver_admin;
      else if (obj?.sender_freelancer) return obj?.sender_freelancer;
      else if (obj?.receiver_freelancer) return obj?.receiver_freelancer;
      else if (obj?.sender_client) return obj?.sender_client;
      else if (obj?.receiver_client) return obj?.receiver_client;
    } else if (obj?.receiver_admin && obj?.receiver_admin?._id === id) {
      if (obj?.sender_admin) return obj?.sender_admin;
      else if (obj?.sender_freelancer) return obj?.sender_freelancer;
      else if (obj?.receiver_freelancer) return obj?.receiver_freelancer;
      else if (obj?.sender_client) return obj?.sender_client;
      else if (obj?.receiver_client) return obj?.receiver_client;
    } else if (obj?.sender_freelancer && obj?.sender_freelancer?._id === id) {
      if (obj?.sender_admin) return obj?.sender_admin;
      else if (obj?.receiver_admin) return obj?.receiver_admin;
      else if (obj?.receiver_freelancer) return obj?.receiver_freelancer;
      else if (obj?.sender_client) return obj?.sender_client;
      else if (obj?.receiver_client) return obj?.receiver_client;
    } else if (
      obj?.receiver_freelancer &&
      obj?.receiver_freelancer?._id === id
    ) {
      if (obj?.sender_admin) return obj?.sender_admin;
      else if (obj?.receiver_admin) return obj?.receiver_admin;
      else if (obj?.sender_freelancer) return obj?.sender_freelancer;
      else if (obj?.sender_client) return obj?.sender_client;
      else if (obj?.receiver_client) return obj?.receiver_client;
    } else if (obj?.sender_client && obj?.sender_client?._id === id) {
      if (obj?.sender_admin) return obj?.sender_admin;
      else if (obj?.receiver_admin) return obj?.receiver_admin;
      else if (obj?.sender_freelancer) return obj?.sender_freelancer;
      else if (obj?.receiver_freelancer) return obj?.receiver_freelancer;
      else if (obj?.receiver_client) return obj?.receiver_client;
    } else if (obj?.receiver_client && obj?.receiver_client?._id === id) {
      if (obj?.sender_admin) return obj?.sender_admin;
      else if (obj?.receiver_admin) return obj?.receiver_admin;
      else if (obj?.sender_freelancer) return obj?.sender_freelancer;
      else if (obj?.receiver_freelancer) return obj?.receiver_freelancer;
      else if (obj?.sender_client) return obj?.sender_client;
    }
  }

  const convertToCurrentTime = (createdAt) => {
    const date = new Date(createdAt);
    return date.toLocaleTimeString();
  };

  useEffect(() => {
    if (messages.length > 0 && messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    // Get the list of conversations from the server
    axios
      .get(`http://localhost:5000/conversations?participants[]=${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setConversations(response.data);
      });
  }, [id]);

  useEffect(() => {
    // Connect to socket.io server
    /* const socket = io(); */
    const socket = io.connect("http://localhost:5000");

    // Subscribe to messages for the selected conversation
    if (selectedConversation) {
      socket.on(selectedConversation._id, (message) => {
        setMessages([...messages, message]);
      });
    }

    return () => {
      // Unsubscribe from messages when the component unmounts
      if (selectedConversation) {
        socket.off(selectedConversation._id);
      }
    };
  }, [selectedConversation, messages]);

  // Select a conversation
  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);

    // Get the messages for the selected conversation
    axios
      .get(`http://localhost:5000/conversations/${conversation._id}/messages`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setMessages(response.data);
      });
  };

  // Send a message
  const handleSendMessage = () => {
    axios
      .post(
        `http://localhost:5000/conversations/${selectedConversation._id}/messages`,
        {
          sender_freelancer: id,
          sender_client: id,
          sender_admin: id,
          receiver_freelancer: getObject(selectedConversation, id)?._id,
          receiver_client: getObject(selectedConversation, id)?._id,
          receiver_admin: getObject(selectedConversation, id)?._id,
          content: newMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setMessages([...messages, response.data]);
        setNewMessage("");
        handleSelectConversation(selectedConversation);
      });
  };

  const dateConverter = (createdAt) => {
    const userCreatedDate = new Date(createdAt);
    const currentDate = new Date();

    const timeDifference = currentDate - userCreatedDate;

    const minutes = Math.floor(timeDifference / 1000 / 60);

    if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else {
      const hours = Math.floor(timeDifference / 1000 / 60 / 60);

      if (hours < 24) {
        return `${hours} hours ago`;
      } else {
        const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
        return `${days} days ago`;
      }
    }
  };

  return (
    <div>
      <div
        className="grid grid-cols-3 min-w-full border rounded my-8"
        style={{ minHeight: "80vh" }}
      >
        <div className="col-span-3 sm:col-span-1 bg-white border-r border-gray-300">
          <ul className="overflow-auto" style={{ height: 500 }}>
            <h2 className="ml-2 mb-2 text-gray-600 text-lg my-2">Chats</h2>
            {conversations &&
              conversations?.map((conversation, index) => (
                <li key={index}>
                  <div
                    className="hover:bg-gray-100 border-b border-gray-300 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                    onClick={() => handleSelectConversation(conversation)}
                  >
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={
                        getObject(conversation, id)?.photo
                          ? getObject(conversation, id)?.photo
                          : profile
                      }
                      alt="username"
                    />
                    <div className="w-full pb-2">
                      <div className="flex justify-between">
                        <span className="block ml-2 font-semibold text-base text-gray-600 ">
                          <span>
                            {getObject(conversation, id)?.firstName
                              ? getObject(conversation, id)?.firstName
                              : getObject(conversation, id)?.username}{" "}
                            {""}
                          </span>
                          <span>{getObject(conversation, id)?.lastName}</span>
                        </span>
                        <span className="block ml-2 text-sm text-gray-600">
                          {dateConverter(conversation?.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        {selectedConversation && (
          <div className="col-span-3 sm:col-span-2 -mt-48 sm:-mt-0  bg-white">
            <div className="w-full">
              {messages?.length === 0 ? (
                <div className="flex justify-center w-full mt-32">
                  <EmptyState message="You don't have any messages in this Conversation" />
                </div>
              ) : (
                <div className="flex items-center border-b border-gray-300 pl-3 py-3">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={
                      getMessages(messages[0], id)?.photo
                        ? getMessages(messages[0], id)?.photo
                        : profile
                    }
                    alt="username"
                  />
                  <span className="block ml-2 font-bold text-base text-gray-600">
                    <span>
                      {getMessages(messages[0], id)?.firstName
                        ? getMessages(messages[0], id)?.firstName
                        : getMessages(messages[0], id)?.username}{" "}
                    </span>
                    <span>{getMessages(messages[0], id)?.lastName} </span>
                  </span>
                  <span className="block ml-2 font-bold text-base text-gray-600"></span>
                </div>
              )}
              <div
                className="w-full overflow-y-auto p-10 relative"
                style={{ height: 700 }}
                ref={messageContainerRef}
              >
                <ul>
                  {messages &&
                    messages?.map((message, index) => (
                      <li key={index} className="clearfix2">
                        <div
                          className={
                            id === message?.sender_admin?._id ||
                            id === message?.sender_freelancer?._id ||
                            id === message?.sender_client?._id
                              ? "w-auto flex justify-end "
                              : "w-full flex justify-start"
                          }
                        >
                          <div
                            className={
                              id === message?.sender_admin?._id ||
                              id === message?.sender_freelancer?._id ||
                              id === message?.sender_client?._id
                                ? "bg-teal-100 rounded px-5 py-2 my-2 text-teal-800 relative "
                                : "bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative"
                            }
                            style={{ maxWidth: 300 }}
                          >
                            <span className="block ">{message?.content}</span>
                            <span className="block text-xs text-right ">
                              {dateConverter(message?.createdAt)}
                            </span>
                            <span className="block text-xs text-right ">
                              {convertToCurrentTime(message?.createdAt)}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="w-full py-3 px-3 flex items-center justify-between border-t border-gray-300">
                <input
                  className=" py-2 mx-3 pl-5 block w-full bg-white border rounded-md shadow-md border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-teal-500 block w-full text-sm focus:ring-1 "
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  aria-placeholder="Type your message"
                  placeholder="Type your message"
                />
                <button
                  className="outline-none focus:outline-none"
                  onClick={handleSendMessage}
                >
                  <svg
                    className="text-gray-400 h-7 w-7 origin-center transform rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="teal"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientChatPage;
