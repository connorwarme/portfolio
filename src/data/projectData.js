import proHome from "../images/gallery/screenshots/proHome.png"
import flHome from "../images/gallery/screenshots/fl-home.png"
import battleshipHome from "../images/gallery/screenshots/battleship-home.png"
import shoppingCart from "../images/gallery/screenshots/shopping-cart.png"
import astroIcon from "../images/icons/astro.svg"
import reactIcon from "../images/icons/react.svg"
import markdownIcon from "../images/icons/markdown.svg"
import javascriptIcon from "../images/icons/javascript.svg"
import cssIcon from "../images/icons/css3.svg"
import nodeIcon from "../images/icons/node.svg"
import expressIcon from "../images/icons/express.svg"
import mongoIcon from "../images/icons/mongodb.svg"
import jestIcon from "../images/icons/jest.svg"
import webpackIcon from "../images/icons/webpack.svg"
import prettierIcon from "../images/icons/prettier.svg"
import { v4 as uuidv4 } from 'uuid'

const projectData = [
  {
    id: uuidv4(),
    title: 'Amity Warme',
    img: {
      src: proHome,
      alt: 'Amity home page',
    },
    url: 'https://amitywarme.com',
    repo_url: 'https://github.com/connorwarme/pro-site',
    points: ['Prioritize performance and SEO', 'Photo gallery, blog, contact & more', 'Responsive design & cross-browser compatibility'],
    summary: 'Pro rock climber and registered dietitian',
    tools: [
      {
        title: 'Astro',
        img: {
          src: astroIcon,
          alt: 'Astro icon',
        },
        mini: true,
      },
      {
        title: 'Markdown',
        img: {
          src: markdownIcon,
          alt: 'Markdown icon',
        },
        mini: true,
      },
      {
        title: 'JavaScript',
        img: {
          src: javascriptIcon,
          alt: 'JavaScript icon',
        },
        mini: true,
      },
      {
        title: 'CSS3',
        img: {
          src: cssIcon,
          alt: 'CSS3 icon',
        },
        mini: true,
      },
    ]
  },
  {
    id: uuidv4(),
    title: 'Fan Lair',
    img: {
      src: flHome,
      alt: 'Fan Lair home page',
    },
    url: 'https://connorwarme.github.io/rop-lair/login',
    repo_url: 'https://github.com/connorwarme/rop-lair',
    points: ['Full stack (MERN) social media app', 'Authentication w/ PassportJS and JWT', 'Responsive design & cross-browser compatibility'],
    summary: 'Social media app with The Rings of Power theme',
    tools: [
      {
        title: 'React',
        img: {
          src: reactIcon,
          alt: 'React icon',
        },
        mini: true,
      },
      {
        title: 'NodeJS',
        img: {
          src: nodeIcon,
          alt: 'Node icon',
        },
        mini: true,
      },
      {
        title: 'Express',
        img: {
          src: expressIcon,
          alt: 'Express icon',
        },
        mini: true,
      },
      {
        title: 'MongoDB',
        img: {
          src: mongoIcon,
          alt: 'MongoDB icon',
        },
        mini: true,
      },
      {
        title: 'JavaScript',
        img: {
          src: javascriptIcon,
          alt: 'JavaScript icon',
        },
        mini: true,
      },
    ]
  },
  {
    id: uuidv4(),
    title: 'Battleship',
    img: {
      src: battleshipHome,
      alt: 'Battleship home page',
    },
    url: 'https://connorwarme.github.io/battleship',
    repo_url: 'https://github.com/connorwarme/battleship',
    points: ['Implement Test Driven Development', 'Battle a simple AI or smart AI that considers proximity and probability'],
    summary: 'A browser-playable version of the classic game',
    tools: [
      {
        title: 'JavaScript',
        img: {
          src: javascriptIcon,
          alt: 'JavaScript icon',
        },
        mini: true,
      },
      {
        title: 'Jest',
        img: {
          src: jestIcon,
          alt: 'Jest icon',
        },
        mini: true,
      },
      {
        title: 'CSS3',
        img: {
          src: cssIcon,
          alt: 'CSS3 icon',
        },
        mini: true,
      },
      {
        title: 'Webpack',
        img: {
          src: webpackIcon,
          alt: 'Webpack icon',
        },
        mini: true,
      },
      {
        title: 'Prettier',
        img: {
          src: prettierIcon,
          alt: 'Prettier icon',
        },
        mini: true,
      },
    ]
  },
  {
    id: uuidv4(),
    title: 'Shopping Cart',
    img: {
      src: shoppingCart,
      alt: 'Shopping Cart page',
    },
    url: 'https://connorwarme.github.io/shopping-cart',
    repo_url: 'https://github.com/connorwarme/shopping-cart',
    points: ['Implement Test Driven Development', 'State management for cart functionality'],
    summary: 'An e-commerce site created with React',
    tools: [
      {
        title: 'React',
        img: {
          src: reactIcon,
          alt: 'React icon',
        },
        mini: true,
      },
      {
        title: 'Jest',
        img: {
          src: jestIcon,
          alt: 'Jest icon',
        },
        mini: true,
      },
      {
        title: 'CSS3',
        img: {
          src: cssIcon,
          alt: 'CSS3 icon',
        },
        mini: true,
      },
      {
        title: 'Prettier',
        img: {
          src: prettierIcon,
          alt: 'Prettier icon',
        },
        mini: true,
      },
    ]
  }
]

export default projectData