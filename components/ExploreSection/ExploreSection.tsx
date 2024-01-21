import React, { FormEvent, useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./exploreSection.module.css";
import { IoIosArrowUp } from "react-icons/io";
import { data } from "../../libs/data";
interface projectLayout {
    projectLayout: [
        projectId: number,
        projectTitle: string,
        projectMedia: string[],
        projectText: string,
        repo: string[],
        tech: string[],
        projectTags: string[]
    ];
}

interface setProjectDataFunc {
    setProjectData: (arg0: any) => void;
    setLength: (arg0: any) => void;
    setCurrent: (arg0: any) => void;
}

export default function ExploreSection({
    setProjectData,
    setLength,
    setCurrent,
}: setProjectDataFunc) {
    const [foundPosts, setFoundPosts] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [toggleTags, setToggleTags] = useState(true);
    const [posts, setPosts] = useState(data);
    useEffect(() => {
        console.log("Entered useEffect");
        function changePosts() {
            console.log(searchQuery);
            if (foundPosts) {
                let filteredPosts = posts.filter((project: any) => {
                    const postTags = project.projectTags.map((tag: any) =>
                        tag.toLowerCase()
                    );
                    return postTags.includes(searchQuery);
                });
                if (filteredPosts.length > 0) {
                    console.log(filteredPosts);
                    setLength(filteredPosts.length);
                    setCurrent(0);
                    setProjectData(filteredPosts);
                    setFoundPosts(false);
                } else if (filteredPosts.length === 0) {
                    console.log(filteredPosts);
                    setLength(posts.length);
                    setCurrent(0);
                    setProjectData(posts);
                    setFoundPosts(false);
                }
            }
        }
        changePosts();
    }, [foundPosts]); // eslint-disable-line react-hooks/exhaustive-deps
    function handleClick(e: FormEvent, label: string) {
        console.log("Entered handle click");
        e.preventDefault();
        setSearchQuery(label);
        setFoundPosts(true);
    }
    function handleToggleClick() {
        setToggleTags(!toggleTags);
    }

    return (
        <div className={styles.wholeExploreSection}>
            <span className={styles.exploreSectionTop}>
                <SearchBar
                    setSearchQuery={setSearchQuery}
                    setFoundPosts={setFoundPosts}
                />
                <div className={styles.exploreSectionToggleDiv}>
                    {toggleTags && (
                        <IoIosArrowUp
                            className={styles.exploreSectionToggleUp}
                            onClick={handleToggleClick}
                        />
                    )}
                    {!toggleTags && (
                        <IoIosArrowUp
                            className={styles.exploreSectionToggleDown}
                            onClick={handleToggleClick}
                        />
                    )}
                </div>
            </span>
            {toggleTags === true && (
                <div className={styles.popularTags}>
                    <h4 className={styles.tagTitle}>Popular tags</h4>
                    <ul className={styles.tagList}>
                        <li>
                            <button
                                className={styles.tagButton}
                                onClick={(e) => {
                                    handleClick(e, "all");
                                }}
                            >
                                All
                            </button>
                        </li>
                        <li>
                            <button
                                className={styles.tagButton}
                                onClick={(e) => {
                                    handleClick(e, "javascript");
                                }}
                            >
                                JavaScript
                            </button>
                        </li>
                        <li>
                            <button
                                className={styles.tagButton}
                                onClick={(e) => {
                                    handleClick(e, "react");
                                }}
                            >
                                React
                            </button>
                        </li>
                        <li>
                            <button
                                className={styles.tagButton}
                                onClick={(e) => {
                                    handleClick(e, "testing");
                                }}
                            >
                                Testing
                            </button>
                        </li>
                        <li>
                            <button
                                className={styles.tagButton}
                                onClick={(e) => {
                                    handleClick(e, "group project");
                                }}
                            >
                                Group projects
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
