
export function Post(props) {
    console.log(props)

    return (
        <div>
            <p>{props.content}</p>
            <strong>{props.author}</strong>
        </div>
    )
}

