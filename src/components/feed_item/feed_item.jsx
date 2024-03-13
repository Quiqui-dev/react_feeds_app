

const FeedItem = ({feed}) => {

    const {id, name} = feed;

    return (
        <div>
            <div>
                <h2>{name}</h2>
                <p>{id}</p>
            </div>
        </div>
    )
}

export default FeedItem