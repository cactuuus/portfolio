import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const NotFoundPage = () => {
  return (
    <main>
      <div id="not-found-msg" className="text-box sectioned">
        <FontAwesomeIcon className="icon" icon={faTriangleExclamation} />
        404 - Page not found
      </div>
    </main>
  );
};

export default NotFoundPage;
