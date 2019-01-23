// @flow
import React, { type Node } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import './SideTodoItem.scss';
import { type Todo } from 'lib/data/todo';
import { ListItem, ListItemText } from '@material-ui/core';

type Props = {
  todo : Todo;
};

const SideTodoItem = ({ todo }: Props) => {
  return (
    
    <ListItem button key={todo.id}>
      <Link to={`/detail/${todo.id}`}>
        <ListItemText primary={todo.name} />
        <ListItemText secondary={todo.due} />
      </Link>
    </ListItem>

  );
};


export default SideTodoItem;