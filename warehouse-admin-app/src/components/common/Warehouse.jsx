import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './Header';
import { Sidebar } from './Slidebar';

export const Warehouse = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Header />
                <Sidebar />
                <Content />
                <Footer />
            </BrowserRouter>
        </Fragment>
    )
}

export default Warehouse;


