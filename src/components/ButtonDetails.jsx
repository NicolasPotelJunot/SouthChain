import { Button } from "@material-tailwind/react";


export const ButtonDetails = ({className, description}) => {
  return (
    <Button className={` ${className} bg-gradient px-4 py-4 w-32`}>
      {description}
    </Button>
  )
}
