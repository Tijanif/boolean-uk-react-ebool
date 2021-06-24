import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Categories = () => {
  const randColour = () =>
    ['green', 'red', 'blue', 'yellow'][Math.floor(Math.random() * 4)];

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/categories')
      .then((response) => response.json())
      .then((categories) => setCategories(categories));
  }, []);

  console.log(categories);

  const { categoryId } = useParams();
  return (
    <section class='categories-container main-wrapper'>
      <ul class='categories-container__list'>
        {categories.map((category, index) => {
          return (
            <li Key={`${index}-${category}`}>
              <Link
                Key={index}
                style={{ ['--border-colour']: `var(--${randColour()})` }}
                to={`/categories/${category.id}`}
              >
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Categories;
