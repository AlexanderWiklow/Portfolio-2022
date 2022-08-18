import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.jpg'
import IMG8 from '../../assets/portfolio8.jpg'
import IMG9 from '../../assets/portfolio9.jpg'
import IMG10 from '../../assets/portfolio10.jpg'
import IMG11 from '../../assets/portfolio11.jpg'
import IMG12 from '../../assets/portfolio12.jpg'
import IMG13 from '../../assets/portfolio13.jpg'
import IMG14 from '../../assets/portfolio14.jpg'
import IMG15 from '../../assets/portfolio15.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
    {
    id: 7,
    image: IMG7,
    title: 'Weather API website',
    github: 'https://github.com/AlexanderWiklow/Weather-API',
    demo: 'https://alexanderwiklow.github.io/Weather-API/'
  },
    {
    id: 8,
    image: IMG8,
    title: 'Bootstrap 4 Simple Landing Page',
    github: 'https://github.com/AlexanderWiklow/React-Landing-Page',
    demo: 'https://alexanderwiklow.github.io/React-Landing-Page/'
    },
    {
    id: 9,
    image: IMG9,
    title: 'QR-Code Component',
    github: 'https://github.com/AlexanderWiklow/QR-code-component',
    demo: 'https://alexanderwiklow.github.io/QR-code-component/'
    },
    {
    id: 10,
    image: IMG10,
    title: 'NFT-Card Component',
    github: 'https://github.com/AlexanderWiklow/nft-card-component',
    demo: 'https://alexanderwiklow.github.io/nft-card-component/'
    },
    {
    id: 11,
    image: IMG11,
    title: 'Order Summary Component',
    github: 'https://github.com/AlexanderWiklow/order-summary-component',
    demo: 'https://alexanderwiklow.github.io/order-summary-component/'
    },
    {
    id: 12,
    image: IMG12,
    title: '3-Column Preview Card Component',
    github: 'https://github.com/AlexanderWiklow/3-Column-preview-card-component',
    demo: 'https://alexanderwiklow.github.io/3-Column-preview-card-component/'
    },
    {
    id: 13,
    image: IMG13,
    title: 'Article Preview Component',
    github: 'https://github.com/AlexanderWiklow/article-preview-component',
    demo: 'https://alexanderwiklow.github.io/article-preview-component/'
    },
    {
    id: 14,
    image: IMG14,
    title: 'Intro Component',
    github: 'https://github.com/AlexanderWiklow/Intro-Component',
    demo: 'https://alexanderwiklow.github.io/Intro-Component/'
    },
    {
    id: 15,
    image: IMG15,
    title: 'Landing Page',
    github: 'https://github.com/AlexanderWiklow/The-Odin-Project-Landing-Page',
    demo: 'https://alexanderwiklow.github.io/The-Odin-Project-Landing-Page/'
    }
    
    
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio