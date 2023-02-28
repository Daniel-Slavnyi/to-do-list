import React, { useEffect } from 'react';
import { Backdrop, ModalWrapper } from './Modal.styled';

export const Modal = ({
  tusk,
  setIsOpenModal,
  handleChange,
  closeModalByClick,
}) => {
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

  return (
    <Backdrop>
      <ModalWrapper>
        <h1>{tusk.title}</h1>
        <p>Description:</p>
        <p>{tusk.description}</p>
        <button type="button" onClick={closeModalByClick}>
          Close Modal
        </button>
        <input
          type="checkbox"
          name={tusk.id}
          checked={tusk.isDone}
          onChange={handleChange}
        />
      </ModalWrapper>
    </Backdrop>
  );
};
