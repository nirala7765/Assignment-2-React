import React from 'react'
import '../styles/styling.css';

function Main() {
  return (
    <>  
            <main className='mainBox'>

                <div className='container'>


                    <div class="trendsContainer">
                        <h2 class="TrendingP">Trending Posts</h2>
                        <div class="cardsContainer">

                            <div class="leftcard">
                             <img src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/storiesApp%2Ftrends1.jpeg?alt=media&token=746619d5-e471-4305-a4ea-0b0c4245b7ab&_gl=1*wkguga*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5NzI5Mjg0OS4zOC4xLjE2OTcyOTI4NTMuNTYuMC4w.jpeg" alt=""/>
                            </div>
                            <div class="rightcrad">
                                <img  src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/storiesApp%2Ftrends2.jpeg?alt=media&token=0ba8b274-8acd-4443-bfcd-91fd74b92663&_gl=1*f86hr6*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5NzI5Mjg0OS4zOC4xLjE2OTcyOTI4ODMuMjYuMC4w.jpeg" alt="" width="390px" height="215px" />
                                <img src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/storiesApp%2Ftrends3.jpeg?alt=media&token=de2752ff-32f4-4216-aefc-a73bbc8715c7&_gl=1*1dr5q3p*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5NzI5Mjg0OS4zOC4xLjE2OTcyOTI5MDIuNy4wLjA..jpeg" alt="" width="390px" height="215px"/>
                            </div>




                        </div>





                    </div>




                    <div class="categoryContainer">
                        <h2 class="posts">Latest Posts</h2>
                        <div class="filter">
                            <img src="/NEWFILTER.png" alt="filter"/>

                            <h2 class="filterText">Filter by Category</h2>


                        </div>

                        <div class="Buttons">
                            <button  id="all">All</button>
                            <button>Artificial Intelligence</button>
                            <button>Cloud Computing</button>
                            <button>DevOps</button>
                            <button>Programming Languages</button>
                            <button>Mobile Application Development</button>
                            <button>Technology and Tools</button>
                            <button>Get a Job in a Tech Company</button>
                            <button>Others</button>
                        </div>









                    </div>










                    



                </div>
            </main>





    </>
  )
}

export default Main