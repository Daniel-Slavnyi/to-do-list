import TaskItem from 'components/TaskItem/TaskItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { getTasks } from 'redux/tasks/tasks-selector';

export default function TaskList() {
  const getItems = useSelector(getTasks);

  return (
    <>
      <ul>
        {getItems.map(item => (
          <TaskItem item={item} key={item.id} />
        ))}
      </ul>
    </>
  );
}
