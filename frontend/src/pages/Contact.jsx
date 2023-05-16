import React from "react";
import "../styles/Contact.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    
<div>
    <section id="about-home">
        <h2>Contact Us/</h2>
    </section>

    <section id="contact">
        <div class="getin">
            <h2>Get in touch</h2>
            <p>Looking for help? Fill the form and start a new adventure.</p>

            <div class="details">
                <h3>Headquater</h3>
                <div>
                    <i class="far fa-house get"></i>
                    <p>CHARITY BANGLADESH, House No 98, Banani Heights, Rd No-5, Dhaka 1213</p>
                </div>

                <h3>Phone</h3>
                <div>
                    <i class="fas fa-phone-alt get"></i>
                    <p><a href="tel:+8802-9883439">+8802-9883439</a></p>
                </div>

                <h3>Support</h3>
                <div>
                    <i class="fas fa-envelope get"></i>
                    <p><a href="mailto:charity@gmail.com">charity@gmail.com</a></p>
                </div>
                <h3>Follow Us</h3>
                <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
            </div>
        </div>
        <div class="form">
            <h4>Let's Connect</h4>

            <div class="form-row">
            <input name="name" placeholder="Enter Full Name..." type="text" />
            <input name="email" placeholder="Enter Email..." type="text" />

            </div>
            <div class="form-col">
            <input name="name" placeholder="Enter Subjects" type="text" />
            </div>
            <div class="form-col">
                <textarea name="" id="" cols="30" rows="10" placeholder="How can we Help?"></textarea>
            </div>
            <div class="form-col">
                <button>Send Message</button>
            </div>


        </div>
    </section>
    
    <section id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.72602687478167!2d90.37805277876363!3d23.78721622737262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c73a2e63a88b%3A0x714fc9d2961a84ae!2sGreen%20University%20Lake!5e0!3m2!1sen!2sbd!4v1677501458578!5m2!1sen!2sbd"style={{ border: '1px solid #ccc' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
    </div>
  );
}

export default Contact;