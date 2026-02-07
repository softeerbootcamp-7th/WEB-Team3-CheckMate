import { PopularMenuOverview } from '@/components/menu';
import { MenuSalesPatternOverview } from '@/components/menu/menu-salse-pattern';
export const MenuPage = () => {
  return (
    <div className="flex size-full flex-col gap-12 py-32.5">
      <PopularMenuOverview />
      <MenuSalesPatternOverview />
    </div>
  );
};
