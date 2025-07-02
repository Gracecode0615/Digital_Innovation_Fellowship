import React from 'react';

function Herosection(){
    return(
        <section className="hero">
            <div className="hero-content">
                <div className="write-up">
                    <h1>Find a <span>job</span> easily</h1>
                <p>With verified, up-to-date job listings directly from employer websites, we create a premium experience for job seekers, employers, and data seekers alike.</p>

                <div className='input-search'>
                    <input type="search"  placeholder='Enter your keywords'/><button>search</button>
                </div>
                  <button className="btn-primary">Get started</button>
                </div>

                <div className="hero-img">
                    <img src="https://i.pinimg.com/736x/d4/4a/88/d44a88f4eee4af0275c4d607be193285.jpg" alt="" />
                </div>
              
            </div>
        </section>
    )
}

export default Herosection;