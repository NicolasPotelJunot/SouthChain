import { Input, Button } from "@material-tailwind/react";

export const Form = () => {
  return (
    <form 
    className="grid gap-10 w-full" 
    action="https://formsubmit.co/286e37e6f3aa29152e1e3598b52717d9" 
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
        <input type="hidden" name="_next" value="http://127.0.0.1:5173/#/contact" />
        <input type="hidden" name="_captcha" value="false" />
        <Button type="submit" className="bg-gradient w-20 flex py-2 justify-center items-center m-auto text-base">ENVIAR</Button>
    </form>
  )
}
