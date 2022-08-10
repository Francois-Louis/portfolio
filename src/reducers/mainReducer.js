import { TOGGLE_BTN, ON_PROJECTS, TOGGLE_MODAL } from "../actions/actions";

const initialState = {
  ProjectBtn: true,
  Modal: false,
  Projects: [{
    id: 1,
    name: 'Boule de poil',
    slug:'boule-de-poil',
    description: 'Boule de poil',
    date: '2020-01-01',
    technos: 'Symfony & React',
    link: 'bdp.fl-toussaint.fr',
    thumbnail: 'bdp/bdp.jpeg',
    images: [
      {
        id: 1,
        src: 'legoff/legoff1.jpg',
      },
      {
        id: 2,
        src: 'https://via.placeholder.com/150',
      },
    ],
  },
    {
      id: 2,
      name: 'Atelier Legoff',
      slug:'atelier-legoff',
      description: 'Boule de poil',
      date: '2020-01-01',
      technos: 'Wordpress',
      link: 'atelier-legoff.fr',
      thumbnail: 'legoff/legoff.jpg',
      images: [
        {
          id: 1,
          src: 'legoff1.jpg',
        },
        {
          id: 2,
          src: 'https://via.placeholder.com/150',
        },
      ],
    }
  ],
  XP: [],
};

const mainReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TOGGLE_BTN':
      return {
        ...state,
        ProjectBtn: !state.ProjectBtn,
      };
      case 'ON_PROJECTS':
        return {
          ...state,
          ProjectBtn: action.payload,
        };
    case 'TOGGLE_MODAL':
      return {
        ...state,
        Modal: !state.Modal,
      }
    default:
      return state;
  }
};

export default mainReducer;
