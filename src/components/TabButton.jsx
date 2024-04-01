export default function TabButton({...props}) {
    return (
        <li {...props}>
            <button className={props.isselected === props.title ? "active" : ""} {...props}>
                {props.title}
            </button>
        </li>
    )
}
