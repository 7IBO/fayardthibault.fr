import construction from "public/assets/icons/under-construction.svg";
import { CMS_ADMIN_URL, GITHUB_URL } from "~/config/constants";
import { Link } from "../link";

const AppConstruction = () => {
  return (
    <div className="p-2 xs:p-4 w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center uppercase">
        Portfolio en construction 🏗️
      </h1>
      <img className="max-w-lg mt-4 sm:mt-8" src={construction} />
      <p className="text-xl mt-4">Merci de revenir plus tard !</p>

      <p className="fixed bottom-12 sm:bottom-4 text-md">
        Vous pouvez suivre l'avancé du projet sur{" "}
        <Link
          to={GITHUB_URL}
          target="_blank"
          className="text-blue-500 underline"
          isExternal
        >
          Github
        </Link>
      </p>

      <Link
        to={CMS_ADMIN_URL}
        target="_blank"
        className="fixed bottom-4 sm:right-4 text-blue-500 text-md hover:underline"
        isExternal
      >
        Portail admin
      </Link>
    </div>
  );
};

export default AppConstruction;
