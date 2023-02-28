import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from 'redux/tasks/tasks-selector';
import { setDoneTask } from 'redux/tasks/tasks-slice';

export default function TaskList() {
  const getItems = useSelector(getTasks);

  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setDoneTask(e.target.name));
  };
  return (
    <>
      <ul>
        {getItems.map(item => (
          <li key={item.id}>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <input
              type="checkbox"
              name={item.id}
              checked={item.isDone}
              onChange={handleChange}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
