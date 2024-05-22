import React from 'react'
import Article from './Article'
import imageretro from './assets/images/image-retro-pcs.jpg'
import imagelaptop from './assets/images/image-top-laptops.jpg'
import imagegame from './assets/images/image-gaming-growth.jpg'
const Articles = () => {
  return (
    
        <section className='row my-4  d-flex  '>
            <Article
            id='01' 
            title='Reviving Retro PCs' 
            desc='What happens when old PCs are given modern upgrades' 
            img={imageretro}
            />
            <Article
            id='02' 
            title='Top 10 Laptops of 2022'
             desc='Our best picks for various needs and budgets.' 
             img={imagelaptop}
             />
            <Article
            id='03' 
            title='The Growth of Gaming' 
            desc='How the pandemic has sparked fresh opportunities'
            img={imagegame}
            />
        </section>
    
  )
}

export default Articles