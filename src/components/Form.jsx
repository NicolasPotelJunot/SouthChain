import { Input, Button } from "@material-tailwind/react";

export const Form = () => {
  return (
    <form 
    className="grid gap-10 w-full" 
    action="https://formsubmit.co/nicolaspoteljunot@gmail.com" 
    method="POST"

    >
        <div className="w-3/4 xl:w-1/4 m-auto">
            <Input name="name" label="NOMBRE" required/>
        </div>
        <div className="w-3/4 xl:w-1/4 m-auto">
            <Input name="apellido" label="APELLIDO" required/>
        </div>
        <div className="w-3/4 xl:w-1/4 m-auto">
            <Input name="email" label="EMAIL" required type="email"/>
        </div>
        <div className="w-3/4 xl:w-1/4 m-auto">
            <Input name="tel" label="TELEFONO" required type="tel"/>
        </div>
        <input type="hidden" name="_next" value="https://nicolaspoteljunot.github.io/SouthChain/?#/contact" />
        <input type="hidden" name="_captcha" value="false" />
        <Button type="submit" className="bg-gradient w-20 flex py-2 justify-center items-center m-auto text-base">ENVIAR</Button>
    </form>
  )
}
