import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Card from './components/card/Card'
const Home = () => {
  return (
      <Layout>
        {/* // need to add margin t because navbar is fixed so  */}
        {/* <h1 className="text-2xl font-bold text-center mt-40">this is children in homepage</h1>
         <h1 className="text-2xl font-bold text-center mt-40">this is  second children in homepage</h1> */}
      <div className='flex flex-wrap mt-10 justify-center space-x-5  '>
      <Card type='First Blog' description='hello1 '/>
       <Card type='Second Blog' description='hello2'/>
        <Card type='Third Blog' description='hello3'/>
         <Card type='Fourth Blog' description='hello4'/>
          <Card type='Fifth Blog' description='hello5'/>
      </div>
      </Layout>
    
  )
}

export default Home
