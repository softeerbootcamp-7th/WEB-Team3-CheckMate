import { useLocation } from 'react-router-dom';

import { MiniViewActiveCard } from './MiniViewActiveCard';
import { MiniViewEmptyCard } from './MiniViewEmptyCard';

export const MiniView = () => {
  const searchParams = new URLSearchParams(useLocation().search);
  const title = searchParams.get('tab') || '알 수 없음';

  return (
    <section className="flex min-w-120 grow flex-col p-6.25 pt-20">
      <header className="mb-20 pl-5">
        <h1 className="title-large-bold text-grey-900">{title}</h1>
      </header>
      <div className="relative mx-auto min-h-181 min-w-137.5" ref={gridRef}>
        {/* 그리드 셀 가이드라인 */}
        <div className="grid h-full grow grid-cols-3 grid-rows-3 gap-5">
          {Array.from({ length: GRID_ROW_SIZE * GRID_COL_SIZE }).map(
            (_, index) => (
              <MiniViewEmptyCard key={`grid-${index}`} />
            ),
          )}
        </div>

        {/* 활성 카드 */}
        {(tempLayout || placedCards).map((card) => (
          <MiniViewActiveCard
            key={`mini-${card.cardCode}`}
            cardCode={card.cardCode}
            posX={card.colNo}
            posY={card.rowNo}
          />
        ))}
      </div>
    </section>
  );
};
