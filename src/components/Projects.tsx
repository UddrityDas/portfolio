
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
    {
        title: "Operating Systems Labs",
        description: "Implemented producer–consumer & barrier synchronization with Pthreads, mutexes, and semaphores. Diagnosed race conditions using GDB and Valgrind.",
        tags: ["C", "Linux", "Pthreads", "GDB", "Valgrind"],
        links: { demo: "#", github: "#" }
    },
    {
        title: "Linux Programming",
        description: "Built fork/exec pipelines and IPC using pipes and shared memory. Implemented a TCP client/server with select() for multiplexing.",
        tags: ["C", "Bash", "IPC", "Sockets", "Make"],
        links: { demo: "#", github: "#" }
    },
    {
        title: "Interactive Graphics Pipeline",
        description: "Implemented model/view/projection transforms, camera controls, rasterization, and depth testing in OpenGL. Profiled CPU/GPU usage for optimization.",
        tags: ["C++", "OpenGL", "GLFW", "GLAD", "Graphics"],
        links: { demo: "#", github: "#" }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-[#0f0f0f] text-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Featured <span className="text-blue-400">Projects</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Showcasing my journey through complex systems and modern web applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all group hover:-translate-y-2"
                        >
                            <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:from-gray-800 group-hover:to-blue-900/20 transition-colors">
                                <Folder className="w-16 h-16 text-gray-600 group-hover:text-blue-400 transition-colors" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-2 py-1 bg-gray-800 text-xs text-gray-300 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <a href={project.links.github} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                        <Github size={16} /> Code
                                    </a>
                                    <a href={project.links.demo} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
