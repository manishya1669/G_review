import React from 'react'
import {useQuery,gql} from '@apollo/client';
import {useParams,Link} from 'react-router-dom';

const CATEGORY = gql`
 query GetCategory($id:ID!){
   category(id:$id){
     name,
     id,
     reviews{
       title,body,
       rating,id,
       categories{
         name,
         id
       }
     }
   }
 }
`

function Category() {
  const {id} = useParams();
  const {loading,error,data} = useQuery(CATEGORY,{
    variables:{id:id}
  });

  if(loading) return <h2>loading</h2>;
  if(error)return <h2>Error, Please make some changes</h2>
  console.log(data);
  return (
    <div>
      <h2>{data.category.name}</h2>
      {data.category.reviews.map((review)=>(
        
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

export default Category;
