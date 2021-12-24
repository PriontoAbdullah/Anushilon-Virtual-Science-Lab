import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
  post__comments: {
    padding: '10px',
  },
}));

function Comment(props) {
  const classes = useStyles();

  return (
    <div className={classes.post__comments}>
      <p className="font-body text-base text-gray-900 font-medium tracking-wide">
        <strong className="font-body text-base text-gray-800 font-semibold tracking-wide">
          {props.username} :{' '}
        </strong>
        {props.text}
      </p>
    </div>
  );
}

export default Comment;
