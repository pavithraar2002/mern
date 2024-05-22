import React from 'react'
import heroImg from './assets/images/image-web-3-desktop.jpg'

import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div>
            <main className="hero">
                <img></img>
                <div className="container">
                    <div className="row ">
                        <section className="col-md-8 ">
                        <img
                src={heroImg}
                alt="Entri news hero image"
                />
                            <div className="container hero_text my-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h1>The Bright Future of Web 3.0?</h1>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="call_out">
                                            <p>
                                                We dive into the next evolution of the web that claims to put
                                                the power of the platforms back into the hands of the people.
                                                But is it really fulfilling its promise?{" "}
                                            </p>
                                            <Link to="" className="button btn btn-danger">
                                                Read more
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <aside className="new_articles col-md-4 bg-dark  ">
                            <h1 className="heading">New</h1>
                            <article className="article ">
                                <Link to="">Hydrogen VS Electric Cars</Link>
                                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                            </article>
                            <article className="article">
                                <Link to="">The Downsides of AI Artistry</Link>
                                <p>
                                    What are the possible adverse effects of on-demand AI image
                                    generation?
                                </p>
                            </article>
                            <article className="article">
                                <Link to="">Is VC Funding Drying Up?</Link>
                                <p>
                                    Private funding by VC firms is down 50% YOY. We take a look at what
                                    that means.
                                </p>
                            </article>
                        </aside>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Hero