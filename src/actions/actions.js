export const TOGGLE_BTN = 'TOGGLE_BTN';

export const toggleBtn = (bool: boolean) => ({
  type: TOGGLE_BTN,
  payload: bool,
});
