import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Modal } from 'components/Modal/Modal';
import { setDoneTask } from 'redux/tasks/tasks-slice';

import { BtnEl, LiEl, ParEl } from './TaskItem.styled';

export default function TaskItem({ item }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setDoneTask(e.target.name));
  };

  const closeModalByClick = () => {
    console.log('isOpenModal =>', isOpenModal);
    setIsOpenModal(item => !item);
  };
  return (
    <LiEl>
      <ParEl>{item.id}</ParEl>
      <ParEl>{item.title}</ParEl>
      <ParEl>{item.description}</ParEl>
      <input
        type="checkbox"
        name={item.id}
        checked={item.isDone}
        onChange={handleChange}
      />
      <BtnEl
        type="button"
        onClick={() => {
          setIsOpenModal(true);
        }}
      >
        Open
      </BtnEl>
      {isOpenModal && (
        <Modal
          tusk={item}
          setIsOpenModal={setIsOpenModal}
          closeModalByClick={closeModalByClick}
          handleChange={handleChange}
        />
      )}
    </LiEl>
  );
}
