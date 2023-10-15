import React from 'react'
import '../styles/styling.css';
import logo from '../Images/newLogo.png';




function Header() {
    return (

        <>



            <header>
                <div class="head">
                    <div class="logoBox">
                        <img class="logo" src={logo} alt="logo " />
                        <h2 class="STORIESTEXT">Stories</h2>
                    </div>

                    <label for="datalistsItem">Explore Categories
                    </label>
                    <img class="dropimg" src ='https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/storiesApp%2Fdropdown2.png?alt=media&token=76e75173-780d-45a9-bdb4-4cca02b11e12&_gl=1*c0cj2z*_ga*MjE5ODk3MDMxLjE2Nzc2NzE1MTQ.*_ga_CW55HF8NVT*MTY5NzI4OTgwMy4zNy4xLjE2OTcyOTA3NzMuNjAuMC4w' alt="" />

                    <samp class="sampleText">EdYoda is a learning and knowledge <br />
                        sharing platform for techies</samp>

                    <button class="webButton">Go to main Website</button>



                </div>







            </header>






        </>


    )
}

export default Header;