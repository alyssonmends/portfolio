import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Skill from "../../components/Skills/Skill";
import Work from "../../components/Works/Work";
import Layout from "../../layout/Layout";


function Index() {

  return <>
        <Layout>
          <Banner/>
          <About/>
          <Skill/>
          <Work/>
        </Layout>
  </>
}

export default Index;