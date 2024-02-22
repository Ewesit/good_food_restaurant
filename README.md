
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