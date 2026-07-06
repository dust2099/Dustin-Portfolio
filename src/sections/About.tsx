import {motion} from "motion/react"
import Photo from "../assets/laptop.png"

function AboutSection () {

    return (
        <>
            <div id="about" className="w-full h-screen flex justify-center items-center bg-black">
                <motion.div
                    initial={{ opacity: 0 , y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    className="rounded-lg p-6 md:p-10 mx-auto max-w-5xl w-full flex flex-col gap-6"
                >
                    <h1 className="text-white text-3xl font-semibold">{'</>'}About me</h1>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                        <motion.div
                            initial={{ opacity: 0 , y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            className="border border-gray-400 rounded-lg p-6 md:p-10 mx-auto max-w-4xl w-full text-white"
                        >
                            <h1 className="text-xl font-bold mb-4">Who I am</h1>
                            <p className="text-gray-300">I'm a junior developer with a passion for creating intuitive and efficient web applications. With a strong foundation in modern web technologies, I'm constantly exploring new tools and best practices to impove my craft</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 , y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            className="border border-gray-400 rounded-lg p-6 md:p-10 mx-auto max-w-4xl w-full text-white"
                        >
                            <h1 className="text-xl font-bold mb-4">What drives me</h1>
                            <p className="text-gray-300">I believe in writing clean, maintainable code and building products that make a difference. Whether it's solving complex problems or learning a new framework, I'm alwaus excited to grow as a developer.</p>
                        </motion.div>
                    </div>
                    <div className="flex w-full h-45 justify-center items-center shrink-0 overflow-hidden">
                        <img src={Photo} alt="Profile" className="h-full w-full object-cover object-[center_70%] rounded-lg" />  
                    </div>
                </motion.div>
                
            </div>
        </>
    )

}

export default AboutSection