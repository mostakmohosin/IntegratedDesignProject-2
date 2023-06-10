import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import "../styles/Login.css"

function login() {
	return (
		<div>
			<Navbar />

			<div className='loginPage'>
				<div>
					<div class="wrapper">
						<h2>Donation Form</h2>
						<form action="" method="POST">

							<div class="input-box">
								<input className='textField' type="text" name="fullname" placeholder="Full Name" required />
								<i class="bx bx-user icon"></i>
							</div>
							<div class="input-box">
								<input type="text" name="nickname" placeholder="Nick Name" required className='textField' />
								<i class="bx bx-user icon"></i>
							</div>
							<div class="input-box">
								<input className='textField' type="email" placeholder="example@gmail.com" required
								/>
								<i className="icon"><EmailIcon /></i>
							</div>

							<div class="input-box">
								<input type="radio" id="male" name="gender" value="male" checked /><label for="male">Male <MaleIcon /></label>
								<input type="radio" id="female" name="gender" value="female" /> <label for="female">Female <FemaleIcon /></label>
							</div>

							<h4>Payment Details</h4>

							<div class="input-box">
								<input type="tel" name="number" placeholder="Card/Rocket/Bkash Number" required className='textField' /><i class="bx bx-credit-card icon"></i>
							</div>
							<div class="input-box">
								<input type="password" name="pin" placeholder="Card/Rocket/Bkash Pin Number" required className='textField' /><i className="icon"><PasswordIcon /></i>
							</div>
							<div class="input-box">
								<input type="number" name="amount" placeholder="Amount" className='textField' /><i class="bx bx-money icon"></i>
							</div>
							<div class="input-box">
								<button className='btnSub' type="submit" name="submit">PAY NOW</button>
							</div>


						</form><br /><br />
						<div className="social">
							<InstagramIcon /> <TwitterIcon /> <FacebookIcon />

						</div>
					</div>

				</div>
			</div>
			<Footer />
		</div>

	)
}

export default login