import React from 'react';
import { useSelector } from 'react-redux';
import './Conversession.css';

const ChatMessage = (props) => {
  const { auth } = useSelector((state) => state);

  const { text, email, avatar } = props.message;

  return (
    <section>
      <div className="flex-1 justify-between flex flex-col">
        <div
          id="messages"
          className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
        >
          <div className="chat-message">
            <div
              className={`flex items-end ${
                email === auth.user.email ? 'justify-end' : ''
              } `}
            >
              <div
                className={`flex flex-col space-y-2 text-base max-w-xs mx-2 ${
                  email === auth.user.email
                    ? 'order-1 items-end'
                    : 'order-2 items-start'
                } `}
              >
                <div>
                  <span
                    className={`px-4 py-2 rounded-lg inline-block ${
                      email === auth.user.email
                        ? 'rounded-br-none bg-blue-600 text-white'
                        : 'rounded-bl-none bg-gray-300 text-gray-600'
                    }`}
                  >
                    {text}
                  </span>
                </div>
              </div>
              <img
                src={
                  avatar ||
                  'https://api.adorable.io/avatars/23/abott@adorable.png'
                }
                alt=""
                className={`w-8 h-8 rounded-full ${
                  email === auth.user.email ? 'order-2' : 'order-1'
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatMessage;
