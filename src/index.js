import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { site } from './state/site/site';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider site={site}> {/* set context bc of dispatch so that only the children can have access */}
                <App /> {/* give App access to context */}
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);