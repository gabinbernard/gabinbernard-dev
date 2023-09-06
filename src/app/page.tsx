"use client";
import { useEffect } from "react";

export default function Home() {
    const developerLogos = [
        "nextjs.svg",
        "js.svg",
        "ts.svg",
        "react.svg",
        "vue.svg",
        "angular.svg",
        "sass.svg",
        "tailwind.svg",
        "zig.svg",
        "nodejs.svg",
        "express.svg",
        "go.svg",
        "graphql.svg",
        "mysql.svg",
        "postgre.svg",
        "mongodb.svg",
        "nginx.svg",
        "docker.svg",
        "gitlab.svg",
    ];
    const designerLogos = [
        "photoshop.svg",
        "illustrator.svg",
        "indesign.svg",
        "audition.svg",
        "premiere-pro.svg",
        "xd.svg",
        "c4d.png",
    ];

    useEffect(() => {
        const titles = document.getElementsByClassName("section-title");
        for (const title of titles) {
            const content = title.innerHTML;
            const splittedContent = content
                .split("")
                .map((v: any) => `<span class="letter">${v}</span>`)
                .join("");
            title.innerHTML = splittedContent;
        }

        console.log(titles);
    }, []);

    return (
        <main>
            <div className="section">
                <div className="main">
                    <div className="container">
                        <div className="main-title-overline">
                            $ Bonjour,{" "}
                            <span className="text-gradient-magic">je suis</span>
                        </div>
                        <h1 className="main-title">
                            Gabin
                            <br />
                            BERNARD
                        </h1>
                    </div>
                </div>
            </div>
            <div className="section section-dark">
                <div className="container container-title">
                    <div className="section-title-overline">Je suis</div>
                    <h2 className="section-title">DEVELOPPEUR</h2>
                </div>
                <div className="content">
                    <div className="container">
                        <p className="section-subtitle">Depuis presque 4 ans</p>
                        <div className="logo-grid">
                            {developerLogos.map((logo: string, i: number) => {
                                return (
                                    <img
                                        key={i}
                                        className="logo-grid-elem"
                                        src={`/logo/${logo}`}
                                        alt=""
                                        style={{
                                            "--logo-delay": `${-4 + i * 0.2}s`,
                                        }}
                                    />
                                );
                            })}
                        </div>
                        <p className="section-paragraph">
                            <span className="section-check">✔</span>
                            Dev. full-stack Typescript avec NextJS
                        </p>
                        <p className="section-paragraph">
                            <span className="section-check">✔</span>
                            Front-end React / Vue / Angular, intégration SASS ou
                            Tailwind, WASM Zig
                        </p>
                        <p className="section-paragraph">
                            <span className="section-check">✔</span>
                            API Rest ou GraphQL avec NodeJS (Express ou Appolo)
                            ou Go (Gin)
                        </p>
                        <p className="section-paragraph">
                            <span className="section-check">✔</span>
                            Bases de données SQL (MySQL / Postgre), No-SQL
                            (Mongodb) et cache (Redis)
                        </p>
                        <p className="section-paragraph">
                            <span className="section-check">✔</span>
                            Déploiement Linux, NGINX, Docker, Pipeline CI-CD
                        </p>
                        <p className="section-paragraph">
                            <span className="section-check">✔</span>
                            Clean code, bonnes pratiques, tests avec Jest
                        </p>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="section-title-overline">Je suis</div>
                    <h2 className="section-title">DESIGNER</h2>
                    <p className="section-subtitle">Orienté UX et UI</p>
                    <div className="logo-grid">
                        {designerLogos.map((logo: string, i: number) => {
                            return (
                                <img
                                    key={i}
                                    className="logo-grid-elem"
                                    src={`/logo/${logo}`}
                                    alt=""
                                />
                            );
                        })}
                    </div>
                    <p className="section-paragraph">
                        <span className="section-check">✔</span>
                        Maitrise de la suite Adobe
                    </p>
                    <p className="section-paragraph">
                        <span className="section-check">✔</span>
                        Design de maquettes pour le web
                    </p>
                    <p className="section-paragraph">
                        <span className="section-check">✔</span>
                        Bonne onnaissance des principes d'UX et UI
                    </p>
                    <p className="section-paragraph">
                        <span className="section-check">✔</span>
                        Expériences en modélisation et animation 3D
                    </p>
                    <p className="section-paragraph">
                        <span className="section-check">✔</span>
                        Touche créative et rigueur techniques
                    </p>
                </div>
            </div>
            <div className="section section-dark">
                <div className="container">
                    <div className="section-title-overline">Et voici mes</div>
                    <h2 className="section-title">PROJETS</h2>

                    <div className="projet">
                        <div className="projet-carousel">
                            <img
                                className="projet-carousel-img"
                                src="/openbaguette.webp"
                                alt=""
                            />
                        </div>
                        <div className="projet-text">
                            <h3 className="projet-title">Openbaguette</h3>
                            <div className="projet-technos">
                                <img
                                    className="projet-technos-elem"
                                    src="/logo/nextjs.svg"
                                    alt="NextJS"
                                />
                                <img
                                    className="projet-technos-elem"
                                    src="/logo/react.svg"
                                    alt="React"
                                />
                                <img
                                    className="projet-technos-elem"
                                    src="/logo/sass.svg"
                                    alt="Sass"
                                />
                                <img
                                    className="projet-technos-elem"
                                    src="/logo/nodejs.svg"
                                    alt="NodeJS"
                                />
                                <img
                                    className="projet-technos-elem"
                                    src="/logo/express.svg"
                                    alt="Express"
                                />
                                <img
                                    className="projet-technos-elem"
                                    src="/logo/postgre.svg"
                                    alt="Postgre"
                                />
                                <img
                                    className="projet-technos-elem"
                                    src="/logo/docker.svg"
                                    alt="Docker"
                                />
                                <img
                                    className="projet-technos-elem"
                                    src="/logo/gitlab.svg"
                                    alt="Gitlab"
                                />
                            </div>
                            <p className="projet-description">
                                Openbaguette est une plateforme d'apprentissage
                                du Français pour les anglophones avec petite
                                base d'utilisateurs actifs. Elle dispose
                                d'énormémetns de ressources et d'outils
                                interactifs pour un apprentissage autodidacte
                                d'une grande rapidité.
                            </p>
                            <div className="projet-button">
                                <div className="projet-button-arrow">➞</div>
                                <div className="projet-button-text">
                                    Visit openbaguette.com
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projet">
                        <div className="projet-carousel"></div>
                        <div className="projet-text">
                            <h3 className="projet-title">Igrayem</h3>
                            <div className="projet-technos">
                                <img
                                    className="projet-technos-elem"
                                    src="/logo/vue.svg"
                                    alt="Vue"
                                />
                                <img
                                    className="projet-technos-elem"
                                    src="/logo/sass.svg"
                                    alt="Sass"
                                />
                                <img
                                    className="projet-technos-elem"
                                    src="/logo/nodejs.svg"
                                    alt="Nodejs"
                                />
                                <img
                                    className="projet-technos-elem"
                                    src="/logo/express.svg"
                                    alt="Express"
                                />
                                <img
                                    className="projet-technos-elem"
                                    src="/logo/mysql.svg"
                                    alt="MYsql"
                                />
                            </div>
                            <p className="projet-description">
                                Igrayem est une plateforme de mini-jeux entre
                                amis (Poker, Blackjack, Pong, Concours de
                                dessin...) permettant de créer ou de rejoindre
                                des parties en quelques clics, avec ou sans
                                compte. La jouabilité en temps réel est assurée
                                par une connexion WebSocket (Socket.IO).
                            </p>
                            <div className="projet-button">
                                <div className="projet-button-arrow">➞</div>
                                <div className="projet-button-text">
                                    Go to openbaguette.com
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="spacer" />
                </div>
            </div>
        </main>
    );
}
