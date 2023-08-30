export default function Home() {
    const logos = [
        "nextjs",
        "js",
        "ts",
        "react",
        "vue",
        "angular",
        "sass",
        "nodejs",
        "express",
        "graphql",
        "mysql",
        "postgre",
        "mongodb",
        "nginx",
        "zig",
    ];

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
                            {logos.map((logo: string, i: number) => {
                                return (
                                    <img
                                        className="logo-grid-elem"
                                        src={`/logo/${logo}.svg`}
                                        alt=""
                                        style={{
                                            "--logo-delay": `${i * 0.25}s`,
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
                            Front-end avec React, Vue ou Angular, intégration
                            avec SASS ou Tailwind
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
                            Clean code, bonnes pratiques, tests avec Jest
                        </p>
                        <p className="section-paragraph">
                            <span className="section-check">✔</span>
                            Web Assembly haute performance avec Zig
                        </p>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="section-title-overline">Je suis</div>
                    <h2 className="section-title">DESIGNER</h2>
                </div>
            </div>
            <div className="section section-dark">
                <div className="container">
                    <div className="section-title-overline">Et voici mes</div>
                    <h2 className="section-title">PROJETS</h2>
                </div>
            </div>
        </main>
    );
}
