import React from 'react'
import {Link} from 'react-router-dom';
import {useQuery, gql} from '@apollo/client'

const CATEGORIES= gql`
 query GetCategories{
  categories{
     name,
   id
  }
 }
`


function Siteheader() {
  const {data,loading,error}= useQuery(CATEGORIES);
 console.log(data)
  if(loading)return<h2>Loading Categories</h2>
  if(error)return <h2>Error):</h2>
  console.log(data)
  return (
    <div className='site-header'>
      <Link  to="/"> <h2>Crazy Review</h2></Link>
       <nav className='categories'>
         <span>Filter reviews by categories : </span>
           {data.categories.map((cate)=>(
             <Link key={cate.id} to={`/category/${cate.id}`}>{cate.name}</Link>

           ))}
       </nav>
        </div>
  )
}

export default Siteheader;