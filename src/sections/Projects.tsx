import {motion} from "motion/react"
import project1Image from "../assets/project1.png"
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
                        <a href="https://project1-hazel-xi.vercel.app/" target="_blank" rel="noreferrer" className="block w-full max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 , y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5 }}
                                whileHover={{ scale: 1.02, y: -4 }}
                                className="border border-gray-400 rounded-lg p-6 md:p-10 text-white cursor-pointer"
                            >
                                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
                                    <div className="w-full md:w-[280px] flex-shrink-0">
                                        <img src={project1Image} alt="Project 1" className="w-full h-48 md:h-60 object-cover rounded-lg" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h1 className="text-xl font-bold mb-4">Portfolio Website</h1>
                                        <p className="text-gray-300">I was the sole developer responsible for designing and implementing this portfolio website from scratch. The site features a modern, responsive design and showcases my projects and skills.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </a>
                        <a href="https://github.com/dbedanadiza" target="_blank" rel="noreferrer" className="block w-full max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 , y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5 }}
                                whileHover={{ scale: 1.02, y: -4 }}
                                className="border border-gray-400 rounded-lg p-6 md:p-10 text-white cursor-pointer"
                            >
                                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
                                    <div className="w-full md:w-[280px] flex-shrink-0">
                                        <img src={project2Image} alt="Project 2" className="w-full h-48 md:h-60 object-cover rounded-lg" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h1 className="text-xl font-bold mb-4">Project 2</h1>
                                        <p className="text-gray-300">Description of project 2.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
export default ProjectsSection