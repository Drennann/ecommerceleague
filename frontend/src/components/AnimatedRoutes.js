import {Routes, Route, useLocation} from "react-router-dom";
import Main from "../pages/Main.js";
import Buy from "../pages/Buy.js";
import { AnimatePresence } from "framer-motion";
import Error from "../pages/Error.js";

export default function AnimatedRoutes() {

  const location = useLocation();

  return (
    <div>
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/items" element={<Buy/>}></Route>
                <Route path="*" element={<Error/>}></Route>
            </Routes>
        </AnimatePresence>
    </div>
  );
}
