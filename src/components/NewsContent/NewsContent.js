import { Container } from '@material-ui/core'
import React from 'react'
import './NewsContent.css'
import NewsCard from '../NewsCard/NewsCard'

const NewsContent = ({newsArray, newsResults, loadmore, setLoadmore}) => {
  return (
    <div>
      <Container maxWidth="md">
          <div className='content'>
              <div className='downloadMessage'>
                  <span className='downloadText'>
                      For the best experience use inshorts app on your smartphone
                  </span>
                  <img
                  src="https://assets.inshorts.com/website_assets/images/appstore.png"
                  height="80%"
                  alt="app store"
                   />
                 <img
                  src="https://assets.inshorts.com/website_assets/images/playstore.png"
                  height="80%"
                  alt="google play"
                   />
              </div>

              {
                newsArray.map((newsItem)=><NewsCard newsItem={newsItem} key={newsItem.title}/>)
              }

              {
                loadmore<=newsResults && (
                  <>
                    <hr/>
                    <button className='loadmore' onClick={()=>{setLoadmore(loadmore+20)}}>Load More</button>
                  </>
                )
              }
          </div>
      </Container>
    </div>
  )
}

export default NewsContent
