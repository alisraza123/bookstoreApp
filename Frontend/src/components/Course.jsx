import React from 'react'
import list from '../components/list.json'
import Cards from '../components/Cards.jsx'
import {Link} from 'react-router-dom'
const Course = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='pt-40 items-center justify-center text-center'>
                    <h1 className='text-4xl leading-relaxed font-semibold md:text-4xl'>We're delighted to have you<span className='text-pink-500'> Here!:)</span></h1>
                    <p className='mt-12 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni beatae esse velit voluptatum iusto voluptas provident, inventore cupiditate doloribus recusandae, eligendi quod. Sint, voluptas, facilis veritatis nisi praesentium distinctio repellat eius obcaecati adipisci alias dicta. Voluptates fugiat explicabo distinctio dolores autem ullam dolorum eaque accusamus doloribus similique, maiores officiis, expedita cumque reiciendis. Veritatis maiores, quae est obcaecati itaque repellendus sunt!</p>
                    <Link to='/'>
                    <button className='text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 hover:duration-300 mt-6' >Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        list.map((item)=>
                            <Cards key={item.id} item={item}/>

                        )
                        
                    }
                </div>
            </div>
        </>
    )
}

export default Course