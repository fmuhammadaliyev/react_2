import style from "./hero.module.css";

export default function Hero() {
    return (
        <div>
            {/* Hero Section */}
            <section className={style.hero}>
                <div className={style.container}>
                    <div className={style.hero__container}>
                        <div className={style.herotext}>
                            <div>
                                <h1>More than just shorter links</h1>
                            </div>
                            <p>
                                Build your brand's recognition and get detailed insights on how
                                your links are performing.
                            </p>
                            <a href="#" className={style.herobutton}>
                                Get Started
                            </a>
                        </div>

                        <div className={style.heroimg}>
                            <img
                                src="./working_with_computer.png"
                                alt="Hero illustration"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className={style.stats}>
                <div className={style.container}>
                    <div className={style.stats__container}>
                        <h2>Advanced Statistics</h2>
                        <p>
                            Track how your links are performing across the web with our
                            advanced statistics dashboard.
                        </p>
                    </div>

                    <div className={style.statscards}>
                        <div className={style.card}>
                            <div className={style.iconcircle}>
                                <img src="./trading.svg" alt="Brand Recognition" />
                            </div>
                            <h3>Brand Recognition</h3>
                            <p>
                                Boost your brand recognition with each click. Generic links
                                don't mean a thing. Branded links help instil confidence in
                                your content.
                            </p>
                        </div>

                        <div className={`${style.card} ${style.cardmiddle}`}>
                            <div className={style.iconcircle}>
                                <img src="./speed.svg" alt="Detailed Records" />
                            </div>
                            <h3>Detailed Records</h3>
                            <p>
                                Gain insights into who is clicking your links. Knowing when and
                                where people engage with your content helps inform better
                                decisions.
                            </p>
                        </div>

                        <div className={`${style.card} ${style.cardlast}`}>
                            <div className={style.iconcircle}>
                                <img src="./decorations.svg" alt="Fully Customizable" />
                            </div>
                            <h3>Fully Customizable</h3>
                            <p>
                                Improve brand awareness and content discoverability through
                                customizable links, supercharging audience engagement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
