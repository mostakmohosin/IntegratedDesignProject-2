import React from 'react'
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
    <div className='loginPage'>
    
	
		<div class="wrapper">
			<h2>Donation Form</h2>
			<form action="" method="POST">
				
				<div class="input-group">
					<div class="input-box">
						<input className='textField' type="text" name="fullname" placeholder="Full Name" required/>
						<i class="bx bx-user icon"></i>
					</div>
					<div class="input-box">
						<input type="text" name="nickname" placeholder="Nick Name" required className='textField'/>
						<i class="bx bx-user icon"></i>
					</div>
					<div class="input-box">
						<input type="email" name="email" placeholder="example@gmail.com" required className='textField'/>
						<i class="bx bx-envelope icon"></i>
					</div>
					<h4>Date of Birth</h4>
					<div class="input-box">
						
						<input type="date" name="dob" required className='textField'/>
					</div>
					<h4>Gender:</h4>
					<div class="input-box">
                    <input type="radio" id="male" name="gender" value="male" checked/><label for="male">Male <MaleIcon /></label>
                    <input type="radio" id="female" name="gender" value="female"/> <label for="female">Female <FemaleIcon /></label>
					</div>

					<h4>Payment Details</h4>
					<div class="input-box">
                        <input type="radio" id="male" name="gender" value="male" checked/><label for="c1">Credit Card <MaleIcon /></label>
                        <input type="radio" id="female" name="gender" value="female"/> <label for="c2">Rocket <FemaleIcon /></label>
					</div>
					<div class="input-box">
						<input type="tel" name="number" placeholder="Card/Rocket/Bkash Number" required className='textField'/><i class="bx bx-credit-card icon"></i>
					</div>
					<div class="input-box">
						<input type="password" name="pin" placeholder="Card/Rocket/Bkash Pin Number" required className='textField'/><i className="icon"><PasswordIcon /></i>
					</div>
					<div class="input-box">
						<input type="number" name="amount" placeholder="Amount" className='textField'/><i class="bx bx-money icon"></i>
					</div>
					<div class="input-box">
						<button type="submit" name="submit">PAY NOW</button>
					</div>

				</div>
			</form><br/><br/>
			<div className="social">
      <InstagramIcon /> <TwitterIcon /> <FacebookIcon />
				
			</div>
		</div>
		
	</div>
    
  )
}

export default login