import React from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../hooks/usefetch';
import {useQuery, gql} from '@apollo/client';

const REVIEWS = gql`
query GetReviews{
  reviews{
    title, 
    body,
    rating ,
    id,
    categories{
      name,
      id
    }
  }
}
`
function Homepage() {
  const {data,error,loading} = useQuery(REVIEWS);
  if(loading)return <p>Loading...</p>
  if(error) return <p>Error:</p>
  // console.log(data);
  return (
    <div>
      {data.reviews.map((review)=>(
        
          <div key={review.id} className="review-card">  
            <div className='rating'>{review.rating}</div>
            <h2>{review.title}</h2>
           {review.categories.map(c=>(
                          <small key={c.id}>{c.name} </small>
            ))}
            <p>{review.body.substring(0,200)}...</p>
            <Link to={`/details/${review.id}`}>Read More</Link>
           </div>


  ))}
    </div>
  )
}

export default Homepage;