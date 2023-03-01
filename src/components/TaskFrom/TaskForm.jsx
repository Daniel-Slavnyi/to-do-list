import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getId } from 'redux/tasks/tasks-selector';
import { addNewTask, makeId } from 'redux/tasks/tasks-slice';
import { BtnEl, FormEl, LabelEl, SpanEl } from './TaskForm.styled';

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
    setTitle('');
    setDescr('');
  };

  return (
    <FormEl>
      <LabelEl>
        <span>Title:</span>
        <input
          style={{ borderColor: massegeTitle ? 'red' : 'black' }}
          type="text"
          name="title"
          required
          placeholder="Enter title"
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
        {massegeTitle && <SpanEl>This field is empty</SpanEl>}
      </LabelEl>
      <LabelEl>
        <span>Description:</span>
        <input
          style={{ borderColor: massegeDescr ? 'red' : 'black' }}
          type="text"
          name="description"
          required
          placeholder="Enter description"
          value={descr}
          onChange={e => {
            setDescr(e.target.value);
          }}
        />
        {massegeDescr && <SpanEl>This field is empty</SpanEl>}
      </LabelEl>
      <BtnEl type="button" onClick={handleClick}>
        Create
      </BtnEl>
    </FormEl>
  );
}
