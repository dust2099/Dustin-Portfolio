import {motion} from "motion/react"
import { Mail, MessageSquare, Send } from "lucide-react"
import { FaLinkedin, FaGithub } from "react-icons/fa"


function Contact() {
    return (
        <>
            <div id="contact" className="w-full h-screen flex justify-center items-center bg-black">
                <motion.div
                    initial={{ opacity: 0 , y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    className="rounded-lg p-6 md:p-10 mx-auto max-w-5xl w-full flex flex-col gap-3"
                >
                    <div className="flex flex-row gap-4 items-center">
                        <MessageSquare className="text-white" />
                        <h1 className="text-white text-3xl font-semibold">Contact</h1>
                    </div>
                    <div>
                        <div className="gap-4 mt-4 border border-gray-400 rounded-lg p-6 md:p-10 max-w-4xl w-full text-white">
                            <div className="flex flex-row items-center gap-2">
                                <Send className="text-white size-5.5"/>
                                <p className="text-white text-lg mt-2"> // Let's Connect</p>
                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <p> I'm always open to new opportunities, collaborations, or just a friendly chat about tech. Feel free to reach out through any of these channels.!</p>
                            </div>
                            <div className="mt-6 grid gap-4 md:grid-cols-3">
                                <a href="mailto:dbedanadiza@gmail.com" className="block h-full">
                                    <motion.div
                                        whileHover={{ scale: 1.04, y: -4 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex h-47.5 flex-col items-center justify-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-500/10 p-8 text-cyan-100 cursor-pointer"
                                    >
                                        <Mail className="text-cyan-300 size-8 mx-auto" />
                                        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200 mx-auto">Email</p>
                                        <p className="text-gray-400 mx-auto text-center break-all">dbedanadiza@gmail.com</p>
                                    </motion.div>
                                </a>
                                <a href="https://github.com/dust2099" target="_blank" rel="noreferrer" className="block h-full">
                                    <motion.div
                                        whileHover={{ scale: 1.04, y: -4 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex h-47.5 flex-col items-center justify-center gap-2 rounded-lg border border-fuchsia-400/40 bg-fuchsia-500/10 p-8 text-fuchsia-100 cursor-pointer"
                                    >
                                        <FaGithub className="text-fuchsia-300 size-8 mx-auto" />
                                        <p className="text-sm font-semibold uppercase tracking-wide text-fuchsia-200 mx-auto">GitHub</p>
                                        <p className="text-gray-400 mx-auto text-center break-all">/dust2099</p>
                                    </motion.div>
                                </a>
                                <a href="https://www.linkedin.com/in/dustinbedanadiza" target="_blank" rel="noreferrer" className="block h-full">
                                    <motion.div
                                        whileHover={{ scale: 1.04, y: -4 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex h-47.5 flex-col items-center justify-center gap-2 rounded-lg border border-emerald-400/40 bg-emerald-500/10 p-8 text-emerald-100 cursor-pointer"
                                    >
                                        <FaLinkedin className="text-emerald-300 size-8 mx-auto" />
                                        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200 mx-auto">LinkedIn</p>
                                        <p className="text-gray-400 mx-auto text-center break-all">/in/dustinbedanadiza</p>
                                    </motion.div>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Contact