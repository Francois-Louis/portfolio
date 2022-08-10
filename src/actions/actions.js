export const TOGGLE_BTN = 'TOGGLE_BTN';
export const ON_PROJECTS = 'ON_PROJECTS';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const toggleBtn = () => ({
  type: TOGGLE_BTN,
});

export const onProjects = (bool) => ({
  type: ON_PROJECTS,
  payload: bool,
});

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});



