import { StarIcon } from "@components/icons";
import React from "react";

export const MovieCard = (): JSX.Element => {
    return (
        <div className="w-full  flex flex-col p-3">
            <div className="bg-neutral shadow-xl rounded-lg overflow-hidden flex-1 flex flex-col">
                <a className="aspect-mv-banner" href="#">
                    <div
                        className="bg-cover h-full"
                        style={{
                            backgroundImage:
                                "url(https://images.unsplash.com/photo-1523978591478-c753949ff840?w=900)",
                        }}
                    />
                </a>
                <div className="p-4 flex-1 flex flex-col" style={{}}>
                    <h3 className="mb-4 text-2xl">
                        <a href="#">My heading</a>
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
