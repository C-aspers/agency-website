import React from "react";
import { useParams } from "react-router-dom";

const Projects = () => {
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

  const { slug } = useParams();

  const project = data[slug];

  const { title, description } = project;

  return (
    <div className="project">
      <br />
      <h2>{title}</h2>
      <br />
      <p>{description}</p>
    </div>
  );
};

export default Projects;
