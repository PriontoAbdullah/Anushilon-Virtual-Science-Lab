import React from 'react';

function Comment(props) {
  return (
    <div className="py-3 px-1 flex justify-between items-center">
      <p className="font-body text-base text-gray-900 font-medium tracking-wide">
        <strong className="font-body text-base text-gray-800 font-semibold tracking-wide">
          {props.username} :{' '}
        </strong>
        {props.text}
      </p>
      <p className="flex flex-end text-xs text-gray-700 font-body tracking-wide">
        {props.date}
      </p>
    </div>
  );
}

export default Comment;
