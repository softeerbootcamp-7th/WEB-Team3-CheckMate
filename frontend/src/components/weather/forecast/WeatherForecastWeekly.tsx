import type { WeatherForecastOneDayAmPm } from '@/types/weather';

import { WeatherForecastOneDayAmPmItem } from './WeatherForecastOneDayAmPmItem';

interface WeatherForecastWeeklyCardProps {
  oneDayAmPmForecastList: WeatherForecastOneDayAmPm[];
}

export const WeatherForecastWeekly = ({
  oneDayAmPmForecastList,
}: WeatherForecastWeeklyCardProps) => {
  return (
    <div className="mb-4 flex justify-between">
      {oneDayAmPmForecastList.map((oneDayAmPmForecast) => {
        return (
          <WeatherForecastOneDayAmPmItem
            key={oneDayAmPmForecast.date.toISOString()}
            date={oneDayAmPmForecast.date}
            am={oneDayAmPmForecast.am}
            pm={oneDayAmPmForecast.pm}
          />
        );
      })}
    </div>
  );
};
