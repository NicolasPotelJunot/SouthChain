import { Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonSocial = ({ href, tipeIcon }) => {
  return (
    <Button className="rounded-full h-12 w-10 lg:h-16 lg:w-16 flex items-center justify-center bg-gradient text-white text-xl lg:text-3xl mx-4 cursor-pointer">
      <a
        className="text-center h-12 w-10 lg:h-16 lg:w-16 flex items-center justify-center"
        target="_blank"
        href={href}
      >
        <FontAwesomeIcon icon={tipeIcon} />
      </a>
    </Button>
  );
};
