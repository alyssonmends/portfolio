import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


function Layout({children}:any) {

    return <>
        <Header title={"header"}/>
            {children}
        <Footer/>
    </>
  }
  
  export default Layout;