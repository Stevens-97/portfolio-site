import React, { useState } from "react";
import Project from "../Project/Project";
import styles from "./projectViewer.module.css";
import {
    MdOutlineArrowBackIosNew,
    MdOutlineArrowForwardIos,
} from "react-icons/md";
import ExploreSection from "../ExploreSection/ExploreSection";

import { data } from "../../libs/data";
export default function ProjectViewer() {
    const [current, setCurrent] = useState(0);
    const [length, setLength] = useState(data.length);
    const [projectData, setProjectData] = useState(data);
    function nextProject() {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    function prevProject() {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    // Returns nothing if there is no data
    if (!Array.isArray(projectData) || projectData.length <= 0) {
        return null;
    }

    return (
        <div className={styles.wholeProjectSection}>
            <div className={styles.exploreSection}>
                <ExploreSection
                    setProjectData={setProjectData}
                    setLength={setLength}
                    setCurrent={setCurrent}
                />
            </div>
            <div className={styles.projectSection}>
                <div className={styles.ArrowDiv}>
                    <MdOutlineArrowBackIosNew
                        className={styles.leftArrow}
                        onClick={prevProject}
                    />
                </div>
                {projectData.map((project, index) => {
                    return (
                        <div
                            className={
                                index === current
                                    ? "projectActive"
                                    : "projectNotActive"
                            }
                        >
                            {index === current && (
                                <Project
                                    project={project}
                                    projectIndex={index}
                                />
                            )}
                        </div>
                    );
                })}
                <div className={styles.ArrowDiv}>
                    <MdOutlineArrowForwardIos
                        className={styles.rightArrow}
                        onClick={nextProject}
                    />
                </div>
            </div>
        </div>
    );
}
