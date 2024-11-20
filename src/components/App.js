import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";


function App() {
    return(
        <Router>
            <div>
                <nav>
                    <Link id="form-link" to="/">Section 1</Link>
                    <Link id="form-ref-link" to="/ref">Section 2</Link>
                    <Link id="form-state-link" to="/state">Section 3</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Form />} />
                    <Route path="/ref" element= { <FormRef />} />
                    <Route path="/state" element= {<FormState />} />
                </Routes>
            </div>



        </Router>
    );
}

export default App;