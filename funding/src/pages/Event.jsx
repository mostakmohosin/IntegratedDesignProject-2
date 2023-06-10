import React from 'react'
import "../styles/Event.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Event() {
	return (
		<div>
			<Navbar />
			<section id="about-home">
				<h2>Social Events/</h2>
			</section>
			<div id='eventsPage'>

				<div className='headline'>
					<h1>What We Are Doing</h1>
					<p>We Arrange Many Social Events For Charity Donations</p>
				</div>

				<div class="events-container">
					<div class="event-card">
						<img src="https://picsum.photos/200" alt="Event Image" />
						<div class="event-details">
							<h3><a href="">Donation is Hope</a></h3>
							<p><strong>Date:</strong> 25 June, 2023</p>
							<p><strong>Time:</strong> 2:00 PM - 4:00 PM</p>
							<p><strong>Location:</strong> 123 Main St, Anytown</p>
						</div>
					</div>

					<div class="event-card">
						<img src="https://picsum.photos/200" alt="Event Image" />
						<div class="event-details">
							<h3><a href="">Donation is Hope</a></h3>
							<p><strong>Date:</strong> 27 June, 2023</p>
							<p><strong>Time:</strong> 6:00 PM - 8:00 PM</p>
							<p><strong>Location:</strong> 456 Oak St, Anytown</p>
						</div>
					</div>

					<div class="event-card">
						<img src="https://picsum.photos/200" alt="Event Image" />
						<div class="event-details">
							<h3><a href="">Donation is Hope</a></h3>
							<p><strong>Date:</strong> 30 June, 2023</p>
							<p><strong>Time:</strong> 10:00 AM - 12:00 PM</p>
							<p><strong>Location:</strong> 789 Maple Ave, Anytown</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />

		</div>
	)
}

export default Event