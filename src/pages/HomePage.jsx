import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <div className="grid-container">
        <header>
          <h1>Home page</h1>
        </header>
        <nav>
          <Link to="champions">to champions</Link>
        </nav>
      </div>
    </>
  );
};
