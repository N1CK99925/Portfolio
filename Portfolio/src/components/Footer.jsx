
import { personalInfo } from '../data/content';
import { GitBranch, Command } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 py-12 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex items-center gap-2 text-slate-300 font-bold text-lg">
                    <Command size={20} className="text-blue-500" />
                    {personalInfo.name}
                </div>

                <div className="flex gap-8 text-sm font-mono text-slate-500">
                    <div className="flex items-center gap-2">
                        <GitBranch size={14} />
                        <span>main</span>
                    </div>
                    <div>
                        Build v1.0.0
                    </div>
                    <div>
                        © {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
