import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Error404componant from "../components/Error404Componant";
import ImageGallery from "../components/ImageGallery";
import Note from "../components/Note";
import Tags from "../components/Tags";
import Annonce from "../assets/data/logements";
import { useParams } from "react-router-dom";
import Dropmenu from "../components/Dropmenu";

const FicheLogement = () => {
	const { annonceid } = useParams();
	const logementID = annonceid;
	const currentLogement = Annonce.find((item) => item.id === logementID);

	if (!currentLogement) {
		return <Error404componant />;
	}

	return (
		<main>
			<div className="content">
				<header>
					<Header />
				</header>
				<ImageGallery
					pictures={currentLogement.pictures}
					title={currentLogement.title}
				></ImageGallery>
				<div className="fiche-logement-container">
					<div className="user-profil">
						<div className="username-img">
							<img
								src={currentLogement.host.picture}
								alt={currentLogement.title}
							/>
							<h3>{currentLogement.host.name}</h3>
						</div>
						<Note note={currentLogement.rating} />
					</div>
					<div className="logementtexte">
						<h2>{currentLogement.title}</h2>
						<p>{currentLogement.location}</p>
						<Tags tags={currentLogement.tags} />
					</div>
				</div>
				<div className="Dropmenu-container">
					<Dropmenu
						title={"Description"}
						items={[currentLogement.description]}
					/>
					<Dropmenu title={"Équipements"} items={currentLogement.equipments} />
				</div>
			</div>
			<footer>
				<Footer />
			</footer>
		</main>
	);
};
export default FicheLogement;
