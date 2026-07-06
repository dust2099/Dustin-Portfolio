import { motion } from "motion/react"
import { Menu } from "lucide-react"

function Navbar() {
        return (
            <>
             <motion.div className="w-full h-15 bg-blue-400/50 flex items-center justify-end px-5">
                <Menu/>
             </motion.div>
            </>
        )
}

export default Navbar