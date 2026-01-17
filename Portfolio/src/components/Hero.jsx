
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, FileText, Terminal, Database, Cpu } from 'lucide-react';
import { personalInfo } from '../data/content';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        System-Level AI Engineering
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Building <span className="text-blue-500">Intelligent</span><br />
                        Backend Systems.
                    </h1>

                    <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed border-l-2 border-slate-800 pl-6">
                        {personalInfo.bio}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all flex items-center gap-2 rounded-lg"
                        >
                            View Projects <ArrowRight size={18} />
                        </a>

                        <div className="flex gap-3">
                            {personalInfo.socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className="p-3 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 transition-all rounded-lg"
                                    aria-label={social.name}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Tagline / Tech Stack hints */}
                    <div className="grid grid-cols-3 gap-4 border-t border-slate-800 pt-8">
                        <div>
                            <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Core</div>
                            <div className="text-slate-200 font-medium">Python & Java</div>
                        </div>
                        <div>
                            <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Focus</div>
                            <div className="text-slate-200 font-medium">MLOps & Data</div>
                        </div>
                        <div>
                            <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Approach</div>
                            <div className="text-slate-200 font-medium">System Design</div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side Technical Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                        {/* Abstract System Architecture Diagram */}
                        <div className="absolute inset-0 bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl">
                            <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                                </div>
                                <div className="text-xs text-slate-500 font-mono">system_architecture.svg</div>
                            </div>

                            {/* Diagram Content */}
                            <div className="space-y-4">
                                <div className="flex justify-center">
                                    <div className="px-4 py-2 bg-slate-800 border border-slate-700 rounded text-slate-300 text-xs font-mono flex items-center gap-2">
                                        <Database size={14} className="text-blue-500" /> Data Ingestion
                                    </div>
                                </div>
                                <div className="h-8 flex justify-center"><div className="w-0.5 bg-slate-800"></div></div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-slate-800/50 border border-blue-500/30 rounded text-center">
                                        <Cpu size={24} className="text-blue-500 mx-auto mb-2" />
                                        <div className="text-xs text-slate-300 font-mono">Model Inference</div>
                                    </div>
                                    <div className="p-4 bg-slate-800/50 border border-slate-700 rounded text-center">
                                        <Terminal size={24} className="text-purple-400 mx-auto mb-2" />
                                        <div className="text-xs text-slate-300 font-mono">Backend Logic</div>
                                    </div>
                                </div>

                                <div className="h-8 flex justify-center"><div className="w-0.5 bg-slate-800"></div></div>

                                <div className="flex justify-center">
                                    <div className="px-4 py-2 bg-slate-800 border border-slate-700 rounded text-slate-300 text-xs font-mono w-full text-center">
                                        <span className="text-green-500">●</span> Production API
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -right-12 -bottom-12 p-4 bg-slate-900 border border-slate-700 rounded-lg shadow-xl max-w-[200px]">
                                <div className="text-xs text-slate-500 mb-2 font-mono">metric_monitoring</div>
                                <div className="flex items-end gap-1 h-12">
                                    <div className="w-1/4 bg-blue-500/20 h-[40%]"></div>
                                    <div className="w-1/4 bg-blue-500/40 h-[60%]"></div>
                                    <div className="w-1/4 bg-blue-500/60 h-[30%]"></div>
                                    <div className="w-1/4 bg-blue-500 h-[80%]"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
