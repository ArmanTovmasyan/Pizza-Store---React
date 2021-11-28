import React from 'react';
import "./about.css";
import ShowMore from './showMore';

function About (props) {
    return (
            
      <div className="aboutContainer">

            <h1 className="about_container1">ABOUT</h1>
            <div className ="chefImgDiv">
                <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=377&q=80"  
                className="chef" alt="Chef"/>
               
            </div>
            <p>The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum dolor 
               sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
               et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
               laboris nisi ut aliquip ex ea commodo consequat.The Chef? Mr. Italiano himself
               
            </p>
      
      
            <p>We are proud of our interiors.</p>
        <div className ="restoranImgDiv">
            <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80" style={{width: "100%"}} className="restoranImg" alt="Restaurant"/>
        </div>
        
        <h1>Opening Hours</h1>
        <div className="row">
        <div className="col s6">
            <p>Mon & Tue CLOSED</p>
            <p>Wednesday 10.00 - 24.00</p>
            <p>Thursday 10:00 - 24:00</p>
        </div>
        <div className="w3-col s6">
            <p>Friday 10:00 - 12:00</p>
            <p>Saturday 10:00 - 23:00</p>
            <p>Sunday Closed</p>
        </div>
    </div>


   
    <iframe className ="iFrame" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5941.737429389064!2d12.517076!3d41.874171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61e55c8fffff%3A0x71f8be395441e4c4!2sVia%20Alfredo%20Baccarini%2C%2031a%2C%2000179%20Roma%20RM!5e0!3m2!1sit!2sit!4v1637239114202!5m2!1sit!2sit"></iframe>
        <div>
            <p>
                <h1>Our history</h1>
                <ShowMore text="
                        Established in 1984, Papa Ceo, pronounced “Papa Chey-o” is a hole in the wall, family/friend-run 
                        pizzeria serving one of the self proclaimed best thin crust pizzas in Rome. 
                        Okay, so the story goes like this. There’s a guy named Tony, he immigrates to Toronto all the 
                        way from Sicily, bringing all of his recipes and secrets with him.
                        He comes out of nowhere and opens quite a few pizza restaurants with different family members. 
                        Fun fact: some of those pizzerias still exist today. "
                        // max = {40}
                />
            </p>
        </div>
           
        </div>
    );
}

export default About;