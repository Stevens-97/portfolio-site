import { aboutMe } from "../../libs/data";
import { useInView } from "react-intersection-observer";
import Footer from "../Footer";
import styles from "./AboutMe.module.scss";
import Banner from "../Banner";
import ProjectViewer from "../ProjectViewer/ProjectViewer";
import classNames from "classnames";

export default function AboutMe() {
    const { ref: aboutMeRef, inView: aboutMeInView } = useInView();
    const { ref: projectsRef, inView: projectsInView } = useInView();
    const { ref: videoRef, inView: videoInView } = useInView();

    const {
        animateCard,
        title,
        content,
        section,
        text,
        image,
        projectVideoWrapper,
        customIframe,
        projectViewer,
        container,
        textSection,
        wrapper,
        projectVideo,
        imageWrapper,
        infoSection,
    } = styles;

    return (
        <div className={container}>
            <div
                id="about-me"
                className={classNames(aboutMeInView && animateCard)}
                ref={aboutMeRef}
            >
                <div className={section}>
                    <Banner />
                </div>
                <div className={content} ref={aboutMeRef}>
                    <div className={section}>
                        <div className={wrapper}>
                            <h2 className={title}>About me</h2>
                            <div className={infoSection}>
                                <p className={text}>{aboutMe.text}</p>
                                <div className={imageWrapper}>
                                    <img
                                        className={image}
                                        src={aboutMe.image}
                                        alt="Elliott Stevens"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classNames(section, projectsInView && animateCard)}>
                <div
                    ref={projectsRef}
                    className={classNames(wrapper, projectViewer)}
                >
                    <h4 className={title}>Projects:</h4>
                    <div className={infoSection}>
                        <ProjectViewer />
                    </div>
                </div>
            </div>

            <div className={classNames(section, videoInView && animateCard)}>
                <div
                    className={classNames(projectVideoWrapper, wrapper)}
                    ref={videoRef}
                >
                    <h3 className={title}>Bootcamp final project:</h3>
                    <div className={infoSection}>
                        <div className={projectVideo}>
                            <iframe
                                className={customIframe}
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/IUmr7r1vAXE"
                                title="YouTube video player"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classNames(section, videoInView && animateCard)}>
                <Footer />
            </div>
        </div>
    );
}
