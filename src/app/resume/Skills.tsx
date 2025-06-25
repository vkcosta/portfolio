import React from "react";
import { IconType } from "react-icons";

export type TSkill = {
    icon: IconType;
    name: string;
    description: string;
    className: string;
};

type SkillsProps = {
    skills: TSkill[];
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    return (
        <section className="p-6">
            <h2 className="title-page">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 rounded-2xl shadow-md p-5 transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-105"

                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-white p-3 rounded-full w-fit mb-4 shadow">
                                    <Icon size={32} className={skill.className ?? "text-gray-700"} />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{skill.name}</h3>
                                <p className="text-gray-600 text-sm leading-snug">{skill.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Skills;
