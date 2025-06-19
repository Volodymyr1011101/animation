import {useEffect, useState} from "react";

export const useVisibleComponent = (ref: any, threshold: number) => {
    const [isVisible, setIsVisible] = useState(false);
    const options = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: threshold, // Какой процент компонента должен быть видимым
    };
    const handleIntersection = (entries: any) => {

        if (entries[0].isIntersecting) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, options);
        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [])
    return isVisible
}