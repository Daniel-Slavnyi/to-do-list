import { Modal } from 'components/Modal/Modal';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from 'redux/tasks/tasks-selector';
import { setDoneTask } from 'redux/tasks/tasks-slice';

export default function TaskList() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const getItems = useSelector(getTasks);

  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setDoneTask(e.target.name));
  };

  const closeModalByClick = () => {
    console.log('isOpenModal =>', isOpenModal);
    setIsOpenModal(item => !item);
  };

  return (
    <>
      <ul>
        {getItems.map(item => (
          <li
            key={item.id}
            onClick={() => {
              setIsOpenModal(true);
            }}
          >
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <input
              type="checkbox"
              name={item.id}
              checked={item.isDone}
              onChange={handleChange}
            />
            {isOpenModal && (
              <Modal
                tusk={item}
                setIsOpenModal={setIsOpenModal}
                closeModalByClick={closeModalByClick}
                handleChange={handleChange}
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
