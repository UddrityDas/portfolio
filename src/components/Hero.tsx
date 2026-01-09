
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Layout } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a] text-white pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-sm md:text-base font-medium text-purple-400 mb-4 tracking-wider uppercase">
                        Software Developer Co-op Student
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Uddrity</span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
                        Computer Science student at McMaster University. Passionate about operating systems, concurrency, and high-performance software.
                        Seeking Systems Software Engineering Co-op for May–Aug 2026.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2"
                        >
                            View Work <ArrowRight size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border border-gray-700 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-2xl rotate-6 opacity-20 blur-lg" />
                        <div className="absolute inset-0 bg-[#1a1a1a] rounded-2xl border border-gray-800 p-8 flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-purple-400">
                                    <Layout size={32} />
                                    <span className="text-xl font-semibold">Systems Dev</span>
                                </div>
                                <div className="flex items-center gap-4 text-blue-400">
                                    <Code size={32} />
                                    <span className="text-xl font-semibold">C/C++ & Python</span>
                                </div>
                                <div className="flex items-center gap-4 text-green-400">
                                    <Database size={32} />
                                    <span className="text-xl font-semibold">Full Stack</span>
                                </div>
                            </div>

                            <div className="mt-8 p-4 bg-black/50 rounded-xl border border-gray-800">
                                <code className="text-sm text-gray-400">
                                    <span className="text-purple-400">const</span> <span className="text-blue-400">student</span> = <span className="text-yellow-400">{`{`}</span><br />
                                    &nbsp;&nbsp;name: <span className="text-green-400">'Uddrity Das'</span>,<br />
                                    &nbsp;&nbsp;focus: <span className="text-green-400">'OS & Graphics'</span>,<br />
                                    &nbsp;&nbsp;status: <span className="text-green-400">'Seeking Co-op'</span><br />
                                    <span className="text-yellow-400">{`}`}</span>;
                                </code>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
