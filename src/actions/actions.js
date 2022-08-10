export const TOGGLE_BTN = 'TOGGLE_BTN';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const TO_SHOW = 'TO_SHOW';

export const toggleBtn = (slug) => ({
  type: TOGGLE_BTN,
  payload: slug,
});

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});

export const toShow = (slug) => ({
  type: TO_SHOW,
  payload: slug,
});



