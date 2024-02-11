import React, { useState, useCallback } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { IoIosArrowUp } from "react-icons/io";
import { data } from "../../libs/data";

import css from "./exploreSection.module.css";

export default function ExploreSection({ setProjectData }) {
    const [toggleTags, setToggleTags] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = useCallback(
        (label) => {
            setSearchQuery(label);
            const filteredPosts = data.filter(
                (project) =>
                    label === "all" ||
                    project.projectTags
                        .map((tag) => tag.toLowerCase())
                        .includes(label)
            );
            setProjectData(filteredPosts);
        },
        [setProjectData]
    );

    return (
        <div className={css.wholeExploreSection}>
            <span className={css.exploreSectionTop}>
                <SearchBar setSearchQuery={setSearchQuery} />
                <IoIosArrowUp
                    className={
                        toggleTags
                            ? css.exploreSectionToggleUp
                            : css.exploreSectionToggleDown
                    }
                    onClick={() => setToggleTags(!toggleTags)}
                />
            </span>
            {toggleTags && (
                <div className={css.popularTags}>
                    <h4 className={css.tagTitle}>Popular tags</h4>
                    <ul className={css.tagList}>
                        {[
                            "all",
                            "javascript",
                            "react",
                            "testing",
                            "group project",
                        ].map((tag) => (
                            <li key={tag}>
                                <button
                                    className={css.tagButton}
                                    onClick={() => handleSearch(tag)}
                                >
                                    {tag}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
