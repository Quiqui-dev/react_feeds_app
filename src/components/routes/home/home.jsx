import { useState, useEffect } from "react"
import FeedList from "../../feed_list/feed_list"
import axios from "axios"

const Home = () => {

    const [feeds, setFeeds] = useState([])

    useEffect(() => {
      axios.get(`http://localhost:8080/v1/feeds`).then( (res) => {
        console.log(res.data)
        setFeeds(res.data)
      })
    }, [])

    return (
        <FeedList feeds={feeds}/>
    )
}

export default Home