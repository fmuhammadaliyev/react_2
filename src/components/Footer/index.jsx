import style from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={style.footer}>
            {/* CTA Section */}
            <div className={style.footertop}>
                <div className={style.container}>
                    <div
                        className={style.footertopcontent}
                       
                    >
                        <h2>Boost your links today</h2>
                        <a href="#" className={style.footerbutton}>
                            Get Started
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Links */}
            <div className={style.footerbottom}>
                <div className={`${style.container} ${style.footercontent}`}>
                    <a href="#" className={style.footerlogo}>
                        Shortly
                    </a>

                    <div className={style.footerlinks}>
                        <div
                            className={style.footersection}
                         
                        >
                            <h3>Features</h3>
                            <ul>
                                <li><a href="#">Link Shortening</a></li>
                                <li><a href="#">Branded Links</a></li>
                                <li><a href="#">Analytics</a></li>
                            </ul>
                        </div>

                        <div
                            className={style.footersection}
                            
                        >
                            <h3>Resources</h3>
                            <ul>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Developers</a></li>
                                <li><a href="#">Support</a></li>
                            </ul>
                        </div>

                        <div
                            className={style.footersection}
                          
                        >
                            <h3>Company</h3>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Our Team</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>

                        <div className={style.footersocials}>
                            <a href="#">
                                <img src="./facebok.svg" alt="Facebook"  />
                            </a>
                            <a href="#">
                                <img src="./twitter.svg" alt="Twitter"  />
                            </a>
                            <a href="#">
                                <img src="./pinterest.svg" alt="Pinterest"  />
                            </a>
                            <a href="#">
                                <img src="./ins.svg" alt="Instagram"  />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
