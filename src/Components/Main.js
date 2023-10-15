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
                                <img src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/storiesApp%2Ftrends1.jpeg?alt=media&token=746619d5-e471-4305-a4ea-0b0c4245b7ab&_gl=1*wkguga*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5NzI5Mjg0OS4zOC4xLjE2OTcyOTI4NTMuNTYuMC4w.jpeg" alt="" />
                            </div>
                            <div class="rightcrad">
                                <img src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/storiesApp%2Ftrends2.jpeg?alt=media&token=0ba8b274-8acd-4443-bfcd-91fd74b92663&_gl=1*f86hr6*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5NzI5Mjg0OS4zOC4xLjE2OTcyOTI4ODMuMjYuMC4w.jpeg" alt="" width="390px" height="215px" />
                                <img src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/storiesApp%2Ftrends3.jpeg?alt=media&token=de2752ff-32f4-4216-aefc-a73bbc8715c7&_gl=1*1dr5q3p*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5NzI5Mjg0OS4zOC4xLjE2OTcyOTI5MDIuNy4wLjA..jpeg" alt="" width="390px" height="215px" />
                            </div>




                        </div>





                    </div>




                    <div class="categoryContainer">
                        <h2 class="posts">Latest Posts</h2>
                        <div class="filter">
                            <img src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/storiesApp%2Ffiltericon.png?alt=media&token=3c7c2f44-3998-448d-a901-b037d0071048&_gl=1*9tp9dp*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5NzM3MTM4MC40MC4xLjE2OTczNzE0MzEuOS4wLjA..png" alt="filter" />

                            <h2 class="filterText">Filter by Category</h2>


                        </div>

                        <div class="Buttons">
                            <button id="all">All</button>
                            <button>Artificial Intelligence</button>
                            <button>Cloud Computing</button>
                            <button>DevOps</button>
                            <button>Programming Languages</button>
                            <button>Mobile Application Development</button>
                            <button>Technology and Tools</button>
                            <button>Get a Job in a Tech Company</button>
                            <button>Others</button>
                        </div>


                        <div className='itemContainer'>

                            <div class="carditemContainer">
                                <div class="imgsect">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/storiesApp%2FbigData.png?alt=media&token=c46f68fa-59bb-4f1a-9436-8af931925645&_gl=1*rn0dl7*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5NzM3MTM4MC40MC4xLjE2OTczNzI1NzkuNjAuMC4w" alt="" />
                                </div>
                                <div class="textswrap">
                                    <div class="textsec">
                                        <h2>Challenges of Machine <br /> Learning in Big Data...</h2>
                                    </div>


                                    <div class="AuthorContainer">
                                        <span class="Author">EdYoda</span>
                                        <span class="date">| 24 Aug 2019 </span>

                                    </div>

                                    <div class="discripSec">

                                        <span class="DiscripText">Machine Learning is a subset of <br /> artificial intelligence which is an <br /> important part of computer <br /> science. The revolution of Big <br /> Data promises to transform the...
                                            <br /> <br /> <br />
                                        </span>

                                    </div>
                                </div>


                            </div>

                            <div class="carditemContainer">
                                <div class="imgsect">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/storiesApp%2FcyberSecurity.png?alt=media&token=9c085fec-02bf-403c-8adc-b9ba2a771ab5&_gl=1*14m7ro*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5NzM3MTM4MC40MC4xLjE2OTczNzE5MzUuNjAuMC4w" alt="" />
                                </div>
                                <div class="textswrap">
                                    <div class="textsec">
                                        <h2>Breaking the Myths <br /> around Cybersecurity</h2>
                                    </div>


                                    <div class="AuthorContainer">
                                        <span class="Author">EdYoda</span>
                                        <span class="date">| 26 Aug 2019 </span>

                                    </div>

                                    <div class="discripSec">

                                        <span class="DiscripText">Cybersecurity plays an integral <br />role in the process of good <br />business models. But even <br />cybersecurity programs built with <br />good intentions can fall short in...
                                            <br /> <br /> <br />
                                        </span>

                                    </div>
                                </div>


                            </div>


                            <div class="carditemContainer">
                                <div class="imgsect">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/storiesApp%2FcloudComputing.png?alt=media&token=e6ef30f3-7352-4986-bc36-0ac61822b74b&_gl=1*1mjoujq*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5NzM3MTM4MC40MC4xLjE2OTczNzIxMTMuNjAuMC4w" alt="" />
                                </div>
                                <div class="textswrap">
                                    <div class="textsec">
                                        <h2>Impact of Cloud <br />Computing in various...</h2>
                                    </div>


                                    <div class="AuthorContainer">
                                        <span class="Author">EdYoda</span>
                                        <span class="date">| 24 Aug 2019 </span>

                                    </div>

                                    <div class="discripSec">

                                        <span class="DiscripText">Cloud computing has been <br />rapidly gaining pace in the world <br />of information technology. It has <br />been observed that over 90% of <br />global enterprises are using clou...
                                            <br /> <br /> <br />
                                        </span>

                                    </div>
                                </div>


                            </div>


                            <div class="carditemContainer">
                                <div class="imgsect">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/storiesApp%2FmachinLearnin.png?alt=media&token=00e38706-f595-419b-a8d8-90da336b6a91&_gl=1*hzjkko*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5NzM3MTM4MC40MC4xLjE2OTczNzE3MTQuNjAuMC4w" alt="" />
                                </div>
                                <div class="textswrap">
                                    <div class="textsec">
                                        <h2>Introduction To A <br /> Machine Learning...</h2>
                                    </div>


                                    <div class="AuthorContainer">
                                        <span class="Author">EdYoda</span>
                                        <span class="date">| 23 Aug 2019 </span>

                                    </div>

                                    <div class="discripSec">

                                        <span class="DiscripText">We have had an insight into <br />Artificial Intelligence. Well, one of <br />its subfields is machine learning <br />and this...
                                            <br /> <br /> <br /> <br />
                                        </span>

                                    </div>
                                </div>


                            </div>


                            <div class="carditemContainer">
                                <div class="imgsect">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/storiesApp%2Fpractical_machine_learning_1.png?alt=media&token=1cd98c23-68ce-4290-a92f-cbf6e4c25fae&_gl=1*15ebex0*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5NzM3NzM5MS40MS4wLjE2OTczNzczOTEuNjAuMC4w" alt="" />
                                </div>
                                <div class="textswrap">
                                    <div class="textsec">
                                        <h2>Practical Machine <br />Learning with Python...</h2>
                                    </div>


                                    <div class="AuthorContainer">
                                        <span class="Author">Daniel Pyrathon </span>
                                        <span class="date">| 16 Oct 2019 </span>

                                    </div>

                                    <div class="discripSec">

                                        <span class="DiscripText">Machine learning is a field of <br />artificial intelligence that uses <br />statistical techniques to give <br />computer systems the ability to <br />“learn” e.g., progressively...
                                            <br /> <br /> <br />
                                        </span>

                                    </div>
                                </div>


                            </div>
                            <div class="carditemContainer">
                                <div class="imgsect">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/storiesApp%2FincomeShare%20.png?alt=media&token=46c67430-ac24-464d-b983-3b74646945dd&_gl=1*fitnej*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5NzM3NzM5MS40MS4xLjE2OTczNzc0MTMuMzguMC4w" alt="" />
                                </div>
                                <div class="textswrap">
                                    <div class="textsec">
                                        <h2>What is Income Share <br />Agreement?</h2>
                                    </div>


                                    <div class="AuthorContainer">
                                        <span class="Author">EdYoda</span>
                                        <span class="date">| 14 Oct 2019 </span>

                                    </div>

                                    <div class="discripSec">

                                        <span class="DiscripText">The term Income Share <br />Agreement has been around for a <br />long time since 1955 to be <br />precise. Surprised, eh? It was first <br />introduced by Milton Friedman...
                                            <br /> <br /> <br />
                                        </span>

                                    </div>
                                </div>


                            </div>




                            <div class="carditemContainer">
                        <div class="imgsect">
                            <img src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/storiesApp%2Fcollection.png?alt=media&token=8a26118a-8f7c-4d7a-a900-9c0129a8a853&_gl=1*1uq0gzy*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5NzM3NzM5MS40MS4xLjE2OTczNzc2MzMuNjAuMC4w" alt=""/>
                        </div>
                        <div class="textswrap">
                            <div class="textsec">
                                <h2>LAMP Stack Vs MEAN <br/>stack: Choosing the</h2>
                            </div>


                            <div class="AuthorContainer">
                                <span class="Author">EdYoda</span>
                                <span class="date">| 24 Aug 2019 </span>

                            </div>

                            <div class="discripSec">

                                <span class="DiscripText">In today’s dynamic world,<br/>rapid web application<br/>development with a smooth <br/>can adapt to specific features is<br/>the main business requirement....
                                    <br/> <br/> <br/>
                                </span>
                            
                            </div>
                        </div>    


                    </div>

                    <div class="carditemContainer">
                        <div class="imgsect">
                            <img src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/storiesApp%2FwebScarping.png?alt=media&token=e298b4e8-62f5-48fb-b795-1dad0e0ff0bb&_gl=1*2m02zh*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5NzM3NzM5MS40MS4xLjE2OTczNzc2NzMuMjAuMC4w" alt=""/>
                        </div>
                        <div class="textswrap">
                            <div class="textsec">
                                <h2>What is Web Scraping? <br/> in Detail</h2>
                            </div>


                            <div class="AuthorContainer">
                                <span class="Author">Zac Clancy</span>
                                <span class="date">| 25 Sep 2019 </span>

                            </div>

                            <div class="discripSec">

                                <span class="DiscripText">Simply put, web scraping is one <br/>of the tools developers use to <br/> gather and analyze information<br/>from the Internet.Some websites<br/>and platforms offer application...
                                <br/><br/><br/> 

                                </span>
                            
                            </div>
                        </div>    


                    </div>

                    <div class="carditemContainer">
                        <div class="imgsect">
                            <img src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/storiesApp%2F9th.png?alt=media&token=f183bfe2-4da9-4494-90c1-0dd0a2c44422&_gl=1*7czbhe*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5NzM3NzM5MS40MS4xLjE2OTczNzc3MDQuNjAuMC4w" alt=""/>
                        </div>
                        <div class="textswrap">
                            <div class="textsec">
                                <h2>Importance of Data <br/>Backup and Recovery..</h2>
                            </div>


                            <div class="AuthorContainer">
                                <span class="Author">EdYoda</span>
                                <span class="date">| 26 Aug 2019 </span>

                            </div>

                            <div class="discripSec">

                                <span class="DiscripText">A business must always <br/>introspect the areas where they <br/>lack in order to bring about a <br/>positive change in the work <br/>environment. One of the main...
                                    <br/> <br/> <br/>
                                </span>
                            
                            </div>
                        </div>    


                    </div>
                    
                            







                        </div>









                    </div>



















                </div>
            </main>





            <footer>
            <div class="foot">
                <div class="footerContainer">

                    <div class="edyodaAddress">
                    <span class="name">EDYODA</span>
                    <span class="add">1st Floor,<br/>
                        Gopalan Millennium Tower,<br/>
                        ITPL Main Rd, Brookefield,<br/>
                        Bengaluru, Karnataka-560037,<br/>
                        India
                    </span>
                    <div class="mailbox">
                        <img  class="mailboxicon" src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/storiesApp%2Fmaiboxnew.png?alt=media&token=cbd5c844-b8dd-4367-93c3-3b1145298128&_gl=1*14t5nmj*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5NzM3NzM5MS40MS4xLjE2OTczNzkwOTguNTQuMC4w" alt=""/>
                        <span class="mailtext">hello@edyoda.com</span>
                    </div>
                    <div class="socialIcons">
                        <img src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/storiesApp%2Fmap.png?alt=media&token=656fcb5e-1c7b-409e-a94c-57d1b9e765bf&_gl=1*17unwk8*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5NzM3NzM5MS40MS4xLjE2OTczNzkzMjUuNjAuMC4w" alt=""/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/storiesApp%2Flinkedin.png?alt=media&token=27835ed4-e29f-4e39-ba4c-a54745465da5&_gl=1*15xyf9j*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5NzM3NzM5MS40MS4xLjE2OTczNzkzNTguMjcuMC4w" alt=""/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/storiesApp%2Ffacebook.png?alt=media&token=de73e85a-722b-4f20-abb7-e0cce0c40ce6&_gl=1*4mdnp2*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5NzM3NzM5MS40MS4xLjE2OTczNzkzODYuNjAuMC4w" alt=""/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/storiesApp%2Ftwitter.png?alt=media&token=fe1f2715-edd1-4197-a3ff-88c1315b1069&_gl=1*6fsum7*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5NzM3NzM5MS40MS4xLjE2OTczNzk0NDcuNjAuMC4w" alt=""/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/storiesApp%2Ftelegram.png?alt=media&token=fa525c2c-ce03-4f13-b432-085d76f87694&_gl=1*gtf3nd*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5NzM3NzM5MS40MS4xLjE2OTczNzk0NzguMjkuMC4w" alt=""/>
                    </div>


                    </div>

                    <div class="info">
                    <span class="name2">EDYODA</span>
                    <div class="infoContent">
                        <span>About us</span>
                        <span>Careers</span>
                        <span>Contact us</span>
                        <span>Term of use</span>
                        <span>Privacy Policy</span>
                    </div>
                    </div>
                    <div class="info">
                        <span class="name2">RESOUCES</span>
                        <div class="infoContent">
                            <span>Learning Path</span>
                            <span>Courses</span>
                            <span>Learning Videos</span>
                            <span>Educators</span>
                            <span>Edyoda Story</span>
                            <span>University</span>
                        </div>
                    </div>
                    <div class="info">
                        <span class="name2">FOR ENTERPRISES</span>
                        <div class="infoContent">
                            <span>Train Your Employees</span>

                            <div class="info">
                                <h5 class="name3">QUICK LINKS</h5>
                                <div class="infoContent">
                                    <span>Learn and Earn</span>
                                    <span>Become a Learning-Enabler</span>
                                    <span>Tips for Learning-Enabler</span>
                                    <span>Request New Topic</span>
                                    <span>Certification</span>
                                    <span>Affiliate Progam</span>


                           





        
                                
        
                                
        
                                
                                
                                 </div>

                        

                        

                        
                        
                            </div>

                    
                        </div>
                

                


                    </div>

               
                </div> 

               
            </div>   
            
            <hr />

           

           

            





        </footer>
       





        </>
    )
}

export default Main;