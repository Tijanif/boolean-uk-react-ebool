const Categories = () => {
  const randColour = () =>
    ['green', 'red', 'blue', 'yellow'][Math.floor(Math.random() * 4)];
  return (
    <section class='categories-container main-wrapper'>
      <ul class='categories-container__list'>
        {/* <!-- Single category --> */}
        <li>
          {/* <!-- Use the Link component from React Router to create
              the anchor tags
        --> */}

          <a
            style={{ ['--border-colour']: `var(--${randColour()})` }}
            href='/categories/1'
          >
            electronics
          </a>
        </li>
        <li>
          <a
            style={{ ['--border-colour']: `var(--${randColour()})` }}
            href='/categories/2'
          >
            jewelery
          </a>
        </li>
        <li>
          <a
            style={{ ['--border-colour']: `var(--${randColour()})` }}
            href='/categories/3'
          >
            men's clothing
          </a>
        </li>
        <li>
          <a
            style={{ ['--border-colour']: `var(--${randColour()})` }}
            href='/categories/4'
          >
            women's clothing
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Categories;
