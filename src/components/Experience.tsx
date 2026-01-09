import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-[#0a0a0a] text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Experience & <span className="text-purple-400">Education</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My academic journey and professional leadership roles.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-purple-900/20 rounded-lg text-purple-400">
                                <GraduationCap size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">Education</h3>
                        </div>

                        <div className="space-y-8 border-l-2 border-gray-800 ml-4 pl-8 relative">
                            <div className="relative">
                                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-purple-500 border-4 border-[#0a0a0a]" />
                                <h4 className="text-xl font-bold text-white">Bachelor of Engineering, Computer Science Co-op</h4>
                                <p className="text-purple-400 font-medium">McMaster University</p>
                                <div className="flex items-center gap-2 text-gray-500 text-sm mt-1 mb-4">
                                    <Calendar size={14} />
                                    <span>Sep 2021 – Present</span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Level III Student. Relevant coursework: Data Structures & Algorithms, Operating Systems, Concurrent Systems, Computer Graphics, Databases, Automata & Computability, Computer Networks.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-blue-900/20 rounded-lg text-blue-400">
                                <Briefcase size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">Experience</h3>
                        </div>

                        <div className="space-y-12 border-l-2 border-gray-800 ml-4 pl-8 relative">
                            <div className="relative">
                                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-blue-500 border-4 border-[#0a0a0a]" />
                                <h4 className="text-xl font-bold text-white">Interim VP (Events Team) & Events Coordinator</h4>
                                <p className="text-blue-400 font-medium">McMaster University Bengali Students Association</p>
                                <div className="flex items-center gap-2 text-gray-500 text-sm mt-1 mb-4">
                                    <Calendar size={14} />
                                    <span>Sep 2024 – Present</span>
                                </div>
                                <ul className="list-disc list-outside text-gray-400 text-sm leading-relaxed space-y-2 ml-4">
                                    <li>Designed and presented technical event layouts, iterating based on feedback to optimize user flow.</li>
                                    <li>Conducted peer review sessions on promotional designs and technical plans.</li>
                                    <li>Managed multi-project schedules and task assignment under tight deadlines.</li>
                                </ul>
                            </div>

                            <div className="relative">
                                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gray-700 border-4 border-[#0a0a0a]" />
                                <h4 className="text-xl font-bold text-white">Marketing Director</h4>
                                <p className="text-blue-400 font-medium">McMaster University Bengali Students Association</p>
                                <div className="flex items-center gap-2 text-gray-500 text-sm mt-1 mb-4">
                                    <Calendar size={14} />
                                    <span>Sep 2023 – Aug 2024</span>
                                </div>
                                <ul className="list-disc list-outside text-gray-400 text-sm leading-relaxed space-y-2 ml-4">
                                    <li>Leveraged analytics to iterate marketing campaigns, achieving 35% increase in attendance.</li>
                                    <li>Collaborated with cross-functional teams via Jira and GitHub for unified planning.</li>
                                    <li>Refined user-centric campaign designs and provided feedback on UI mockups.</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
