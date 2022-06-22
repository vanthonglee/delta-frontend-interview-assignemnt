import { StarIcon } from "@components/icons";
import Link from "next/link";
import React from "react";

type MovieProps = {
    imdbID: string;
    imgUrl?: string;
    title?: string;
};

export const MovieCard = ({
    imgUrl,
    title,
    imdbID,
}: MovieProps): JSX.Element => {
    return (
        <div className="w-full  flex flex-col p-3">
            <div className="bg-neutral shadow-xl rounded-lg overflow-hidden flex-1 flex flex-col">
                <Link href={`/movies/${imdbID}`}>
                    <a className="aspect-mv-banner" title={title}>
                        {imgUrl !== "N/A" ? (
                            <div
                                className="bg-cover h-full"
                                style={{
                                    backgroundImage: `url(${imgUrl})`,
                                }}
                            />
                        ) : (
                            <div className=" h-full bg-gray-300 animate-pulse" />
                        )}
                    </a>
                </Link>
                <div className="p-4 flex-1 flex flex-col" style={{}}>
                    <h3 className="mb-4 text-2xl line-clamp-2">
                        <Link href={`/movies/${imdbID}`}>
                            <a title={title}>{title}</a>
                        </Link>
                    </h3>
                    <div
                        className="flex items-center text-xs text-grey hover:text-red uppercase no-underline tracking-wide"
                        style={{}}
                    >
                        <StarIcon />{" "}
                        <p>
                            4<span className="opacity-50">/10</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
