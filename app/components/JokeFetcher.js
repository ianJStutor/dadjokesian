"use client";

import { useEffect, useState } from "react";
import { saveJoke } from "../data/joke/actions";

export default function JokeFetcher({ user }) {
    const [joke, setJoke] = useState("");
    async function fetchJoke() {
        try {
            const response = await fetch("https://icanhazdadjoke.com/", {
                headers: {
                    Accept: "application/json"
                }
            });
            const { joke } = await response.json();
            setJoke(joke);
        } catch (e) {
            console.error(e);
        }
    }
    useEffect(() => {
        fetchJoke();
    }, []);

    const saveJokeText = user ? "Save Joke" : "Login to save joke";

    return (
        <div>
            <p className="text-lg md:text-xl lg:text-2xl p-5">
                {joke || "Loading joke..."}
            </p>
            <menu className="flex justify-center gap-5">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={fetchJoke}
                >
                    Regenerate
                </button>
                <button
                    disabled={!user}
                    onClick={async () => {
                        if (!user) return;
                        await saveJoke(joke);
                        alert("Joke saved!");
                    }}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    {saveJokeText}
                </button>
            </menu>
        </div>
    );
}
