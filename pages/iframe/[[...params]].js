import Head from "next/head";
import IframeContent from "../../components/iframe_content";
import { useRouter } from "next/router";
import { haveSignaturesReachedTarget } from "../_counter_utils";

export default function Iframe({ signaturesReached }) {
  const router = useRouter();

  let format = null;
  let color = null;
  if (router.isReady) {
    format = "banner";
    color = "dark";
    if ("params" in router.query) {
      const { params } = router.query;
      if (params.length > 0) {
        format = params[0];
        if (params.length > 1 && format === "banner") {
          color = params[1];
        }
      }
    }
  }

  return (
    <>
      <Head>
        <title>
          Désolidarisation des revenus du conjoint pour le paiement de
          l'Allocation aux Adultes Handicapés (AAH)
        </title>
      </Head>

      <main role="main">
        {format && (
          <IframeContent
            format={format}
            color={color}
            signaturesReached={signaturesReached}
          />
        )}
      </main>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { params: [] } },
      { params: { params: ["block"] } },
      { params: { params: ["banner", "dark"] } },
      { params: { params: ["banner", "light"] } },
    ],
    fallback: false,
  };
}

export const getStaticProps = async () => {
  let signaturesReached = await haveSignaturesReachedTarget();
  return {
    props: { signaturesReached: signaturesReached },
  };
};
