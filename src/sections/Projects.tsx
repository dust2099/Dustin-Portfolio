import {motion} from "motion/react"
import project1Image from "../assets/project1.png"
import project2Image from "../assets/project2.png"
import { Folder } from "lucide-react"

const projects = [
    {
        url: "https://project1-hazel-xi.vercel.app/",
        image: project1Image,
        imageAlt: "Project 1",
        title: "Portfolio Website",
        description: "I was the sole developer responsible for designing and implementing this portfolio website from scratch. The site features a modern, responsive design and showcases my projects and skills.",
    },
    {
        url: "https://subtrack-alpha-sepia.vercel.app/auth",
        image: project2Image,
        imageAlt: "Project 2",
        title: "Subtrack",
        description: "A web app for tracking personal and shared subscriptions with user accounts. Users can manage their own recurring bills or split shared subscriptions with others—either dividing costs evenly or setting custom amounts per member. Built with React, Vite, Tailwind CSS, and Supabase",
    },
]

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
                        {projects.map((project) => (
                            <a key={project.title} href={project.url} target="_blank" rel="noreferrer" className="block w-full max-w-4xl mx-auto">
                                <motion.div
                                    initial={{ opacity: 0 , y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    whileHover={{ scale: 1.02, y: -4 }}
                                    className="border border-gray-400 rounded-lg p-6 md:p-10 text-white cursor-pointer"
                                >
                                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
                                        <div className="w-full md:w-[280px] flex-shrink-0">
                                            <img src={project.image} alt={project.imageAlt} className="w-full h-48 md:h-60 object-cover rounded-lg" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h1 className="text-xl font-bold mb-4">{project.title}</h1>
                                            <p className="text-gray-300">{project.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    )
}
export default ProjectsSection