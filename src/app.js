import react from "react";
import reactdom from "react-dom/client";
import Home from "./components/Home";
import Rest from "./components/Rest";
import {BrowserRouter, Route, Routes} from "react-router";
import Restmenu from "./components/Restmenu";
import Searchfood from "./components/Searchfood";
import Secondaryhome from "./components/Secondaryhome";
import {store} from "./store/stores";
import {Provider} from "react-redux";
import Checkout from "./components/Checkout";
function App(){
    return (
         <>
         <Provider store={store}>
        <BrowserRouter>
        <Routes>

            <Route path="/" element={<Home/>}></Route>
            <Route element={<Secondaryhome></Secondaryhome>}>
            <Route path="/resturant" element={<Rest/>}></Route>
            <Route path="/city/delhi/:id" element={<Restmenu></Restmenu>}></Route>
            <Route path="/city/delhi/:id/search" element={<Searchfood></Searchfood>}></Route>
            </Route>
            <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
        </Routes>
        </BrowserRouter>
        </Provider>
         </> 
    )
}
reactdom.createRoot(document.getElementById("root")).render(<App/>);

