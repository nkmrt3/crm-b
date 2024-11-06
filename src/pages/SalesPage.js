import React, { useState } from "react";
import "./SalesPage.css";
import Navbar from "../components/Navbar";


function SalesPage() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="sales-page">

                <div className="sales-content">
                    <img src="/images/sales-logo.png" alt="sales Logo" />
                    <h1>SALES</h1>
                    <div className="sales-buttons">
                        <button>ADD OPPORTUNITY</button>
                        <button>ADD CUSTOMER</button>
                        <button>MAKE TEAM</button>
                        <button>ADD TASK</button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default SalesPage;