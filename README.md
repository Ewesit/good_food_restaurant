
    <div class="cover-photo">
        
        <h1 class="cover-text">Welcome to Good Food Restaurant</h1>
        <p class="cover-subtext">View Our Menu</p>
    </div>
    

    <div class="content">
        <div class="img-column">
            <img src="Assets/burger3.jpg" alt="Image">
        </div>
        <div class="text-column">
            <h2>Delicious Burgers</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>

    <hr>

    <div class="content">
        <div class="img-column">
            <img src="Assets/burger3.jpg" alt="Image">
        </div>
        <div class="text-column">
            <h2>Delicious Burgers</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>

    style

    .cover-photo {
  width: 100%;
  height: 300px; /* Adjust height as needed */
  background-image: url('Assets/cover.jpg'); /* Insert your cover photo URL */
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.cover-text {
  font-size: 36px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}
.cover-subtext {
  font-size: 18px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

/* style content in index page */
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px; /* Adjust the padding as needed */
  flex-direction: row;
  background-color: #E8E8E5;
  text-align: center; /* Center text within columns */
}

.text-column {
  flex: 1;
  padding: 20px;
  margin-right: 10px; /* Adjust the margin to bring the columns closer */
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center; /* Center text within the column */
}

.text-column h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333; /* Set the color of the title */
}

.text-column p {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

.img-column {
  padding: 20px;
  flex: 1;
  margin-left: 10px; /* Adjust the margin to bring the columns closer */
}

.img-column img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  max-height: 300px; /* Adjust the max-height as needed */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}


/////////
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact US</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap" rel="stylesheet">

</head>
<body>
    <!--navbar-->
    <header>
        
        <img class="logo" src="Assets\logo3.png" alt="Logo"> <!--logo-->
        <nav>
            <ul class="nav_links" type="none">
                <li><a href="index.html">Home</a></li>
                <li><a href="menu.html">Our Menu</a></li>
                <li><a href="About.html">About Us</a></li>
            </ul>
        </nav>
        <a class="cta" href="contact.html"><button>Contact US</button></a>
    
        
    </header>
    
    

    <div class="form-container">
        
        <div class="image-container">
            <img src="Assets\chips2.jpg" alt="Chips">
        </div>
        
        <form action="#" method="POST">
            <h1>Contact Us</h1>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required>
            
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            
            <button type="submit">Submit</button>
        </form>
    </div>


    <footer>
        <div class="footer-container">
            <div class="logo">
                <img src="Assets\logo3.png" alt="Logo">
            </div>
            <nav class="footer-nav">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="menu.html">Menu</a></li>
                    <li><a href="About.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </nav>
            <div class="contact-info">
                <p>123 Main Street, City</p>
                <p>Phone: 123-456-7890</p>
                <p>Email: info@example.com</p>
            </div>
        </div>
        
        <hr>

        <div class="copyright">
            <p>&copy; 2022 Good Food Restaurant. All Rights Reserved.</p>
        </div>
    </footer>
    
</body>
</html>
////
/* style contact form */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px; /* Add padding to the form container */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}



.image-container {
  flex: 1;
  max-width: 50%; /* Set a maximum width for the image container */
  padding: 20px;
  text-align: center;
  height: 100%; /* Set the height to 100% */
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Fit the image proportionally inside the container */
  border-radius: 8px;
}

.form-container form {
  flex: 1;
  max-width: 50%; /* Set a maximum width for the form container */
  padding: 20px;
  border-radius: 8px;
  background-color: #d6e8f5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: 20px; /* Add margin to create space between image and form */
}

.form-container form h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-container form label,
.form-container form input,
.form-container form textarea {
  display: block;
  margin-bottom: 10px;
}

.form-container form input,
.form-container form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-container form button {
  padding: 10px 20px;
  background-color:#E0622D;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-container form button:hover {
  background-color: #ffba08;
}

textarea:focus {
  border-color: #ffba08;
}