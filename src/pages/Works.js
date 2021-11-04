import React from "react";
//import Projects from "../components/Projects";
import { Link } from "react-router-dom";

const Works = () => {
  const data = {
    Platon: {
      title: "Le challenge",
      description:
        "Platon a décidé de se lancer à l'époque malgré une crise économique difficile. Nous avons été derrière eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence.",
    },
    Solane: {
      title: "Solane est le premier vendeur de fraises du Poitou-Charentes",
      description:
        "Et c'est grâce à nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du marché ont fonctionné.",
    },
    Sedal: {
      title:
        "Sedal, l'entreprise qui a commencé tout en bas... Et qui est toujours tout en bas",
      description:
        "Malgré nos conseils et notre site web créé sur Wix, Sedal semble ne pas vouloir décoller. Mais comme un grand homme et une grande femme l'ont dit, les derniers seront les premiers.",
    },
  };

  return (
    <ul>
      <br />
      <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
      <br />
      <p>
        Découvrez pas à pas comment nous avons été présent pour lancer vos
        marques préférées.
      </p>
      <br />
      {Object.entries(data).map(([slug, { title, description }]) => (
        <li key={slug}>
          <Link to={`/works/${slug}`}>
            <h3>{slug}</h3>
          </Link>
          <p>{title}</p>
        </li>
      ))}
    </ul>
  );
};

export default Works;
