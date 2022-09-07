import { Input, Button } from "@material-tailwind/react";

export const Form = () => {
  return (
    <form className="grid gap-10 w-full">
        <div className="w-3/4 xl:w-1/4 m-auto">
            <Input label="NOMBRE" required/>
        </div>
        <div className="w-3/4 xl:w-1/4 m-auto">
            <Input label="APELLIDO" required/>
        </div>
        <div className="w-3/4 xl:w-1/4 m-auto">
            <Input label="EMAIL" required type="email"/>
        </div>
        <div className="w-3/4 xl:w-1/4 m-auto">
            <Input label="TELEFONO" required type="tel"/>
        </div>
        <Button type="submit" className="bg-gradient w-20 flex py-2 justify-center items-center m-auto text-base">ENVIAR</Button>
    </form>
  )
}
