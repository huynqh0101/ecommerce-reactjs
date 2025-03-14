import { useEffect, useState, useRef, useCallback } from 'react';

const useTranslateX = () => {
    const [scrollDriction, setScrollDrection] = useState(null);
    const previousScrollPosition = useRef(0);
    const [translateXPosition, setTranslateXPosition] = useState(80);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollTracking = () => {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > previousScrollPosition.current) {
            setScrollDrection('down');
        } else if (currentScrollPosition < previousScrollPosition.current) {
            setScrollDrection('up');
        }

        previousScrollPosition.current =
            currentScrollPosition <= 0 ? 0 : currentScrollPosition;

        setScrollPosition(currentScrollPosition);
    };

    // Dùng useCallback để tránh hàm bị re-create liên tục
    const handleTranslateX = useCallback(() => {
        setTranslateXPosition((prev) => {
            if (scrollDriction === 'down' && scrollPosition >= 1500) {
                return prev <= 0 ? 0 : prev - 1;
            } else if (scrollDriction === 'up') {
                return prev >= 80 ? 80 : prev + 1;
            }
            return prev;
        });
    }, [scrollDriction, scrollPosition]);

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);
        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition, handleTranslateX]); //Đưa handleTranslateX vào dependency array

    return { translateXPosition };
};

export default useTranslateX;
