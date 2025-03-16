import { useEffect, useState, useCallback } from 'react';
import useScrollHandling from '@/hooks/useScrollHandling';

const useTranslateXImage = () => {
    const { scrollPosition, scrollDriction } = useScrollHandling();
    const [translateXPosition, setTranslateXPosition] = useState(80);

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
        handleTranslateX();
    }, [handleTranslateX]);

    return { translateXPosition };
};

export default useTranslateXImage;
