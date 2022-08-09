import { TOGGLE_BTN } from "../actions/actions";

interface initialState {
    ProjectBtn: boolean;
    Projects: Array<any>;
    Skills: Array<any>;
    Contact: Array<any>;
}
const initialState = {
  ProjectBtn: true,
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
  Skills: [],
  XP: [],
};

const mainReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TOGGLE_BTN':
      return {
        ...state,
        ProjectBtn: (state, action: PayloadAction<boolean>) => {
          state.value += action.payload;
        }
      };
    default:
      return state;
  }
};

export default mainReducer;
