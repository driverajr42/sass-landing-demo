import Image from "next/image";


// Creating prop to pass to the button throughout the website
type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string; // ? means optional. If there is no icon image just the string will be passed
    variant: 'btn_orange' | 'btn_light_green' | 'btn_dark_white' | 'btn_light_white';

}

const Button = ({type, title, icon, variant}: ButtonProps) => {
  return (
    <button type={type} className={`flextCenter gap-3 rounded-full border ${variant}`}>
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button