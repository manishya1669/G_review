import React from 'react';
import {useParams} from 'react-router-dom'
import useFetch from '../hooks/usefetch';
import {useQuery, gql} from '@apollo/client';
import Reactmarkdown from 'react-markdown';

const REVIEW=gql`
query GetReview($id:ID!){
      review(id:$id){
        title,
        body,
        id,
        rating,
        categories{
          name,
          id
        }
      }
}

`



function ReviewDetails() {
    const {id}= useParams();

  const {data, loading,error}=useQuery(REVIEW,{
    variables:{id:id}
  });
  if(loading) return <h2>loading...</h2>
  if(error)return <h2>Error</h2>
  console.log(data);
  return (
    <div  className="review-card">  
            <div className='rating'>{data.review.rating}</div>
            <h2>{data.review.title}</h2>
 {data.review.categories.map(c=>(
                          <small key={c.id}>{c.name} </small>
            ))}            <p>{data.review.body}...</p>
           </div>

  )
}

export default ReviewDetails