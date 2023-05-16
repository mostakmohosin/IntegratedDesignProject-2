import React from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import "../styles/Login.css"

function login() {
  return (
    <div className='loginPage'>
      <div>
		<div class="wrapper">
			<h2>SIGN IN</h2>
			
			<form action="">
				<div class="input-group">
					

					<div class="input-box">	
						<input className='textField' type="email" placeholder="example@gmail.com" required/>
						<i className="icon"><EmailIcon /></i>
					</div>
				
					<div class="input-box">
						<input className='textField' type="password" placeholder="Enter Your Password" required/>
            <i className="icon"><PasswordIcon /></i>
					</div>
					
					<p className='textRead'>If you don't have an account? <Link to="/signup">Click here</Link> </p>
					<div class="input-box">
						<button type="submit">Login</button>
					</div><br/>
					<p>* By signing up, you agree to our Terms of Use and to receive our emails & updates and acknowledge you've read our Privacy Policy.</p>

				</div>
			</form><br/>
			<div className="social">
      <InstagramIcon /> <TwitterIcon /> <FacebookIcon />
				
			</div>
		</div>
		
	</div>
    </div>
  )
}

export default login