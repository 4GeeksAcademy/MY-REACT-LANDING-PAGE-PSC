import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import Footer from "./Footer";


const Home = () => {
	return (
		<>
			<Navbar 
				navTittle= "MY LADING PAGE"
				navHome ="Home"
				navFeatures= "Novedades"
				navPricing= "Actualizaciones"
				/>
		
			<Container />

			<Footer 
			footerText= "Todos los derechos y los izquierdos liberados - Proyecto 2025 - Alumno 4Geeks - PSC"
			/>
		</>



	);
};

export default Home;