import { TOGGLE_BTN, TOGGLE_MODAL, TO_SHOW } from "../actions/actions";

const initialState = {
  Btn: 'projects',
  Modal: false,
  Id: null,
  Projects: [{
    id: 1,
    name: 'Boules de poil',
    slug:'boules-de-poil',
    description: 'Projet de fin d\'études en équipe. Site fictif d\'adoption d\'animaux en refuge.',
    date: 'Avril 2022',
    technos: 'Symfony & React',
    link: 'https://bdp.fl-toussaint.fr',
    thumbnail: 'boules-de-poil/bdp.jpeg',
  },
    {
      id: 2,
      name: 'Atelier Legoff',
      slug:'atelier-legoff',
      description: 'Site vitrine pour mon activité parallèle de coutellerie. ',
      date: 'Juillet 2022',
      technos: 'Wordpress',
      link: 'https://atelier-legoff.fr',
      thumbnail: 'atelier-legoff/legoff.jpg',
    }
  ],
  Xp: [{
    id: 1,
    title: 'Développeur web fullstack php',
    type: 'Formation',
    description: 'Préparation au passage du Titre Professionnel Développeur Web et Web Mobile. 5 mois de formation intensive en téléprésentiel. Acquisition des rudiments du development Web : HTML, CSS, Javascript, PHP, MySQL, Git, ... Spécialisation au framework React.',
    organization: 'École O\'clock',
    link: 'https://oclock.io/',
  },
    {
      id: 2,
      title: 'Développeur web React',
      type: 'Projet de fin d\'études',
      description: 'Réalisation d\'un projet en équipe sur 1 mois. De la conception à la mise en production.',
      organization: 'École O\'clock',
      link: 'https://oclock.io/',
    },
    {
      id: 3,
      title: 'MOOC SecNumAcadémie',
      type: 'Certification',
      description: 'Sensibilisation aux notions de cyber-sécurité.',
      organization: 'ANSSI',
      link: 'https://secnumacademie.gouv.fr/',
    },
    {
      id: 4,
      title: 'Maîtrise de la qualité en projet Web',
      type: 'Certification',
      description: 'Sensibilisation aux notions de qualité Web.',
      organization: 'Opquast',
      link: 'https://www.opquast.com/',
    },
    {
      id: 5,
      title: 'Développeur web PHP/React',
      type: 'Freelance',
      description: 'Mise à mon compte en tant que développeur web indépendant. Oeuvrant sur différentes missions au gré de mes clients.',
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
