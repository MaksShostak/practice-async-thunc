import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from 'redux/slice';
export const Cart = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const state = useSelector(store => store.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          setModalIsOpen(!modalIsOpen);
        }}
      >
        Cart
      </button>
      {modalIsOpen && (
        <div>
          <ul>
            {state?.map(({ id, name, price, description }) => (
              <li key={id}>
                <h1>{name}</h1>
                <p>price: {price}</p>
                <p>{description}</p>
                <button
                  onClick={() => {
                    dispatch(removeFromCart(id));
                  }}
                >
                  delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
