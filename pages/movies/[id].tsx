import React, { ReactElement } from "react";

import { Container, Header, Main, Footer, Cards } from "@components";
import { Movies } from "@components/movies";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { StarIcon } from "@components/icons";

const MovieDetailPage = ({ movie }): JSX.Element => {
    const router = useRouter();

    return (
        <Container>
            <Header />
            <button onClick={() => router.back()} className="btn glass">
                Back
            </button>

            <section className="lg:max-w-5xl my-8 mx-auto grid grid-cols-3 gap-x-6">
                <div className="aspect-mv-banner">
                    <div
                        className="bg-cover h-full"
                        style={{
                            backgroundImage: `url(${movie.Poster})`,
                        }}
                    />
                </div>
                <div className="col-span-2">
                    <div className="grid">
                        <div>
                            <h1 className="text-4xl">{movie.Title}</h1>
                        </div>
                        <div className="text-sm opacity-70 flex items-center">
                            {movie.Runtime} | {movie.Value} {"   "}
                            <StarIcon style={{ fontSize: "14px" }} />{" "}
                        </div>
                        <p className="text-justify pr-2">${movie.Plot}</p>
                        <hr className="my-6" />
                        <div>
                            <div className="flex">
                                <div className="w-[100px]">Genre:</div>
                                <div className="w-2/3 ">
                                    Animation, Action, Adventure
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-[100px]">Director:</div>
                                <div className="w-2/3 ">Kunihiko Yuyama</div>
                            </div>
                            <div className="flex">
                                <div className="w-[100px]">Director:</div>
                                <div className="w-2/3 ">Kunihiko Yuyama</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Container>
    );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getServerSideProps({ params }) {
    const id = params.id;
    // Fetch data from external API
    const response = await fetch(
        `http://www.omdbapi.com/?apikey=b9bd48a6&i=${id}`,
    );
    const movie = await response.json();

    // Pass data to the page via props
    return { props: { movie } };
}

export default MovieDetailPage;
