import { motion } from 'framer-motion';

const tools = [
  { name: 'Pwntools', author: 'Gallopsled / Community', lang: 'Python', desc: 'Rapid exploit development framework for CTF and real-world binary exploitation. Handles sockets, processes, assembly, ROP chains, and more in a clean Python API.', tags: ['CTF', 'Binary Exploit', 'ROP'] },
  { name: 'Nmap', author: 'Gordon Lyon (Fyodor)', lang: 'C / Lua', desc: 'The standard for network discovery and security auditing. Maps open ports, service versions, OS fingerprints, and runs scriptable probes across entire subnets with precision.', tags: ['Recon', 'Network', 'Port Scan'] },
  { name: 'SQLMap', author: 'Miroslav Stampar / sqlmapproject', lang: 'Python', desc: 'Automated SQL injection detection and exploitation engine. Supports every major database backend, blind injection, time-based inference, and full database takeover.', tags: ['Web', 'SQLi', 'Automated'] },
  { name: 'Ghidra', author: 'NSA Research / NationalSecurityAgency', lang: 'Java', desc: "NSA's open-source software reverse engineering suite. Disassembles and decompiles binaries across architectures with scripting, collaborative analysis, and a full GUI.", tags: ['Reverse Engineering', 'Decompiler'] },
  { name: 'Metasploit', author: 'Rapid7 / Metasploit Project', lang: 'Ruby', desc: "The world's most widely used penetration testing framework. Thousands of modules covering exploit delivery, payload staging, post-exploitation, and auxiliary scanning.", tags: ['Pentest', 'Exploits', 'Post-Exploitation'] },
  { name: 'Gitleaks', author: 'Zach Rice / gitleaks', lang: 'Go', desc: 'SAST tool for detecting hardcoded secrets — API keys, passwords, tokens — in Git repositories. Integrates into pre-commit hooks and CI/CD pipelines with zero configuration.', tags: ['SAST', 'Secrets', 'DevSecOps'] },
  { name: 'Scapy', author: 'Philippe Biondi / secdev', lang: 'Python', desc: 'Python-based interactive packet manipulation library. Forge, send, capture, and decode packets at any layer. Indispensable for custom network probes, fuzzing, and protocol research.', tags: ['Network', 'Packets', 'Protocol'] },
  { name: 'Frida', author: 'Ole André V. Ravnås / frida-re', lang: 'C / JS', desc: 'Dynamic instrumentation toolkit for reverse engineers and security researchers. Inject JavaScript into native apps on Windows, macOS, Linux, iOS, and Android at runtime.', tags: ['Dynamic Analysis', 'iOS', 'Android'] },
  { name: 'Amass', author: 'Jeff Foley / OWASP', lang: 'Go', desc: 'Thorough DNS subdomain enumeration via brute force, web archive crawling, data source scraping, and certificate transparency logs. Essential for attack surface mapping at scale.', tags: ['OSINT', 'DNS', 'Recon'] },
];

const langColor: Record<string, string> = {
  'Python': 'text-xr-yellow',
  'C / Lua': 'text-xr-cyan',
  'Java': 'text-xr-orange',
  'Ruby': 'text-xr-red',
  'Go': 'text-xr-cyan',
  'C / JS': 'text-xr-green',
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function ToolsSection() {
  return (
    <section id="tools" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-foreground mb-2">Curated Arsenal</h2>
          <p className="text-muted-foreground text-sm mb-10">9 tools studied, respected, and documented. None of them are mine.</p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {tools.map((t, i) => (
            <motion.div key={i} variants={item} className="xr-card p-5 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-syne font-bold text-foreground">{t.name}</h3>
                  <p className="text-xs text-muted-foreground">{t.author}</p>
                </div>
                <span className={`text-xs font-mono font-bold ${langColor[t.lang] || 'text-muted-foreground'}`}>{t.lang}</span>
              </div>
              <p className="text-xs text-muted-foreground flex-1 mb-4">{t.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {t.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded text-[10px] border border-xr-purple/20 bg-xr-purple/5 text-xr-purple">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
