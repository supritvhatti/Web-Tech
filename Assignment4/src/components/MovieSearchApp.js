<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ChigariGo - Home</title>
  <style>
    body {
      font-family: 'Poppins', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #ffffff;
      color: #233d87;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    header {
      background-color: #233d87;
      color: #ffffff;
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo-banner {
      display: flex;
      align-items: center;
    }

    .logo-banner img {
      max-width: 50px;
      margin-right: 10px;
    }

    .logo-banner h1 {
      font-size: 1.5em;
      margin: 0;
    }

    nav {
      margin: 20px 0;
      text-align: center;
    }

    nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
    }

    nav ul li {
      margin: 0 10px;
    }

    nav ul li a {
      text-decoration: none;
      padding: 10px 20px;
      background-color: #2397c3;
      color: #ffffff;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    nav ul li a:hover {
      background-color: #ada4d1;
    }

    .content {
      flex-grow: 1;
      padding: 20px;
      text-align: center;
    }

    .banner {
      background-color: #ada4d1;
      margin: 20px 0;
      padding: 20px;
      border-radius: 10px;
    }

    .notices {
      background-color: #2397c3;
      color: #ffffff;
      padding: 15px;
      border-radius: 10px;
      margin-top: 20px;
      text-align: left;
    }

    .notices h3 {
      margin: 0 0 10px 0;
    }

    .footer {
      background-color: #233d87;
      color: #ffffff;
      padding: 20px;
      text-align: center;
    }

    .date-time {
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 0.9em;
    }

    .banner-carousel {
      position: relative;
      max-width: 1920px;
      margin: 20px auto;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    .carousel {
      display: flex;
      width: 300%; /* Adjust for number of images */
      transition: transform 0.5s ease-in-out;
    }

    .carousel img {
      width: 100%;
      flex: 1;
      height: 394px; /* Maintain the aspect ratio */
      object-fit: cover;
    }

    .carousel-dots {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 8px;
    }

    .carousel-dots span {
      width: 12px;
      height: 12px;
      background-color: #ada4d1;
      border-radius: 50%;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .carousel-dots span.active {
      background-color: #233d87;
    }
  </style>
</head>
<body>
  <header>
    <div class="logo-banner">
      <img src="GO.png" alt="ChigariGo Logo">
      <h1>ChigariGo</h1>
    </div>
    <div class="date-time" id="dateTime"></div>
  </header>

  <nav>
    <ul>
      <!--<li><a href="index.html">Login/Registration</a></li>-->
      <li><a href="student-pass.html">Student Card</a></li>
      <li><a href="recharge_history.html">Recharge History</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="route_map.html">Bus Route Map</a></li>
      <li><a href="booking.html">Book Tickets</a></li>
    </ul>
  </nav>

  <div class="content">
    <div class="banner">
      <h2>Welcome to ChigariGo!</h2>
      <p>Experience queue-less, seamless ticket booking and advance reservations with ChigariGo. Travel smarter!</p>
    </div>

    <!-- Carousel -->
    <div class="banner-carousel">
      <div class="carousel" id="carousel">
        <img src="hubli_banner_01.png" alt="Banner 1">
        <img src="hubli_banner_02.jpg" alt="Banner 2">
        <img src="hubli_banner_03.jpg" alt="Banner 3">
      </div>
      <div class="carousel-dots" id="carouselDots"></div>
    </div>

    <div class="notices">
      <h3>Recent Notices</h3>
      <ul>
        <li>New bus station added for Sanjeevini Park.</li>
        <li>Drivers required. Apply now!</li>
        <li>Employees required. Vacancies open for various roles.</li>
      </ul>
    </div>
  </div>

  <footer class="footer">
    <p>ChigariGo aims to reduce queues, simplify ticket bookings, and offer hassle-free travel solutions. Your convenience is our priority.</p>
    <p>© 2024 ChigariGo. All rights reserved.</p>
  </footer>

  <script>
    function updateDateTime() {
      const now = new Date();
      const dateTimeString = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
      document.getElementById('dateTime').textContent = dateTimeString;
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();

    // Carousel Functionality
    const carousel = document.getElementById('carousel');
    const dotsContainer = document.getElementById('carouselDots');
    const images = carousel.querySelectorAll('img');
    const totalSlides = images.length;
    let currentSlide = 0;

    // Create dots
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('span');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }

    function goToSlide(index) {
      carousel.style.transform = `translateX(-${index * 100}%)`;
      dotsContainer.childNodes.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
      currentSlide = index;
    }

    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      goToSlide(currentSlide);
    }, 3000); // Change every 3 seconds
  </script>
</body>
</html>
