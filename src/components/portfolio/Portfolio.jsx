import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Travelia',
    github: 'https://github.com/aforasheed/Travelia',
    demo: 'https://travelia-aforasheed.netlify.app'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Cloths Shopping Cart',
    github: 'https://github.com/aforasheed/shopping-Cart',
    demo: 'https://cloths-shopping-cart.netlify.app'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Ecommerce',
    github: 'https://github.com/aforasheed/caraEcommerce',
    demo: 'https://afo-ecommerce.netlify.app'
  },
  {
    id: 4,
    image: IMG4,
    title: 'bestofburnaboy',
    github: 'https://github.com/aforasheed/music-player',
    demo: 'https://bestofburnaboy.netlify.app'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Meal Recipe Finder',
    github: 'https://github.com/aforasheed/meal-recipe',
    demo: 'https://aforasheed-food-recipe-finder.netlify.app'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Netflix',
    github: 'https://github.com/aforasheed/netflixhomepage',
    demo: 'https://aforasheed-netflix-home-page.netlify.app'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return (
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href={github} target="_blank" className="btn">
              Github
            </a>
            <a
              href={demo}
              target="_blank"
              className="btn btn-primary"
            >
              Demo
            </a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
