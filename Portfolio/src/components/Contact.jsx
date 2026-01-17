
import SectionWrapper from './SectionWrapper';
import { Mail, Send, Terminal, Cpu } from 'lucide-react';
import { useState } from 'react';
import { personalInfo } from '../data/content';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate sending
        setTimeout(() => {
            setIsSubmitting(false);
            setFormState({ name: '', email: '', message: '' });
            alert("Message Protocol Initiated. (Simulation)");
        }, 2000);
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value });
    }

    return (
        <SectionWrapper id="contact" className="border-t border-slate-800 bg-slate-950">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                {/* Left: Context / Prompt */}
                <div className="space-y-8">
                    <div>
                        <div className="flex items-center gap-2 text-blue-500 mb-4">
                            <Terminal size={20} />
                            <span className="font-mono text-sm">initiate_handshake.sh</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Build <br />
                            <span className="text-slate-500">Something Scalable?</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed border-l-2 border-slate-800 pl-4">
                            I am currently open to discussing full-time roles in ML Engineering or Backend Systems.
                        </p>
                    </div>

                    <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg font-mono text-sm space-y-4">
                        <div className="flex justify-between items-center text-slate-500 border-b border-slate-800 pb-2">
                            <span>user@portfolio:~$ contact --info</span>
                            <Cpu size={14} />
                        </div>
                        <div className="space-y-2">
                            <div className="flex gap-4">
                                <span className="text-blue-500 w-16">EMAIL</span>
                                <a href={`mailto:${personalInfo.email}`} className="text-slate-300 hover:text-white transition-colors">{personalInfo.email}</a>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-blue-500 w-16">GITHUB</span>
                                <a href={personalInfo.socials.find(s => s.name === "GitHub")?.url} className="text-slate-300 hover:text-white transition-colors">@Nick</a>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-blue-500 w-16">STATUS</span>
                                <span className="text-green-400">● Online (Open to Work)</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Input Terminal */}
                <div className="relative">
                    {/* Decorative Grid Background for Form */}
                    <div className="absolute inset-0 bg-slate-900 border border-slate-800 rounded-xl transform rotate-1"></div>

                    <div className="relative bg-slate-950 border border-slate-800 rounded-xl p-8 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-xs font-mono text-blue-500 mb-2">var NAME =</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="w-full bg-slate-900/50 border-b border-slate-700 p-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-colors font-mono"
                                    placeholder='"John Doe"'
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs font-mono text-blue-500 mb-2">var EMAIL =</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="w-full bg-slate-900/50 border-b border-slate-700 p-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-colors font-mono"
                                    placeholder='"john@example.com"'
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs font-mono text-blue-500 mb-2">func MESSAGE() {`{`}</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="w-full bg-slate-900/50 border-l-2 border-slate-700 p-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-colors font-mono resize-none ml-2"
                                    placeholder="// Enter your inquiry here..."
                                ></textarea>
                                <div className="text-xs font-mono text-blue-500 mt-1">{'}'}</div>
                            </div>

                            <button
                                disabled={isSubmitting}
                                className="w-full py-4 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-blue-400 font-mono text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 group hover:border-blue-500"
                            >
                                {isSubmitting ? (
                                    <span className="animate-pulse">Executing...</span>
                                ) : (
                                    <>
                                        ./send_message.sh <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default Contact;
