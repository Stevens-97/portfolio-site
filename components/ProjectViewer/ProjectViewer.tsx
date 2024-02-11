import React, { useState, useCallback } from "react";
import Project from "../Project/Project";
import {
    MdOutlineArrowBackIosNew,
    MdOutlineArrowForwardIos,
} from "react-icons/md";
import ExploreSection from "../ExploreSection/ExploreSection";
import { data } from "../../libs/data";

import css from "./projectViewer.module.css";

export default function ProjectViewer() {
    const [current, setCurrent] = useState(0);
    const [projectData, setProjectData] = useState(data);

    const nextProject = useCallback(() => {
        setCurrent((current) =>
            current === projectData.length - 1 ? 0 : current + 1
        );
    }, [projectData.length]);

    const prevProject = useCallback(() => {
        setCurrent((current) =>
            current === 0 ? projectData.length - 1 : current - 1
        );
    }, [projectData.length]);

    if (!Array.isArray(projectData) || projectData.length <= 0) {
        return null;
    }

    return (
        <div className={css.wholeProjectSection}>
            <div className={css.projectSection}>
                <MdOutlineArrowBackIosNew
                    className={css.leftArrow}
                    onClick={prevProject}
                />
                {projectData.map((project, index) => (
                    <div
                        key={project.projectId}
                        className={
                            index === current
                                ? css.projectActive
                                : css.projectNotActive
                        }
                    >
                        {index === current && <Project project={project} />}
                    </div>
                ))}
                <MdOutlineArrowForwardIos
                    className={css.rightArrow}
                    onClick={nextProject}
                />
            </div>
        </div>
    );
}
