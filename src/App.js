import React from 'react'
import {BrowserRouter ,Routes ,Route} from 'react-router-dom';
import HomePage from './Pages/homepage';
import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client';
import ReviewDetails from './Pages/ReviewDetails';
import SiteHeader from './Component/Siteheader';
import Category  from './Pages/Category';

function App() {
 const client = new ApolloClient({
   uri:'http://localhost:1337/graphql',
    cache:new InMemoryCache()
 });
  return (

    <>
    <div className='App'>
      <ApolloProvider client={client}>
    <BrowserRouter>
    
    <SiteHeader/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}>   </Route>
        <Route path='/details/:id' element={<ReviewDetails/>}></Route>
        <Route path='/category/:id' element={<Category/>}></Route>
      </Routes>
     
    </BrowserRouter>
    </ApolloProvider>
     </div>
    </>
    
   
  );
}

export default App;
