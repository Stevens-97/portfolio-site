import { aboutMe } from "../../libs/data";
import { useInView } from "react-intersection-observer";
import Footer from "../Footer";
import styles from "./AboutMe.module.scss";
import Banner from "../Banner";

export default function AboutMe() {
    const { ref, inView } = useInView();
    const { ref: titleRef, inView: titleInView } = useInView();

    // Destructuring class names
    const {
        animateCard,
        title,
        content,
        section,
        text,
        image,
        projectVideo,
        customIframe,
    } = styles;

    return (
        <div
            id="about-me"
            className={titleInView ? animateCard : ""}
            ref={titleRef}
        >
            <Banner />
            <h2 className={title}>About me</h2>
            <div className={content} ref={ref}>
                <div className={section}>
                    <p className={text}>{aboutMe.text}</p>
                    <img
                        className={image}
                        src={aboutMe.image}
                        alt="Elliott Stevens"
                    />
                </div>
            </div>
            <div className={projectVideo}>
                <p>Take a look at my recent group project:</p>
                <iframe
                    className={customIframe}
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/IUmr7r1vAXE"
                    title="YouTube video player"
                    allowFullScreen
                ></iframe>
            </div>
            <Footer />
        </div>
    );
}
