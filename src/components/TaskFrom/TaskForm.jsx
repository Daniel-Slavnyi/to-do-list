import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getId } from 'redux/tasks/tasks-selector';
import { addNewTask, makeId } from 'redux/tasks/tasks-slice';
import { FormEl, LabelEl } from './TaskForm.styled';

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
    setMassegeTitle(false);

    if (descr === '') {
      setMassegeDescr(true);
      return;
    }
    setMassegeDescr(false);

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
    <FormEl>
      <LabelEl>
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
      </LabelEl>
      <LabelEl>
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
      </LabelEl>
      <button type="button" onClick={handleClick}>
        Create
      </button>
    </FormEl>
  );
}
