style.css
.breakfast, .lunch, .dinner{
    display: flex;
    justify-content: flex-start;
    border-radius: 5px;
}

img{
    width: 250px;
    height: 250px;
}

.column{
    padding: 10px;
}
.column1{
    width: 350px;
    padding-left: 20px;
    padding-top: 100px;
    
}



.contact_form h1{
    text-align: center;
    font-size: 2.5rem;
    font-weight: 400;
    color: black;

}

.content{
    position: relative;
    padding: 3em 3em;
    display: flex;
    justify-content: center;

}

.form-img{
    background-size: cover;
    padding: 40px;
    align-items: center;
    display: grid;
}

form{
    padding: 40px;
    align-items: center;
    
}

footer {
    background-color: black;
    padding-top: 50px;
    text-align: center;
    color: white;
  }


.container{
    display: flex;
    justify-content: space-between;
    background-color: #283618;
    margin: auto;
    

}


.footer-contents{
    width: 33.3%;
}

h3{
    font-size: 28px;
    margin-bottom: 15px;
    text-align: center;
    color: white;
}

.footer-contents p{
    width: 190px;
    margin: auto;
    padding: 7px;
    
}

.footer-contents ul{
    text-align: center;

.list{
    padding: 0;
    
    
}


.list li{
    width: auto;
    text-align: center;
    list-style-type: none;
    padding: 7px;
    position: relative;
    

}
.list li::before{
    content: '';
    position: absolute;
    transform: translate(-50%, -50%);
}

.social-icons{
    text-align: center;
    padding: 0;

}
.social-icons li{
    display: inline-block;
    text-align: center;
    padding: 5px;
    border: 1px solid blue;

}
.bottom-bar{
    background-color: #283618;
    color: white;
    text-align: center;

}

index.html

<div class="menu-container">
    <div class="breakfast">
        <div class="column1">
            <h1>Our Breakfast</h1>
            <p>Tender grilled chuck steak, soft corn tortillas,
                 topped with onion & cilantro,
                 and whatever other toppings sound good (Guacamole)!</p>
        </div>
        <div class="column">
            <img src="Assets\hotdog.jpg" alt="Hot Dog">
            <h1>Hot Dog</h1>
            <h1>$10</h1>
        </div>
        <div class="column">
            <img src="Assets\samosa.jpg" alt="samosa">
            <h1>Samosa</h1>
            <h1>$5</h1>
        </div>
        <div class="column">
            <img src="Assets\sausage.jpg" alt="sausage">
            <h1>Sausage</h1>
            <h1>$8</h1>
        </div>
    </div>

    <div class="lunch">
        <div class="column1">
            <h1>Our lunch</h1>
            <p>Tender grilled chuck steak, soft corn tortillas,
                topped with onion & cilantro,
                and whatever other toppings sound good (Guacamole)!</p>
        </div>
        <div class="column">
            <img src="Assets\beef.jpg" alt="Beef">
            <h1>Sausage</h1>
            <h1>$8</h1>
        </div>
        <div class="column">
            <img src="Assets\chicken.jpg" alt="Chicken">
            <h1>Sausage</h1>
            <h1>$8</h1>
        </div>
        <div class="column">
            <img src="Assets\chips.jpg" alt="Potato Chips">
            <h1>Sausage</h1>
            <h1>$8</h1>
        </div>
    </div>

    <div class="dinner">
        <div class="column1">
            <h1>Our Dinner</h1>
            <p>Tender grilled chuck steak, soft corn tortillas,
                topped with onion & cilantro,
                and whatever other toppings sound good (Guacamole)!</p>
        </div>
        <div class="column">
            <img src="Assets\pilau.jpg" alt="Pilau">
            <h1>Pilau</h1>
            <h1>$8</h1>
        </div>
        <div class="column">
            <img src="Assets\choma.jpg" alt="Choma">
            <h1>Choma</h1>
            <h1>$8</h1>
        </div>
        
        <div class="column">
            <img src="Assets\rice.jpg" alt="Rice">
            <h1>Rice</h1>
            <h1>$8</h1>
        </div>
    </div>
</div>

    
<footer>
    <div class="container">
        <div class="footer-contents">
            <h3>Contact Us</h3>
            <p>Email:lowaewesi@gmail.com</p>
            <p>Phone:+254723641896</p>
            <p>Address: P.O BOX 23 KAKUMA</p>

        </div>
        <div class="footer-contents">
            <h3>Quick Links</h3>
            <ul class="list">
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html">Our Menu</a></li>
                <li><a href="About.html">About Us</a></li>
                
            </ul>
        </div>
        <div class="footer-contents">
            <h3>Follow Us</h3>
            <ul class="social-icons">
                <li><a href="https://www.facebook.com/ewesit.hunter"><i class="fa fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/LowaEwesit"><i class="fa fa-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/in/lowa-ewesit-975b37141/"><i class="fa fa-linkedin"></i></a></li>
                
            </ul>
        </div>
        
        
    </div>
    
    <div class="bottom-bar">
        <p>&copy;2024 Good Foods Restaurant. All rights reserved</p>
    </div>
    
</footer>

