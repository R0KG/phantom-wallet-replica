import { Send, ArrowRightLeft, DollarSign, LayoutGrid } from 'lucide-react';

// Custom SVGs for specific Action Buttons to match Phantom 1:1

const ReceiveIcon = ({ className }: { className?: string }) => (
    // QR Code / Grid style icon
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h7v7H3z" />
        <path d="M14 3h7v7h-7z" />
        <path d="M14 14h7v7h-7z" />
        <path d="M3 14h7v7H3z" />
    </svg>
)

const SendIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" />
        <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
)

const SwapIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3 4 7l4 4" />
        <path d="M4 7h16" />
        <path d="m16 21 4-4-4-4" />
        <path d="M20 17H4" />
    </svg>
)

const BuyIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1v22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
)

export function ActionGrid() {
    const actions = [
        { label: 'Receive', Icon: ReceiveIcon, color: 'text-[#C084FC]' }, // Purple
        { label: 'Send', Icon: SendIcon, color: 'text-[#C084FC]' },    // Blue
        { label: 'Swap', Icon: SwapIcon, color: 'text-[#C084FC]' }, // Green
        { label: 'Buy', Icon: BuyIcon, color: 'text-[#C084FC]' },     // Pink
    ];

    return (
        <div className="grid grid-cols-4 gap-3 px-4 mb-9">
            {actions.map((action, index) => (
                <button key={index} className="group flex flex-col items-center gap-2">
                    <div className="w-full aspect-square bg-[#252525] rounded-[24px] flex items-center justify-center transition-all active:scale-95 hover:bg-[#2F2F2F]">
                        <action.Icon className={`w-8 h-8 ${action.color}`} />
                    </div>
                    <span className="text-[13px] font-medium text-white tracking-wide">{action.label}</span>
                </button>
            ))}
        </div>
    );
}
