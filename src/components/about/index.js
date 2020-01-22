import React from 'react';

export default function About() {
    return ( 
    <>
    <div class = "container">
    <div class = "row justify-content-md-center">
    <div class = "col text-center">
    <h2>About</h2>
        <hr ></hr>
        <p >A Color Fun Run/Walk is an fun one day event. 
            Participants are doused with colored powder as they navigate the course.  
            Please see F.A.Q. page for specific details about the event.  
            All powder used is FDA approved.
        </p>
        <p> This Color Fun Run is a Non-Profit event. 
            100% of the proceeds will be donated to Speed the Light/World Serve.
            Speed the Light is an organization which provides essential equipment and transportation for missionaries all across the Globe.
            Many of these missionaries work, with refugees, those in extreme poverty, and sex-trafficked victims. 
            Please check out the video below which shows a little glimpse into what STL does.
        </p>
        <p>This year Speed the Light is partnering with World Serve to dig wells in African villages
            that are in desparate need of clean water.
            You can visit World Serve's website at <a href = "https://www.worldserveintl.org/">https://www.worldserveintl.org/</a> 
            Check out the video below showing the process of bringing clean water to those in need.
        </p>
        <p>We (Lighthouse Christian Fellowship) are honored to partner with them. 
            Would you come on out to enjoy this fun event and to help others around the world? 
            For more information about Lighthouse Christian Fellowship please visit our website at <a href = "http://www.lcfeb.net/">http://www.lcfeb.net/</a>
        </p>
        <hr></hr>
        </div>
        </div>
        <br></br>
        <div class ="rowcenter">
        <figure class = "align-center container">
        <div class="video-block" style={{width: "66%"}}>
            <div><iframe class="mbr-embedded-video" src="https://www.youtube.com/embed/JrUjjo-A3rI?rel=0&amp;amp;showinfo=0&amp;autoplay=0&amp;loop=0" width="1280" height="720" frameborder="0" allowfullscreen></iframe></div>
        </div>
        </figure>
        <iframe src="https://player.vimeo.com/video/326390522" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
    </div>
    </>
    );

}


  