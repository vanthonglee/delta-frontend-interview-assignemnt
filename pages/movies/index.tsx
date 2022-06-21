import React from "react";

import { Container, Header, Main, Footer, Cards } from "@components";
import { Movies } from "@components/movies";
import Search from "@components/search";

const Home: React.FC = () => {
    return (
        <Container>
            <Header />
            {/* Search Input */}
            <section className="flex justify-center my-5">
                <Search />
            </section>
            <Movies />
            <Footer />
        </Container>
    );
};

export default Home;
