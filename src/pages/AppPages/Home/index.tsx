import Layout from "../../../components/LayoutPage";

export default function HomePage() {
  return (
    <Layout title="Bem vindo ao Ecoleta" auth={true}>
      <h2>Locais de Coleta no mapa</h2>
    </Layout>
  );
}
