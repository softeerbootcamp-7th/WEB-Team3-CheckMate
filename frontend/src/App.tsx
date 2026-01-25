import './App.css';

import { useState } from 'react';

import { DateRangePicker } from '@/components/shared/date-range-picker/DateRangePicker';
import { DATE_RANGE_PICKER_TYPE } from '@/constants/shared';

import reactLogo from './assets/react.svg';

import viteLogo from '/assets/vite.svg';

function App() {
  const [count, setCount] = useState(0);
  const [stateDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  return (
    <>
      <h1>Checkmate</h1>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="flex flex-col gap-200">
        <span>시작 날짜: {stateDate?.toLocaleDateString()}</span>
        <span>종료 날짜: {endDate?.toLocaleDateString()}</span>
      </div>
      <DateRangePicker
        startDate={stateDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        dateRangePickerType={DATE_RANGE_PICKER_TYPE.date}
      />
    </>
  );
}

export default App;
