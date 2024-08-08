import "./styles.css";

interface Props {
    text: string;
    wit: number;
}

function Input(Props: Props) {
    return (
        <div className='wrapper' style={{width:`${Props.wit}%`}}>
            <input type='text' placeholder=''></input>
            <span>{Props.text}</span>
        </div>
    );
}

export default Input;