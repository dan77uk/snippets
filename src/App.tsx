import { Link } from "react-router-dom";
export default function App() {
  return (
    <div>
      <h1>Code Snippets</h1>
      <h2>
        This is a single repo of useful code snippets for use in other projects.
      </h2>
      <ul>
        <li>
          <Link to="./track-scroll">Track Scroll</Link>
        </li>
      </ul>
    </div>
  );
}
