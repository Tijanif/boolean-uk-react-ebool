import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function PageNotFound() {
  const history = useHistory();
  useEffect(() => {
    const timeOutId = setTimeout(() => history.push('/'), 1000);
    return () => clearTimeout(timeOutId);
  }, []);

  return (
    <h1>
      404 - Page not found{' '}
      <span role='img' aria-label='ghost emoji'>
        👻
      </span>
    </h1>
  );
}

export default PageNotFound;
