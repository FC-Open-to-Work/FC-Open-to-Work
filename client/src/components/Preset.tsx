import Toggle from "react-toggle";
import "react-toggle/style.css"

interface Props {
    name: string;
    active: boolean;
}

function Preset({name, active}: Props) {
    return (
        <div className="flex bg-blue-300 rounded-lg py-2 px-6 justify-between">
            <div className="font-bold text-l">{name}</div>
            <Toggle icons={false} defaultChecked={active}></Toggle>
        </div>
    );
}

export default Preset;