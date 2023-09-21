import React, { useContext, useEffect } from 'react'
import { Store } from './ContextStore';
import { NavLink } from 'react-router-dom';


const Hollywood = () => {
  const [contextData] = useContext(Store);
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  return (
    <>
    <h1 className='latestHeading'>THE LATEST</h1>

<div className='theLatest'>
    {contextData.filter((item)=> item.id >=15 && item.id<=17).map((item,index)=>{
        return(
            <div key={index} className='latestBox'>
                <img src={item.image} alt='NOT FOUND'width='340px' height='200px' />
                <h2>{item.name}</h2>
                <p>{item.textt}</p>
            </div>
        )
    })}
</div>
    
    {/* -----------------------TOPSTORIES---------------------- */}

   <div className='topStoriesParent'>
    <div>
        <h1 className='topstory'>TOP STORIES</h1>
        {contextData.filter((item)=> item.cat === 'Hollywood').map((item,index)=>{
            return(
                <div key={index} className='topStoryData'>
                    <NavLink  to={`/detail/${item.id}`}>
                    <div>
                        <img src={item.image} alt='NOT FOUND' />
                    </div>
                </NavLink>
                    <div className='topStoryData-down'>
                    <h4>{item.name}</h4>
                    <p>{item.textt}</p><hr/>
                    </div>
                </div>
            )
        })}
    </div>

    <div>
        <div>
        <h1 className='topPost'>TOP POST</h1>
        {contextData.filter((item)=> item.id >=18 && item.id<=20).map((item,index)=>{
            return(
                <div key={index} className='topPostData'>
                    <div>
                        <img src={item.image} alt='NOT FOUND' height='200px' width='200px'/>
                    </div>

                    <div>
                        <h4>{item.name}</h4>
                        <p>{item.textt}</p>
                        <p className='p'>{item.holly}</p>
                    </div>

                </div>

            )
        })}
        </div>

        <div className='add'>
            <h4>ADVERTISEMENT</h4>
        </div>
    </div>
   </div>
    </>
  )
}

export default Hollywood