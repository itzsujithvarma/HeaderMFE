import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";

const mount = el => {
    const root = createRoot(el);
    root.render(
        <React.Fragment>
            <Header items={[]} showCart = {()=>{}}/>
        </React.Fragment>
    );
}

if (process.env.NODE_ENV === 'development') {
    const el = document.getElementById("root");
    if (el) {
        mount(el);
    }
}