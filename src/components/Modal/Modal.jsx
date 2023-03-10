import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDoneTask } from 'redux/tasks/tasks-slice';
import { Backdrop, ModalWrapper } from './Modal.styled';

export const Modal = ({
  tusk,
  setIsOpenModal,

  closeModalByClick,
}) => {
  const [infoOfTask] = useState(tusk);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        setIsOpenModal(false);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = e => {
    dispatch(setDoneTask(e.target.name));
  };
  return (
    <Backdrop>
      <ModalWrapper>
        <p>{infoOfTask.title}</p>
        <p>Description:</p>
        <p>{infoOfTask.description}</p>
        <div>
          <span>Status:</span>
          <input
            type="checkbox"
            name={infoOfTask.id}
            checked={tusk.isDone}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={closeModalByClick}>
          Close Modal
        </button>
      </ModalWrapper>
    </Backdrop>
  );
};
