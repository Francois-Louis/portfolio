import { TOGGLE_BTN, TOGGLE_MODAL, TO_SHOW } from "../actions/actions";

const initialState = {
  Btn: 'projects',
  Modal: false,
  Id: null,
  Projects: [{
    id: 1,
    name: 'Boules de poil',
    slug:'boules-de-poil',
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
      date: 'Juillet 2022',
      technos: 'Wordpress',
      link: 'https://atelier-legoff.fr',
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
  Xp: [{
    id: 1,
    title: 'Développeur web fullstack php',
    type: 'Formation',
    description: 'Formation',
    organization: 'École O\'clock',
    link: 'https://oclock.io/',
  },
    {
      id: 2,
      title: 'Développeur web React',
      type: 'Projet de fin d\'études',
      description: 'Formation',
      organization: 'École O\'clock',
      link: 'https://oclock.io/',
    },
    {
      id: 3,
      title: 'MOOC SecNumAcadémie',
      type: 'Certification',
      description: 'Formation',
      organization: 'ANSSI',
      link: 'https://secnumacademie.gouv.fr/',
    },
    {
      id: 4,
      title: 'Maîtrise de la qualité en projet Web',
      type: 'Certification',
      description: 'Formation',
      organization: 'Opquast',
      link: 'https://www.opquast.com/',
    },
    {
      id: 5,
      title: 'Développeur web PHP/React',
      type: 'Freelance',
      description: 'Formation',
      organization: '',
      link: '',
    }],
};

const mainReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TOGGLE_BTN':
      return {
        ...state,
        Btn: action.payload,
      };
    case 'TOGGLE_MODAL':
      return {
        ...state,
        Modal: !state.Modal,
      };
    case 'TO_SHOW':
      return {
        ...state,
        Id: action.payload,
      }
    default:
      return state;
  }
};

export default mainReducer;
