import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getId } from 'redux/tasks/tasks-selector';
import { addNewTask, makeId } from 'redux/tasks/tasks-slice';

export default function TaskForm() {
  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');
  const [massegeTitle, setMassegeTitle] = useState(false);
  const [massegeDescr, setMassegeDescr] = useState(false);

  const dispatch = useDispatch();
  const isId = useSelector(getId);

  const handleClick = () => {
    if (title === '') {
      setMassegeTitle(true);
      return;
    }

    if (descr === '') {
      setMassegeDescr(true);
      return;
    }

    dispatch(makeId(1));
    const objTask = {
      id: isId,
      title,
      description: descr,
      isDone: false,
    };

    dispatch(addNewTask(objTask));
  };

  return (
    <form>
      <label>
        <span>Title:</span>
        <input
          type="text"
          name="title"
          required
          placeholder="Enter title"
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
        {massegeTitle && <span>This field is empty</span>}
      </label>
      <label>
        <span>Description:</span>
        <input
          type="text"
          name="description"
          required
          placeholder="Enter description"
          value={descr}
          onChange={e => {
            setDescr(e.target.value);
          }}
        />
        {massegeDescr && <span>This field is empty</span>}
      </label>
      <button type="button" onClick={handleClick}>
        Create
      </button>
    </form>
  );
}
