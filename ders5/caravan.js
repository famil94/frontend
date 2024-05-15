let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}


const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');  // User modelinizi MongoDB üçün Mongoose ilə yazmalısınız

const app = express();
app.use(express.json());

// İstifadəçi Qeydiyyatı
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8);

  const user = new User({
    username,
    email,
    password: hashedPassword
  });

  await user.save();
  res.status(201).send("Qeydiyyat tamamlandı!");
});

// İstifadəçi Girişi
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(401).send("E-poçt və ya şifrə yanlışdır!");
  }

  const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '24h' });
  res.status(200).send({ token });
});

app.listen(3000, () => console.log('Server 3000-ci portda işləyir.'));


let cart = [];

function addToCart(productId, date) {
  const product = { productId, date };
  cart.push(product);
  console.log('Məhsul sebete əlavə edildi:', product);
}

function checkout() {
  // Sifarişin serverə göndərilməsi üçün AJAX və ya fetch istifadə edin
  console.log('Sifarişiniz işlənir...');
}
function addReservation() {
    const date = document.getElementById('reservationDate').value;
    console.log('Rezervasiya tarixi:', date);
    // Burada rezervasiya məlumatını serverə göndərmək üçün AJAX və ya fetch istifadə edin
  }

  
  let slideIndex = 0;
carousel();

function carousel() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Şəkillər hər 2 saniyədə dəyişir
}
