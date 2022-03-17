import React from "react";
import { useParams } from "react-router";

export default function Favourites() {
    let { libraryItems } = useParams();
    libraryItems = Object.keys(JSON.parse(libraryItems));
    return (
        <div>
            {libraryItems.map(o =>
                <ul>
                    <li>{o}</li>
                </ul>
            )}
        </div>
    );
}