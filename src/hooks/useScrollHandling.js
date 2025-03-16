import { useEffect, useRef, useState, useCallback } from 'react';

const useScrollHandling = () => {
    const [scrollDriction, setScrollDrection] = useState(null);
    const previousScrollPosition = useRef(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    // useCallback để tránh tạo function mới mỗi lần re-render
    const scrollTracking = useCallback(() => {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > previousScrollPosition.current) {
            setScrollDrection('down');
        } else if (currentScrollPosition < previousScrollPosition.current) {
            setScrollDrection('up');
        }

        previousScrollPosition.current =
            currentScrollPosition <= 0 ? 0 : currentScrollPosition;

        setScrollPosition(currentScrollPosition);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);
        return () => window.removeEventListener('scroll', scrollTracking);
    }, [scrollTracking]); // Thêm vào dependency array

    return { scrollDriction, scrollPosition };
};

export default useScrollHandling;
