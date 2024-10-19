import React from "react";
import iNoteBook from "../assets/bg png/inotebook.png";
import textUtils from "../assets/bg png/textutils.png";
import chatApp from "../assets/bg png/chatapp.png";
import newsApp from "../assets/bg png/newsapp.png";
import spotifyclone from "../assets/bg png/spotify.png";
import alramclockapp from "../assets/bg png/alram clock.png";
import serviwo from "../assets/serviwo.png";

const Portfolio = () => {
    const portfolios = [
        {
            id: 0,
            src: serviwo,
            href: "https://serviwo-official.vercel.app",
            code: "https://github.com/Ramswarup-Sharma",
            // about: "ShortNotebook is a React Application for managing personal notes on the cloud"
        },
        {
            id: 1,
            src: iNoteBook,
            href: "https://short-notes-book.vercel.app",
            code: "https://github.com/Ramswarup-Sharma",
            // about: "ShortNotebook is a React Application for managing personal notes on the cloud"
        },
        {
            id: 2,
            src: newsApp,
            href: "https://github.com/Ramswarup-Sharma",
            code: "https://github.com/Ramswarup-Sharma",
            // about: "ShortNotebook is a React Application for managing personal notes on the cloud"
        },
        {
            id: 3,
            src: chatApp,
            href: "https://github.com/Ramswarup-Sharma",
            code: "https://github.com/Ramswarup-Sharma",
            // about: "ShortNotebook is a React Application for managing personal notes on the cloud"
        },
        {
            id: 4,
            src: spotifyclone,
            href: "https://github.com/Ramswarup-Sharma",
            code: "https://github.com/Ramswarup-Sharma/Spotify-Clone",
            // about: "ShortNotebook is a React Application for managing personal notes on the cloud"
        },
        {
            id: 5,
            src: textUtils,
            href: "https://text-utils-react-app-nine.vercel.app",
            code: "https://github.com/Ramswarup-Sharma",
            // about: "ShortNotebook is a React Application for managing personal notes on the cloud"
        },
        {
            id: 6,
            src: alramclockapp,
            href: "https://strikingly-rare-bull-chasm-dev.wayscript.cloud",
            code: "https://github.com/Ramswarup-Sharma",
            // about: "ShortNotebook is a React Application for managing personal notes on the cloud"
        },
    ];

    return (
        <div
            name="my projects"
            className="bg-gradient-to-b from-gray-900 to-gray-800 w-full min-h-screen text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto">
                <div className="pb-8">
                    <p className="text-4xl font-bold text-blue-300 inline border-b-4 border-blue-300">
                        My Projects
                    </p>
                    <p className="py-6 text-gray-300">Check out some of my work right here</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 sm:px-0">
                    {portfolios.map(({ code, href, id, src }) => (
                        <div key={id} className="shadow-md shadow-gray-600  overflow-hidden rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="w-full h-32 object-cover rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex text-blue-300 items-center justify-center mt-3">
                                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                                    <a href={href} target="_blank" rel="noreferrer">Demo</a>
                                </button>
                                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                                    <a href={code} target="_blank" rel="noreferrer">Code</a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
