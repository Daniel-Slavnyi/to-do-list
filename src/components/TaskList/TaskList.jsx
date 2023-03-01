import TaskItem from 'components/TaskItem/TaskItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { getTasks } from 'redux/tasks/tasks-selector';
import { HeadItem, HeadWraper, UlEl } from './TaskList.styled';

export default function TaskList() {
  const getItems = useSelector(getTasks);

  return (
    <>
      <HeadWraper>
        <HeadItem>Id</HeadItem>
        <HeadItem>Title</HeadItem>
        <HeadItem>Description</HeadItem>
        <HeadItem>Status</HeadItem>
        <HeadItem>Info</HeadItem>
      </HeadWraper>
      <UlEl>
        {getItems.map(item => (
          <TaskItem item={item} key={item.id} />
        ))}
      </UlEl>
    </>
  );
}
