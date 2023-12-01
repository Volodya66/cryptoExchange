import React, { useState } from 'react';



export const useOverlayOne = () => {
  const [stateOverlayOne, setIsOpen] = useState(false);
  const toggleOne = () => setIsOpen(stateOverlayOne => !stateOverlayOne);

  return { stateOverlayOne, toggleOne };
};

export const useOverlayTwo = () => {
  const [stateOverlayTwo, setIsOpen] = useState(false);
  const toggleTwo = () => setIsOpen(stateOverlayTwo => !stateOverlayTwo);

  return { stateOverlayTwo, toggleTwo };
};

export const useOverlayThree = () => {
  const [stateOverlayThree, setIsOpen] = useState(false);
  const toggleThree = () => setIsOpen(stateOverlayThree => !stateOverlayThree);

  return { stateOverlayThree, toggleThree };
};

export const useOverlayFour = () => {
  const [stateOverlayFour, setIsOpen] = useState(false);
  const toggleFour = () => setIsOpen(stateOverlayFour => !stateOverlayFour);

  return { stateOverlayFour, toggleFour };
};