
import SectionWrapper from './SectionWrapper';
import { projects } from '../data/content';
import { ExternalLink, Github, Terminal } from 'lucide-react';

const Projects = () => {
    return (
        <SectionWrapper id="projects">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-800 pb-8">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
                        <Terminal className="text-blue-500" /> Selected Projects
                    </h2>
                    <p className="text-slate-400 max-w-xl">
                        End-to-end systems and research implementations.
                    </p>
                </div>
                <div className="hidden md:block">
                    <span className="text-xs font-mono text-slate-500">ls -la ./projects</span>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all rounded-lg overflow-hidden flex flex-col h-full"
                    >
                        {/* Header / Top Bar */}
                        <div className="h-10 bg-slate-950 border-b border-slate-800 flex items-center px-4 justify-between">
                            <div className="flex gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-red-500/50 transition-colors"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-yellow-500/50 transition-colors"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-green-500/50 transition-colors"></div>
                            </div>
                            <div className="text-xs font-mono text-slate-600 group-hover:text-blue-400 transition-colors">
                                {project.title.toLowerCase().replace(/\s+/g, '-')}
                            </div>
                        </div>

                        <div className="p-6 flex-grow flex flex-col">
                            <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="mb-6 space-y-2">
                                {project.details?.map((detail, idx) => (
                                    <div key={idx} className="flex gap-2 text-sm text-slate-500">
                                        <span className="text-blue-500/50">▹</span> {detail}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs font-mono px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700/50"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-slate-800">
                                    <a href={project.github} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                                        <Github size={16} /> Source
                                    </a>
                                    {/* Only show demo if meaningful link exists, assuming '#' is placeholder, but rendered anyway for now */}
                                    <a href={project.demo} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                                        <ExternalLink size={16} /> Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
