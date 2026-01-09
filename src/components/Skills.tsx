
import { motion } from 'framer-motion';
import { Code2, Terminal, Cpu, Globe } from 'lucide-react';

const skillsData = [
    {
        category: "Languages & Technologies",
        icon: <Code2 className="w-8 h-8 text-blue-400" />,
        items: ["C", "C++", "Python", "Bash", "JavaScript", "TypeScript", "HTML", "CSS"]
    },
    {
        category: "Systems & Tools",
        icon: <Terminal className="w-8 h-8 text-green-400" />,
        items: ["Linux (Ubuntu)", "Git/GitHub", "GDB", "Valgrind", "Make/CMake", "VS Code Dev Containers", "Docker"]
    },
    {
        category: "APIs & Frameworks",
        icon: <Globe className="w-8 h-8 text-purple-400" />,
        items: ["POSIX (threads, sockets, mmap)", "OpenGL (GLFW/GLAD)", "REST"]
    },
    {
        category: "Concepts",
        icon: <Cpu className="w-8 h-8 text-red-400" />,
        items: ["Multi‑threaded Programming", "Synchronization", "Memory Management", "Profiling", "Unit/CI Testing"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-[#0a0a0a] text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Technical <span className="text-purple-400">Expertise</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolset spanning low-level systems programming to modern web development.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold">{category.category}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-purple-500/50 hover:text-white transition-all"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
