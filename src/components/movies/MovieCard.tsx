import React from "react";

export const MovieCard = (): JSX.Element => {
    return (
        <div className="w-full  flex flex-col p-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
                <div className="aspect-mv-banner">
                    <div
                        className="bg-cover h-full"
                        style={{
                            backgroundImage:
                                "url(https://images.unsplash.com/photo-1523978591478-c753949ff840?w=900)",
                        }}
                    />
                </div>
                <div className="p-4 flex-1 flex flex-col" style={{}}>
                    <h3 className="mb-4 text-2xl">My heading</h3>
                    <div className="mb-4 text-grey-darker text-sm flex-1">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.{" "}
                        </p>
                    </div>
                    <a
                        href="#"
                        className="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide"
                        style={{}}
                    >
                        Twitter
                    </a>
                </div>
            </div>
        </div>
    );
};
