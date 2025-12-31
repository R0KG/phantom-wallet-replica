import { Header } from './components/Header';
import { ActionGrid } from './components/ActionGrid';
import { TokenList } from './components/TokenList';
import { Predictions } from './components/Predictions';
import { BottomNav } from './components/BottomNav';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white selection:bg-purple-500/30">
      {/* Mobile Frame */}
      <div className="w-full max-w-[400px] h-[100dvh] sm:h-[850px] bg-phantom-bg sm:rounded-[40px] flex flex-col overflow-hidden sm:border-[8px] sm:border-zinc-900 relative shadow-2xl ring-1 ring-white/5">

        {/* Status Bar Placeholder (Visual only) */}
        <div className="h-[44px] w-full shrink-0 pt-[env(safe-area-inset-top)]"></div>

        {/* Content Area - Scrollable */}
        <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col">
          <Header />
          <ActionGrid />
          <TokenList />
          <Predictions />

          {/* Spacer for bottom nav */}
          <div className="h-20"></div>
        </div>

        {/* Bottom Nav - Fixed at bottom of container */}
        <div className="absolute bottom-0 left-0 right-0">
          <BottomNav />
        </div>

      </div>
    </div>
  )
}

export default App
