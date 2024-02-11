import React, { useState } from "react";
import {
    MdOutlineArrowBackIosNew,
    MdOutlineArrowForwardIos,
} from "react-icons/md";
import styles from "./project.module.css";
import { linkSection, liveLinkSection } from "../../libs/data";

const {
    project,
    imageSection,
    leftArrow,
    rightArrow,
    image,
    infoSection,
    links,
    buttonStyle,
    techStack,
} = styles;

interface ProjectLayout {
    project: {
        projectId: number;
        projectTitle: string;
        projectImages: string[];
        projectText: string;
        repoLinks: linkSection[];
        liveLinks?: liveLinkSection[];
        tech: string[];
        projectVideo?: string;
        projectLiveLink?: string;
    };
    projectIndex?: number;
}

export default function Project({ project: projectData }: ProjectLayout) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const navigateImage = (direction: "next" | "prev") => {
        const lastIndex = projectData.projectImages.length - 1;
        if (direction === "next") {
            setCurrentImageIndex(
                currentImageIndex === lastIndex ? 0 : currentImageIndex + 1
            );
        } else {
            setCurrentImageIndex(
                currentImageIndex === 0 ? lastIndex : currentImageIndex - 1
            );
        }
    };

    if (!projectData.projectImages || projectData.projectImages.length === 0) {
        return null;
    }

    return (
        <span className={project}>
            <div className={imageSection}>
                <MdOutlineArrowBackIosNew
                    className={leftArrow}
                    onClick={() => navigateImage("prev")}
                />
                <img
                    className={image}
                    src={projectData.projectImages[currentImageIndex]}
                    alt="Project Display"
                />
                <MdOutlineArrowForwardIos
                    className={rightArrow}
                    onClick={() => navigateImage("next")}
                />
            </div>
            <span className={infoSection}>
                <div className={styles.textSection}>
                    <p className={styles.projectText}>
                        {projectData.projectText}
                    </p>
                    <div className={techStack}>
                        {projectData.tech
                            ? projectData.tech.map((tech, index) => {
                                  return <p key={`tech-${index}`}>{tech}</p>;
                              })
                            : null}
                    </div>
                    <div className={links}>
                        {projectData?.repoLinks.map((linkSection, index) => {
                            return (
                                <a
                                    href={linkSection.link}
                                    className={buttonStyle}
                                    key={`${linkSection.title} - ${index}`}
                                >
                                    {linkSection.title}
                                </a>
                            );
                        })}
                    </div>

                    {/* {projectData?.liveLinks.map((linkSection, index) => {
                        return (
                            <a
                                href={linkSection.link}
                                className={buttonStyle}
                                key={`${linkSection.title} - ${index}`}
                            >
                                {linkSection.title}
                            </a>
                        );
                    })} */}
                </div>
            </span>
        </span>
    );
}
