import {motion} from "motion/react"

function SkillsSection () {

    return (
        <>
            <div id="skills" className="w-full h-screen flex justify-center items-center bg-black">
                <motion.div
                    initial={{ opacity: 0 , y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                   className="rounded-lg p-6 md:p-10 mx-auto max-w-5xl w-full flex flex-col gap-6"
                >
                    <h1 className="text-white text-3xl font-semibold">{'{ }'} Skills</h1>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">
                        <motion.div
                            initial={{ opacity: 0 , y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="flex-1 min-h-[280px] bg-slate-950/80 border border-cyan-400/40 shadow-[0_0_30px_rgba(34,211,238,0.18)] rounded-lg p-6 md:p-10 mx-auto max-w-4xl w-full text-white"
                        >
                            <h1 className="text-xl font-bold mb-4">const frontend {'= {'}</h1>
                            <ul className="text-gray-300 list-disc list-inside pl-3">
                                <li>React</li>
                                <li>Typescript</li>
                                <li>Tailwind CSS</li>
                                <li>JavaScript</li>
                                <li>HTML/CSS</li>
                            </ul>
                            <h1 className="text-xl font-bold mt-4">{'}'}</h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 , y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="flex-1 min-h-[280px] bg-slate-950/80 border border-pink-400/40 shadow-[0_0_30px_rgba(236,72,153,0.18)] rounded-lg p-6 md:p-10 mx-auto max-w-4xl w-full text-white"
                        >
                            <h1 className="text-xl font-bold mb-4">const backend {'= {'}</h1>
                            <ul className="text-gray-300 list-disc list-inside pl-3">
                                <li>REST APIs</li>
                                <li>Node.js</li>
                            </ul>
                            <h1 className="text-xl font-bold mt-4">{'}'}</h1>
                        </motion.div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">
                        <motion.div
                            initial={{ opacity: 0 , y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2 }}
                            className="flex-1 min-h-[280px] bg-slate-950/80 border border-lime-400/40 shadow-[0_0_30px_rgba(132,204,22,0.18)] rounded-lg p-6 md:p-10 mx-auto max-w-4xl w-full text-white"
                        >
                            <h1 className="text-xl font-bold mb-4">const tools {'= {'}</h1>
                            <ul className="text-gray-300 list-disc list-inside pl-3">
                                <li>Git</li>
                                <li>VS Code</li>
                                <li>npm/pnpm</li>
                                <li>Chrome Devtools</li>
                            </ul>
                            <h1 className="text-xl font-bold mt-4">{'}'}</h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 , y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2 }}
                            className="flex-1 min-h-[280px] bg-slate-950/80 border border-violet-400/40 shadow-[0_0_30px_rgba(168,85,247,0.18)] rounded-lg p-6 md:p-10 mx-auto max-w-4xl w-full text-white"
                        >
                            <h1 className="text-xl font-bold mb-4">const learning {'= {'}</h1>
                            <ul className="text-gray-300 list-disc list-inside pl-3">
                                <li>Docker</li>
                                <li>PostgreSQL</li>
                                <li>Next.js</li>
                                <li>Testing</li>
                            </ul>
                            <h1 className="text-xl font-bold mt-4">{'}'}</h1>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
export default SkillsSection