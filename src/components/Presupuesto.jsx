import { Button } from "@material-tailwind/react"
import { Link } from "react-router-dom"

export const Presupuesto = () => {
  return (
    <aside className=" flex justify-center mt-10">
      <Button className="text-white text-lg lg:text-2xl py-1 px-8 lg:py-6 rounded-xl bg-gradient">
          <Link to="/contact">
            PEDÍ TU PRESUPUESTO
          </Link>
        </Button>
    </aside>
  )
}
