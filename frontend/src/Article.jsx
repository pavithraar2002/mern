import React from 'react'

const Article = ({id,title,desc,img}) => {
    return (
        <div className='container'>
            <article className=" new_article col-md-4  d-flex gap-1 my-2">
                <img src={img} alt="Retro computer" />
                <div className="content d-flex flex-column justify-content-between gap-1 ">
                    <h2>{id}</h2>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
            </article>

        </div>
    )
}

export default Article