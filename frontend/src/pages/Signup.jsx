import React from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyIcon from '@mui/icons-material/Key';
import "../styles/Login.css"

function Signup() {
  return (
    <div className='loginPage'>
		<div class="wrapper">
			<h2>SIGN UP</h2>
			
			<form action="">
				<div class="input-group">
					<div class="input-box">
						
						<input className='textField' type="text" placeholder="Enter your Full Name" required/>
						<i class="icon"><PersonIcon /></i>
					</div>
					
					<div class="input-box">
						
						<input className='textField' type="text" placeholder="Enter your User Name" required/>
						<i class="icon"><AccountCircleIcon /></i>
					</div>
					
					<div class="input-box">	
						<input className='textField' type="email" placeholder="example@gmail.com" required/>
						<i class="icon"><EmailIcon /></i>
					</div>
					
					<div class="input-box">						
						<input className='textField' type="number" placeholder="Enter Your Phone Number" required/>
						<i class="icon"><PhoneIcon /></i>
					</div>
					
					<div class="input-box">
                    <input type="radio" id="male" name="gender" value="male"/><label for="male">Male <MaleIcon /></label>
                    <input type="radio" id="female" name="gender" value="female"/> <label for="female">Female <FemaleIcon /></label>
					</div>
					
					<div class="input-box">
						<input className='textField' type="password" placeholder="Enter Your Password" required/><i class="icon"><KeyIcon /></i>
					</div>
					
					<div class="input-box">
						<input className='textField' type="password" placeholder="Confirm Password" required/><i class="icon"><KeyIcon /></i>
					</div>
					<div class="input-box">
						<button type="submit">Registration</button>
					</div><br/>
                    <p className='textRead'>Already have an account? <Link to="/login">Login</Link> </p>
					<p>* By signing up, you agree to our Terms of Use and to receive our emails & updates and acknowledge you've read our Privacy Policy.</p>

				</div>
			</form><br/>
			<div class="social">
            <InstagramIcon /> <TwitterIcon /> <FacebookIcon />
			</div>
		</div>
		
	</div>
  )
}

export default Signup