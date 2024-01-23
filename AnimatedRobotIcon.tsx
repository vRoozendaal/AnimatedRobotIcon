import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import animationData from './AnimatedRobotIcon.json';

interface AnimatedRobotIconProps {
    children?: React.ReactNode;
    onClick?: () => void;
    sx?: SxProps<Theme>;
    animationData?: object;
    staticImageSrc?: string;
    useLottie?: boolean;
}

function AnimatedRobotIcon({ children, onClick, sx, staticImageSrc, useLottie }: Readonly<AnimatedRobotIconProps>) {
    const container = useRef<HTMLDivElement>(null);
    const animationInstance = useRef<any>(null);

    useEffect(() => {
        if (useLottie && container.current) {
            const anim = lottie.loadAnimation({
                container: container.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: animationData,
            });
            animationInstance.current = anim;
            return () => anim.destroy();
        }
    }, [animationData, useLottie]);

    return (
        <div ref={container} onClick={onClick}>
            {useLottie ? children : <img src={staticImageSrc} alt="Static Avatar" />}
        </div>
    );
}

export default AnimatedRobotIcon;