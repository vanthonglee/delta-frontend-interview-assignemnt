import React from "react";

import { Container, Header, Main, Footer, Cards } from "@components";
import { Movies } from "@components/movies";
import Search from "@components/search";

const Home: React.FC = () => {
    return (
        <Container>
            <Header />
            <Movies />
            <Footer />
        </Container>
    );
};

export default Home;
