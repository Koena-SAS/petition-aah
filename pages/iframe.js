import Head from "next/head";
import IframeContent from "../components/iframe_content";

export default function Iframe() {
  return (
    <>
      <Head>
        <title>
          Désolidarisation des revenus du conjoint pour le paiement de
          l'Allocation aux Adultes Handicapés (AAH)
        </title>
      </Head>

      <main role="main">
        <IframeContent />
      </main>
    </>
  );
}
