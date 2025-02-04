import React from 'react'

function Cards({ item }) {
    // console.log(item)
    return (
        <>

            <div className='flex
                container p-2 pb-5 pt-20 '>
                <div className="card bg-base-400 w-96 h-90 shadow-xl transition-transform duration-200 hover:scale-[1.02] dark:border">
                    <figure className='w-full flex bg-blue-100'>
                        <img className='w-10/12 '
                            src=
                            {item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-[18px]">
                           {item.title}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p className='text-[14px]'>{item.desc}</p>
                        <div className="card-actions justify-between p-2">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className="badge hover:bg-pink-500 hover:duration-200 hover:text-white  cursor-pointer px-2 py-4 rounded-full border-2px">Buy Now</div>
                    
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cards