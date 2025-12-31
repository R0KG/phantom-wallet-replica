import { Search, ScanLine } from 'lucide-react';

export function Header() {
    return (
        <div className="flex items-center justify-between px-4 py-3 pb-6 mt-2">
            <div className="flex items-center gap-3">
                {/* Exact Phantom Avatar Replica (CSS) */}
                <div className="w-[38px] h-[38px] rounded-full bg-[#FFEBA5] flex items-center justify-center relative overflow-hidden transition-transform active:scale-95 cursor-pointer">
                    <div className="absolute w-[28px] h-[28px] bg-white rounded-full -bottom-1 flex items-center justify-center shadow-sm">
                        <div className="flex gap-[5px] mt-[-2px]">
                            <div className="w-[3px] h-[3px] bg-black rounded-full"></div>
                            <div className="w-[3px] h-[3px] bg-black rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-[13px] leading-none text-zinc-400 font-medium tracking-wide mb-1">@ROKG1</div>
                    <div className="text-[17px] leading-none text-white font-semibold flex items-center gap-1">
                        Konto 1
                        <div className="w-[6px] h-[6px] bg-zinc-600 rounded-full ml-1"></div>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-5">
                <ScanLine className="w-6 h-6 text-zinc-400 hover:text-white transition-colors cursor-pointer" strokeWidth={2} />
                <Search className="w-6 h-6 text-zinc-400 hover:text-white transition-colors cursor-pointer" strokeWidth={2.5} />
            </div>
        </div>
    );
}
