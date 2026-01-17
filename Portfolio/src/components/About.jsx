
import SectionWrapper from './SectionWrapper';
import { skills } from '../data/content';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const About = () => {
    return (
        <SectionWrapper id="about" className="bg-slate-900 border-y border-slate-800">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-16">

                {/* Left: Philosophy or Bio Summary */}
                <div>
                    <div className="sticky top-24">
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                            <Terminal className="text-blue-500" />
                            Engineering Philosophy
                        </h2>

                        <div className="space-y-6">
                            <div className="p-5 bg-slate-950/50 border-l-2 border-blue-500 rounded-r-lg">
                                <h3 className="text-slate-200 font-semibold mb-2">Explicit Design</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Prefer explicit design over magic. Always ask: Why this model? Why this architecture?
                                </p>
                            </div>

                            <div className="p-5 bg-slate-950/50 border-l-2 border-slate-700 rounded-r-lg">
                                <h3 className="text-slate-200 font-semibold mb-2">Maintainability</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Optimize for maintainability and extensibility. I treat ML systems as software systems, not experiments.
                                </p>
                            </div>

                            <div className="p-5 bg-slate-950/50 border-l-2 border-slate-700 rounded-r-lg">
                                <h3 className="text-slate-200 font-semibold mb-2">System Depth</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    I am not a prompt engineer or a pure data scientist. I am a system-level AI/ML engineer with backend depth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Technical Skills Grid */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Technical Stack</h3>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {skills.map((category, idx) => (
                            <motion.div
                                key={category.name}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-slate-950 border border-slate-800 rounded-xl p-5 hover:border-blue-500/30 transition-colors"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-slate-900 rounded-lg text-blue-400">
                                        <category.icon size={20} />
                                    </div>
                                    <h4 className="font-semibold text-slate-200 text-sm uppercase tracking-wide">{category.name}</h4>
                                </div>

                                <ul className="space-y-2">
                                    {category.items.map((skill) => (
                                        <li key={skill} className="text-slate-400 text-sm flex items-start gap-2">
                                            <span className="text-slate-700 mt-1">▹</span> {skill}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default About;
