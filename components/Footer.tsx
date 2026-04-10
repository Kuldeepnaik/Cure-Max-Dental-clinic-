import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-heading font-bold text-sm">
                CM
              </div>
              <span className="font-heading font-bold text-xl text-white">Cure Max Hospital</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Providing expert medical care and advanced treatments in Hongasandra, Bangalore. Your health is our priority.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#home" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="#gallery" className="hover:text-blue-400 transition-colors">Gallery</Link></li>
              <li><Link href="#contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>+91 95383 45614</li>
              <li>Begur Rd, beside Kanti Sweets,</li>
              <li>opposite Reliance Fresh, Hongasandra,</li>
              <li>Bengaluru, Karnataka 560114</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-sm text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Cure Max Hospital. All rights reserved.</p>
          <p>Designed for better healthcare.</p>
        </div>
      </div>
    </footer>
  );
}
