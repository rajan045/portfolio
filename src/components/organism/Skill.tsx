import SkillCard from "atom/SkillCard";


export default function Skill() {

    return (
        <div className="px-10 py-4 max-lg:px-8">
            <h3 className="text-center font-semibold">My Skills</h3>
            <div className="bg-[#000000] rounded-lg dark:bg-gray-900 p-8">
                <SkillCard />
            </div>
        </div>
    );
}
