import React from "react";

//include images into your bundle
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Navbar } from "../Navbar.jsx";

//create your first component
let year = new Date().getFullYear();
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-12">
						<Jumbotron />
					</div>
				</div>
				<div className="row pb-5">
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://commandcenter.sukoharjokab.go.id/peta/assets/frontend/img/our-office-8.jpg"
							cardTitle="Card Title"
							cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt malesuada suscipit. Proin magna massa, pharetra quis fringilla in, vehicula at lectus. Pellentesque faucibus gravida lorem in blandit."
							buttonLabel="Find Out More!"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://commandcenter.sukoharjokab.go.id/peta/assets/frontend/img/our-office-8.jpg"
							cardTitle="Card Title"
							cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt malesuada suscipit. Proin magna massa, pharetra quis fringilla in, vehicula at lectus. Pellentesque faucibus gravida lorem in blandit."
							buttonLabel="Find Out More!"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://commandcenter.sukoharjokab.go.id/peta/assets/frontend/img/our-office-8.jpg"
							cardTitle="Card Title"
							cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt malesuada suscipit. Proin magna massa, pharetra quis fringilla in, vehicula at lectus. Pellentesque faucibus gravida lorem in blandit."
							buttonLabel="Find Out More!"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://commandcenter.sukoharjokab.go.id/peta/assets/frontend/img/our-office-8.jpg"
							cardTitle="Card Title"
							cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt malesuada suscipit. Proin magna massa, pharetra quis fringilla in, vehicula at lectus. Pellentesque faucibus gravida lorem in blandit."
							buttonLabel="Find Out More!"
						/>
					</div>
				</div>
			</div>
			<footer className="footer py-3 bg-dark">
				<div className="container">
					<p className="text-white text-center">
						Copyright @ YourWebsite - {year}
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Home;