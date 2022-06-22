import React from "react";

import { Logo } from "@components";
import Link from "next/link";

export const Header: React.FC = () => {
    return (
        <h1 className="text-center bg-gray-800 text-white py-4 text-2xl">
            <Link href="/movies">
                <a>Search Movies</a>
            </Link>
        </h1>
    );
};
