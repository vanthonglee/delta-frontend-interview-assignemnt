import clsx from "clsx";
import React from "react";
import styles from "../../styles/movies.module.scss";
import { MovieCard } from "./MovieCard";

export const Movies = (): JSX.Element => {
    return (
        <section className="flex-1 lg:container my-8 mx-auto">
            <div
                className={clsx(
                    [styles.movies__list],
                    "grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5",
                )}
            >
                {[...Array(100)].map((_, i) => (
                    <MovieCard key={`mvc-${i}`} />
                ))}
            </div>
        </section>
    );
};
