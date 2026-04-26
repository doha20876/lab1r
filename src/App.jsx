import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';

function App() {
  const utilisateur = {
    nom: 'Doha',
    photo: '/user.png',
  };

  return (
    <div>
      <HelloWorld />

      <Greeting prenom="Doha" />
      <Greeting prenom="Sara" />
      <Greeting prenom="Yasmine" />

      <Profil utilisateur={utilisateur} taille={150} />

      <Voiture marque="BMW" modele="X5" couleur="Noir" />
      <Voiture marque="Audi" modele="A3" couleur="Blanc" />
      <Voiture marque="Toyota" modele="Yaris" couleur="Rouge" />

      <ListeCourses elements={["Pain", "Lait", "Oeufs"]} />
      <ListeCourses elements={["Pomme", "Banane", "Orange"]} />
    </div>
  );
}

export default App;