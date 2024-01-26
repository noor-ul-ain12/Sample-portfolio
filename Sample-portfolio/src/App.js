import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import AllProjects from "./components/AllProjects";

function App() {
    return (<div>
            <Header/>
                <Routes>
                    <Route path={'/'} element={<WelcomePage/>}/>
                    <Route path={'/all-projects'} element={<AllProjects/>}/>
                    <Route path={'/Footer'} element={<Footer/>}/>
                </Routes>
            <Footer/>
        </div>);
}

export default App;
