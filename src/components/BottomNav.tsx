import { Home, LayoutGrid, ArrowRightLeft, MessageSquare, Search } from 'lucide-react'; // Using Lucide but mimicking filled state

export function BottomNav() {
    const activeIndex = 0;
    const icons = [
        { icon: Home, label: 'Home' },
        { icon: LayoutGrid, label: 'Apps' },
        { icon: ArrowRightLeft, label: 'Swap' },
        { icon: MessageSquare, label: 'Chat' },
        { icon: Search, label: 'Search' },
    ];

    return (
        <div className="h-[90px] bg-[#161616]/95 backdrop-blur-md border-t border-white/5 flex items-start justify-around px-2 pt-3 pb-8">
            {icons.map((item, index) => {
                const isActive = index === activeIndex;
                // Phantom uses filled icons. We can approximate with strokeWidth and fill for some.
                return (
                    <button key={index} className="flex flex-col items-center justify-center w-14 h-12 active:scale-95 transition-transform">
                        <item.icon
                            className={`w-[26px] h-[26px] transition-colors duration-200 ${isActive
                                    ? 'text-white fill-white'
                                    : 'text-[#888888] hover:text-[#AAAAAA]'
                                }`}
                            strokeWidth={isActive ? 0 : 2.5}
                        />
                    </button>
                )
            })}
        </div>
    );
}
