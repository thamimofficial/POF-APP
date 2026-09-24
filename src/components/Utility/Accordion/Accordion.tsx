import { useEffect } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

interface AccordionParms {
    expanded: boolean;
    children: React.ReactNode;
    heightParms:number;
}


    const Accordion = ({ expanded, children, heightParms}: AccordionParms) => {
    const height = useSharedValue(0);
    const opacity = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        height: height.value,
        opacity: opacity.value,
        overflow: 'hidden'
    }));

    useEffect(() => {
        if (expanded) {
            height.value = withTiming(heightParms, { duration: 300, });
            opacity.value = withTiming(1, { duration: 250, });
        } else {
            height.value = withTiming(0, { duration: 250 });
            opacity.value = withTiming(0, { duration: 150, });
        }
    }, [expanded]);

    return (
        <Animated.View style={animatedStyle}>
            {children}
        </Animated.View>
    );
};

export default Accordion;


