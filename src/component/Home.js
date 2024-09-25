import React from 'react';

function Home() {
    return (
        <div className="container content">
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <a href="/invoices">
                        <img className="logoConstruction" src="/Images/reactInv.png" alt="Under Construction Logo" />
                    </a>
                    <h1>
                        Please check out the <a href="/invoices">Invoices Tutorial</a>.
                    </h1>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    );
}

export default Home;
