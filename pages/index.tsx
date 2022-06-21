import React from "react";

import { Container, Header, Main, Footer, Cards } from "@components";

const Home: React.FC = () => {
    return (
        <Container data-theme="dark">
            <Header />
            <Main />
            <Cards />
            <Footer />
        </Container>
    );
};

export default Home;
