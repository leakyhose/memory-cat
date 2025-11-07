export default function Button({title, handleClick}) {

    return <div>
        <button className="btn" id={title} onClick = {handleClick}>
            {title}
        </button>
    </div>
}