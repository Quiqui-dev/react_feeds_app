import FeedItem from "../feed_item/feed_item";

const FeedList = ({feeds}) => {

    return (
        <div>
            {feeds.map((feed) => {
                return (
                    <FeedItem key={feed.id} feed={feed}/>
                )
            })}
        </div>
    )
}

export default FeedList