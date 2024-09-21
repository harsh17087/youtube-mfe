

const SingleButton=(props)=>{

    const {name} = props
    return (
        <div>
            <button className="m-2 px-3 py-1 bg-gray-200 rounded-xl">{name}</button>
        </div>
    )
}

export default SingleButton