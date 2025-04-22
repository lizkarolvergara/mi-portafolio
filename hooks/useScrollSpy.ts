import { off } from "process";
import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset = 200) {
    const [activeId, setActiveId] = useState("");

    useEffect (() => {
        const handleScroll = () => {
            for (const id of sectionIds) {
                const section = document.getElementById(id);
                
                if (section) {
                    const top = section.getBoundingClientRect().top;
                    if (top<=offset) {
                        setActiveId(id);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [sectionIds, offset]);

    return activeId;
}