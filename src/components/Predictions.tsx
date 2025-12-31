import { ChevronRight } from 'lucide-react';

function PredictionCard({ title, volume, date, imageColor, icon }: { title: string, volume: string, date: string, imageColor: string, icon?: string }) {
    return (
        <div className="flex-shrink-0 w-[145px] p-3 bg-[#252525] rounded-[20px] flex flex-col gap-3 hover:bg-[#2F2F2F] transition-colors cursor-pointer active:scale-95">
            <div className={`w-10 h-10 rounded-[12px] ${imageColor} flex items-center justify-center shadow-sm overflow-hidden relative`}>
                {/* Placeholder Pattern */}
                <div className="absolute inset-0 bg-white/10"></div>
                {icon && <span className="text-xl">{icon}</span>}
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-[13px] font-semibold text-white leading-[1.2] line-clamp-3 min-h-[46px] tracking-wide">
                    {title}
                </h3>
                <div className="text-[11px] text-[#999999] font-medium leading-tight">
                    {volume} Vol • {date}
                </div>
            </div>
        </div>
    )
}

export function Predictions() {
    return (
        <div className="px-4 mb-24">
            <div className="flex items-center gap-1 mb-3 group cursor-pointer w-fit">
                <h2 className="text-[17px] font-semibold text-white">Predictions</h2>
                <ChevronRight className="w-4 h-4 text-[#999999] group-hover:text-white transition-colors" />
            </div>

            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 snap-x">
                <PredictionCard
                    title="Iowa at Vanderbilt"
                    volume="$16.5M"
                    date="College..."
                    imageColor="bg-[#F59E0B]" // Orange/Yellow
                    icon="🏈"
                />
                <PredictionCard
                    title="Who will Trump nominate as FBI Dir..."
                    volume="$19.6M"
                    date="Jul 1..."
                    imageColor="bg-[#2563EB]" // Blue
                    icon="🇺🇸"
                />
                <PredictionCard
                    title="Who will win the election?"
                    volume="$4.1M"
                    date="Aug 1"
                    imageColor="bg-[#A855F7]" // Purple
                    icon="🗳️"
                />
            </div>
        </div>
    )
}
