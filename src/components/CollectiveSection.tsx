import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const members = [
  { name: 'Xeyronox', role: 'Curator / Purple Hat / Owner', desc: 'Codename. Former black hat, current purple. Curates this showcase, studies every tool listed, and documents offensive-defensive overlap.', link: 'github.com/getxeyronoxz' },
  { name: 'Gallopsled Team', role: 'Exploit Dev / CTF Org', desc: 'The team behind Pwntools. Created the gold standard CTF exploitation framework used globally by binary researchers.', link: 'github.com/Gallopsled' },
  { name: 'Gordon Lyon', role: 'Network Security Researcher', desc: 'Author of Nmap. Wrote the definitive open-source network scanner still setting the standard after 25+ years of active development.', link: 'nmap.org' },
  { name: 'Miroslav Stampar', role: 'Web Security / SQL Injection', desc: 'Creator of SQLMap. Built the most comprehensive SQL injection tool in existence and has maintained it for over a decade.', link: 'github.com/stamparm' },
  { name: 'NSA Research', role: 'Reverse Engineering', desc: 'Released Ghidra to the public in 2019 — a full-featured SRE suite that changed the accessibility of binary reverse engineering overnight.', link: 'github.com/NationalSecurityAgency' },
  { name: 'Rapid7 / HD Moore', role: 'Pentest Framework', desc: 'The team behind Metasploit. HD Moore founded the project that became the industry-standard penetration testing platform for red teams worldwide.', link: 'metasploit.com' },
  { name: 'Zach Rice', role: 'DevSecOps / Secret Detection', desc: 'Creator of Gitleaks. Solved one of the most overlooked problems in software security — developers accidentally committing credentials to version control.', link: 'github.com/zricethezav' },
  { name: 'Philippe Biondi', role: 'Network Protocol Research', desc: 'Author of Scapy. Gave the security community a Python interface to raw network packets that remains unmatched for protocol research and custom probing.', link: 'github.com/secdev' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function CollectiveSection() {
  return (
    <section id="collective" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-foreground mb-2">Core Collective</h2>
          <p className="text-muted-foreground text-sm mb-10">The builders behind the tools. Credited, not claimed.</p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {members.map((m, i) => (
            <motion.div key={i} variants={item} className="xr-card p-5 flex flex-col">
              <h3 className="font-syne font-bold text-foreground text-sm mb-1">{m.name}</h3>
              <p className="text-[10px] text-xr-purple uppercase tracking-wider mb-3">{m.role}</p>
              <p className="text-xs text-muted-foreground flex-1 mb-3">{m.desc}</p>
              <a href={`https://${m.link}`} target="_blank" rel="noopener noreferrer"
                className="text-xs text-xr-cyan hover:text-primary transition-colors flex items-center gap-1">
                {m.link}<ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
