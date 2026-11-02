import React from 'react';
import { Activity, TerminalSquare, AlertTriangle, ChevronLeft, Database } from 'lucide-react';

/**
 * 🚧 NEXUS GLOBAL OFFLINE COMPONENT
 * Zobrazuje sa všade tam, kde uzol čaká na dekompresiu Architektom.
 */
export const GlobalOfflineNode = ({ nodeId, dimColor, onBack }) => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative z-[100] text-center p-8 animate-in fade-in zoom-in-95 duration-700">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/50 to-transparent pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative mb-12">
          <Activity size={120} className="animate-pulse opacity-40" style={{ color: dimColor }} />
          <Database size={40} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20" />
        </div>
        
        <div className="inline-flex items-center gap-4 mb-6 px-6 py-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-md">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
          <span className="text-red-500 font-black uppercase tracking-widest text-xs">OFFLINE_MODE</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
          Sektor <span style={{ color: dimColor }}>{nodeId}</span>
        </h1>
        
        <p className="text-white/40 font-mono text-lg md:text-xl max-w-2xl leading-relaxed mb-16">
          Tento uzol momentálne čaká na sémantickú dekompresiu. Dátový tok bude obnovený, akonáhle Architekt vloží do systému nový Payload.
        </p>

        <button 
          onClick={onBack}
          className="flex items-center gap-4 px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all shadow-2xl backdrop-blur-md text-white font-black uppercase tracking-[0.4em] text-sm hover:scale-105 active:scale-95"
        >
          <ChevronLeft size={24} style={{ color: dimColor }} />
          Návrat do Rozcestníka
        </button>

        <div className="mt-20 flex items-center gap-4 text-white/20 font-mono text-xs uppercase tracking-widest">
          <TerminalSquare size={16} /> Awaiting_Master_Injection // Protocol_V20
        </div>
      </div>
    </div>
  );
};