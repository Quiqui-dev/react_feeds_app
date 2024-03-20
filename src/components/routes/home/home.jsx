import { useState, useEffect } from "react"
import FeedList from "../../feed_list/feed_list"
import axiosInstance from "../../services/axiosInstance"
import { FEED_LIST_API } from "../../constants/urls/urls"

const Home = () => {

    const [feeds, setFeeds] = useState([])

    useEffect(() => {
      try {
        axiosInstance.get(FEED_LIST_API)
        .then((res) => {
          setFeeds(res.data)
        })
      } catch (err) {
        console.log(err)
      }

    }, [])

    return (
        <FeedList feeds={feeds}/>
    )
}

export default Home