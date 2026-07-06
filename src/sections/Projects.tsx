import {motion} from "motion/react"
import project1Image from "../assets/laptop.png"
import project2Image from "../assets/laptop.png"
import { Folder } from "lucide-react"

function ProjectsSection () {

    return (
        <>
            <div id="projects" className="w-full min-h-screen flex justify-center items-center bg-black">
                <motion.div
                    initial={{ opacity: 0 , y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                   className="rounded-lg p-6 md:p-10 mx-auto max-w-5xl w-full flex flex-col gap-6"
                >
                    <div className="flex flex-row gap-4 items-center">
                        <Folder className="text-white"/>
                        <h1 className="text-white text-3xl font-semibold">Projects</h1>
                    </div>
                    
                    <div className="flex flex-col gap-6 md:gap-10 items-center">
                        <motion.div
                            initial={{ opacity: 0 , y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            className="border border-gray-400 rounded-lg p-6 md:p-10 mx-auto max-w-4xl w-full text-white"
                        >
                            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                                <div>
                                    <img src={project1Image} alt="Project 1" className="w-60 h-auto rounded-lg" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold mb-4">Project 1</h1>
                                    <p className="text-gray-300">Description of project 1.</p>
                                </div>
                            </div>
                            
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 , y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            className="border border-gray-400 rounded-lg p-6 md:p-10 mx-auto max-w-4xl w-full text-white"
                        >
                            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                                <div>
                                    <img src={project2Image} alt="Project 2" className="w-60 h-auto rounded-lg" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold mb-4">Project 2</h1>
                                    <p className="text-gray-300">Description of project 2.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
export default ProjectsSection