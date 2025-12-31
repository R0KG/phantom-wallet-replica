import { ChevronRight, CheckCircle2 } from 'lucide-react';

// Official SVGs adapted to match user requirements

const SolanaLogo = () => (
    // Solana: Gradient Bars on Black
    <svg viewBox="0 0 32 32" className="w-[32px] h-[32px]">
        <defs>
            <linearGradient id="solanaGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9945FF" />
                <stop offset="100%" stopColor="#14F195" />
            </linearGradient>
        </defs>
        <circle cx="16" cy="16" r="16" fill="#000000" />
        <path d="M9.925 19.687a.59.59 0 01.415-.17h14.366a.29.29 0 01.207.497l-2.838 2.815a.59.59 0 01-.415.171H7.294a.291.291 0 01-.207-.498l2.838-2.815zm0-10.517A.59.59 0 0110.34 9h14.366c.261 0 .392.314.207.498l-2.838 2.815a.59.59 0 01-.415.17H7.294a.291.291 0 01-.207-.497L9.925 9.17zm12.15 5.225a.59.59 0 00-.415-.17H7.294a.291.291 0 00-.207.498l2.838 2.815c.11.109.26.17.415.17h14.366a.291.291 0 00.207-.498l-2.838-2.815z" fill="url(#solanaGrad)" />
    </svg>
);

const EthLogo = () => (
    // Ethereum: Dark Grey Diamond on Light Grey Circle (Monochrome)
    <svg viewBox="0 0 32 32" className="w-[32px] h-[32px]">
        <circle cx="16" cy="16" r="16" fill="#E5E7EB" />
        <g fill="none" fillRule="evenodd">
            {/* Left Top Face - Medium Dark */}
            <path fill="#525252" d="M16 4v8.87l7.497 3.35z" />
            {/* Left Top Face (Actual Left) */}
            <path fill="#525252" d="M16 4L8.5 16.22l7.5-3.35z" />

            {/* Right Top Face - Darker */}
            <path fill="#171717" d="M16 4v8.87l7.497 3.35z" />

            {/* Bottom Faces */}
            <path fill="#525252" d="M16 27.995v-6.028L8.5 17.616z" />
            <path fill="#171717" d="M16 21.968v6.027L23.5 17.616z" />

            {/* Middle shadows/depth if needed, simplified to 4 main facets for clarity matching the flat style */}
            <path fill="#525252" d="M8.5 16.22l7.5 4.353v-7.701z" />
            <path fill="#171717" d="M16 20.573l7.5-4.353-7.5-3.348z" />
        </g>
    </svg>
);

const BtcLogo = () => (
    // Bitcoin: White B on Orange Circle
    <svg viewBox="0 0 32 32" className="w-[32px] h-[32px]">
        <g fill="none" fillRule="evenodd">
            <circle cx="16" cy="16" r="16" fill="#F7931A" />
            <path fill="#FFF" fillRule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z" />
        </g>
    </svg>
);


interface TokenProps {
    name: string;
    symbol: string;
    amount: string;
    amountFiat: string;
    change: string;
    Icon: React.FC;
    badge?: string;
    isVerified?: boolean;
}

function TokenCard({ name, symbol, amount, amountFiat, change, Icon, badge, isVerified }: TokenProps) {
    return (
        <div className="flex items-center justify-between p-4 bg-[#1C1C1C] rounded-[24px] mb-3 hover:bg-[#252525] transition-colors cursor-pointer active:scale-[0.98]">
            <div className="flex items-center gap-4">
                {/* Token Icon */}
                <div className={`w-[48px] h-[48px] flex items-center justify-center shrink-0`}>
                    <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full">
                        <Icon />
                    </div>
                </div>

                <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-1.5">
                        <span className="text-[17px] font-bold text-white leading-tight tracking-wide">{name}</span>
                        {isVerified && <CheckCircle2 className="w-[14px] h-[14px] text-[#AB9FF2] fill-[#AB9FF2]/20" strokeWidth={3} />}
                        {badge && (
                            <span className="bg-[#333333] text-[#A0A0A0] text-[10px] px-1.5 py-0.5 rounded-[4px] font-medium ml-1">
                                {badge}
                            </span>
                        )}
                    </div>
                    <div className="text-[14px] text-[#999999] font-medium leading-tight">
                        {amount} {symbol}
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-end gap-0.5">
                <span className="text-[17px] font-semibold text-white leading-tight">${amountFiat}</span>
                <span className={`text-[14px] font-medium leading-tight ${change.startsWith('+') ? 'text-[#14F195]' : 'text-[#999999]'}`}>
                    {change}
                </span>
            </div>
        </div>
    );
}

export function TokenList() {
    const tokens = [
        { name: 'Solana', symbol: 'SOL', amount: '4,250.8', amountFiat: '633,240.20', change: '+$1,240.50', Icon: SolanaLogo, isVerified: true },
        { name: 'Ethereum', symbol: 'ETH', amount: '185.2', amountFiat: '695,450.50', change: '+$3,402.10', Icon: EthLogo, isVerified: true },
        { name: 'Bitcoin', symbol: 'BTC', amount: '14.8', amountFiat: '982,120.00', change: '-$520.00', Icon: BtcLogo, badge: 'Taproot', isVerified: true },
    ];

    return (
        <div className="px-4 mb-2">
            <div className="flex items-center gap-1 mb-2 group cursor-pointer w-fit py-1">
                <h2 className="text-[19px] font-bold text-white tracking-wide">Tokens</h2>
                <ChevronRight className="w-5 h-5 text-[#999999] group-hover:text-white transition-colors" />
            </div>

            <div className="flex flex-col">
                {tokens.map((token) => (
                    <TokenCard key={token.symbol} {...token} />
                ))}
            </div>
        </div>
    );
}
