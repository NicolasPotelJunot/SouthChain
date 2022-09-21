import { Input, Button , Textarea } from "@material-tailwind/react";

export const Form = () => {
  return (
    <form 
        className="grid gap-5 lg:gap-10 w-full" 
        action="https://formsubmit.co/nicolaspoteljunot@gmail.com" 
        method="POST"
    >
        <div className="w-4/5 xl:w-1/4 m-auto">
            <Input name="name" label="Nombre" required/>
        </div>
        <div className="w-4/5 xl:w-1/4 m-auto">
            <Input name="apellido" label="Apellido" required/>
        </div>
        <div className="w-4/5 xl:w-1/4 m-auto">
            <Input name="email" label="Email" required type="email"/>
        </div>
        <div className="w-4/5 xl:w-1/4 m-auto">
            <Input name="tel" label="Teléfono" required type="tel"/>
        </div>
        <div className="w-4/5 xl:w-1/4 m-auto">
            <Textarea name="descripcion" label="Estoy interado en..." type="textarea"/>
        </div>
        <input type="hidden" name="_next" value="https://nicolaspoteljunot.github.io/SouthChain/?#/contact" />
        <input type="hidden" name="_captcha" value="false" />

        <Button type="submit" className="bg-gradient w-20 flex py-2 justify-center items-center m-auto text-base">ENVIAR</Button>

    </form>
  )
}
