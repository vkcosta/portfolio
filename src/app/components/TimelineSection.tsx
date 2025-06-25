import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface InputTimelineSection {
    icon?: IconProp
    title: string;
    items: {
        title: string,
        subtitle: string,
        description: string
    }[];
}

const TimelineSection = ({ title, items, icon }: InputTimelineSection) => {
    return (
        <section className="timeline-section text-white py-8 px-4">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                {icon && <span className="w-12 h-12 flex items-center justify-center bg-[white]/80 p-2 rounded-full text-[blue]">
                    <FontAwesomeIcon icon={icon} className="text-xl" /></span>}
                {title}
            </h2>

            <div className="relative border-l border-[blue] pl-6 ml-6">
                {items.map((item, index) => (
                    <div key={index} className="mb-10 relative">
                        <div className="absolute -left-8 top-1 w-4 h-4 bg-[blue] rounded-full border-4 border-[rgba(255,255,255,0.2)]"></div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <span className="text-sm text-gray-400">{item.subtitle}</span>
                        <p className="mt-2 text-gray-300">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TimelineSection;