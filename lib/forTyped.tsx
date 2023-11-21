import { TypeAnimation } from 'react-type-animation';

export default function TypedAnim() {
    return (
        <TypeAnimation
            sequence={[
                "Hunt For More",
                2000,
                "Hack, Sleep, Eat, and Repeate",
                2000,
                "Create. Disrupt. Evolve",
                2000,
                "Hack to get Flag",
                2000,
                "Design. Build. Thrive",
                2000,
            ]}
            speed={50}
            repeat={Infinity}
        />
    )
}