import { motion } from "motion/react"
import Photo from "../assets/profiledemo.png"
import Button from "../components/Button"

function HeroSection () {
    return (
        <>
         <div className="w-full min-h-screen bg-black flex justify-center items-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.5 }}
                className="border border-gray-400 rounded-lg p-6 md:p-10 mx-auto max-w-4xl w-full"
            >
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center mb-10">
                    <div className="flex rounded-full h-30 w-30 bg-green-500 justify-center items-center shrink-0">
                        <img src={Photo} alt="Profile" className="rounded-full h-full w-full object-cover" />  
                    </div>
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <p className="text-white"> {'>'}_ <span className="text-gray-400">portfolio</span></p>
                        <p className="text-white">const <span className="text-gray-400">developer = {'{'}</span></p>
                        <p className="text-gray-400">&ensp; &ensp; name: <span className="text-white">"Dustin Bedaña Diza"</span>,</p>
                        <p className="text-gray-400">&ensp; &ensp; role: <span className="text-white">"Junior Developer"</span>,</p>
                        <p className="text-gray-400">&ensp; &ensp; passion: <span className="text-white">"Building cool stuff"</span>,</p>
                        <p className="text-gray-400">{'}'}</p>
                    </div>
                </div>
                <div className="border-t border-gray-400 p-5">
                    <p className="text-white">Hey! I'm a passionate junior developer crafting clean, efficient code and learning something new every day. Let's build something amazing together!</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-4">
                        <Button variant="primary" onClick={() => window.location.href = '#about'} className="mt-4 h-10 w-25">
                            About Me
                        </Button>
                        <Button variant="secondary" onClick={() => window.location.href = '#projects'} className="mt-4 h-10 w-25">
                            Projects
                        </Button>
                    </div>
                    
                </div>
            </motion.div>
         </div>
        </>
    )
}

export default HeroSection