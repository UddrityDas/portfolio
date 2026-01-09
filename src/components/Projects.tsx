
import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-[#0f0f0f] text-white min-h-[50vh] flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center"
                >
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="mb-8 p-6 bg-yellow-500/10 rounded-full border border-yellow-500/20"
                    >
                        <Construction size={64} className="text-yellow-500" />
                    </motion.div>

                    <h2 className="text-4xl font-bold mb-4">Projects <span className="text-yellow-500">Under Construction</span></h2>
                    <p className="text-gray-400 max-w-lg mx-auto text-lg">
                        I'm currently curating my best work for this showcase.
                        Check back soon to see what I've been building!
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
