import { useCallback, useMemo } from 'react';

import { toast } from 'sonner';

import {
  GRID_COL_SIZE,
  GRID_ROW_SIZE,
  type MetricCardCode,
} from '@/constants/dashboard';
import type { DashboardCard } from '@/types/dashboard';

import { useEditCardContext } from './useEditCardContext';

export const useEditCard = () => {
  const { initGrid, grid, setGrid } = useEditCardContext();

  const isAvailablePosition = useCallback(
    (x: number, y: number, sizeX: number, sizeY: number): boolean => {
      for (let r = y; r < y + sizeY; r++) {
        for (let c = x; c < x + sizeX; c++) {
          if (r > GRID_ROW_SIZE || c > GRID_COL_SIZE || grid[r][c] !== null) {
            return false;
          }
        }
      }
      return true;
    },
    [grid],
  );

  const isDirty = useMemo((): boolean => {
    for (let r = 1; r <= GRID_ROW_SIZE; r++) {
      for (let c = 1; c <= GRID_COL_SIZE; c++) {
        if (grid[r][c] !== initGrid[r][c]) {
          return true;
        }
      }
    }
    return false;
  }, [grid, initGrid]);

  const getFirstAvailablePosition = useCallback(
    (sizeX: number, sizeY: number): { x: number; y: number } => {
      for (let r = 1; r <= GRID_ROW_SIZE; r++) {
        for (let c = 1; c <= GRID_COL_SIZE; c++) {
          if (isAvailablePosition(c, r, sizeX, sizeY)) {
            return { x: c, y: r };
          }
        }
      }
      return { x: -1, y: -1 };
    },
    [isAvailablePosition],
  );

  const addCard = useCallback(
    (code: MetricCardCode, sizeX: number, sizeY: number) => {
      const position = getFirstAvailablePosition(sizeX, sizeY);
      if (position.x === -1 && position.y === -1) {
        toast('카드를 놓을 공간이 없어요.', {
          duration: 3500,
          className:
            'bg-grey-900! text-grey-50! border-none! body-small-semibold! ',
          position: 'bottom-center',
        });
        return;
      }

      setGrid((prev) => {
        const newGrid = prev.map((row) => [...row]);
        for (let r = position.y; r < position.y + sizeY; r++) {
          for (let c = position.x; c < position.x + sizeX; c++) {
            newGrid[r][c] = code;
          }
        }
        return newGrid;
      });
    },
    [getFirstAvailablePosition, setGrid],
  );

  const removeCard = useCallback(
    (code: MetricCardCode) => {
      setGrid((prev) => {
        const newGrid = prev.map((row) => [...row]);
        for (let r = 1; r <= GRID_ROW_SIZE; r++) {
          for (let c = 1; c <= GRID_COL_SIZE; c++) {
            if (newGrid[r][c] === code) {
              newGrid[r][c] = null;
            }
          }
        }
        return newGrid;
      });
    },
    [setGrid],
  );

  // const printGrid = (gridToPrint: string[][]) => {
  //   let rowStr = '';
  //   for (let r = 1; r <= GRID_ROW_SIZE; r++) {
  //     for (let c = 1; c <= GRID_COL_SIZE; c++) {
  //       rowStr += gridToPrint[r][c] === null ? '[ ]' : `[${gridToPrint[r][c]}]`;
  //     }
  //     rowStr += '\n';
  //   }
  //   console.log(rowStr);
  // };

  const cards = useMemo(() => {
    const cardList: DashboardCard[] = [];
    const cardSet = new Set<string>();
    for (let r = 1; r <= GRID_ROW_SIZE; r++) {
      for (let c = 1; c <= GRID_COL_SIZE; c++) {
        const code = grid[r][c];
        if (code !== null && !cardSet.has(code)) {
          cardList.push({ cardCode: code, rowNo: r, colNo: c });
          cardSet.add(code);
        }
      }
    }
    return cardList;
  }, [grid]);

  const emptyCellCount = useMemo(() => {
    let count = 0;
    for (let r = 1; r <= GRID_ROW_SIZE; r++) {
      for (let c = 1; c <= GRID_COL_SIZE; c++) {
        if (grid[r][c] === null) {
          count++;
        }
      }
    }
    return count;
  }, [grid]);

  return {
    grid,
    isDirty,
    addCard,
    removeCard,
    cards,
    emptyCellCount,
  };
};
