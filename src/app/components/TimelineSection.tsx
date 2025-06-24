interface InputTimelineSection {
    title: string;
    items: {
        title: string,
        subtitle: string,
        description: string
    }[];
}

const TimelineSection = ({ title, items }: InputTimelineSection) => {

    return (
        <section className="timeline-section text-white py-8 px-4">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="bg-yellow-500 p-2 rounded-full text-black">ícone aqui</span>
                {title}
            </h2>

            <div className="relative border-l border-gray-700 pl-6">
                {items.map((item, index) => (
                    <div key={index} className="mb-10 relative">
                        <div className="absolute -left-3 top-1 w-4 h4 bg-yellow-500 rounded-full border-2 border-gray-900"></div>
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