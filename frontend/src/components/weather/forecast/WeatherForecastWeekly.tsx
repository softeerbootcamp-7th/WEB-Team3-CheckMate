import { DefaultCardWrapper } from '@/components/shared/default-card-wrapper';
import type { WeatherForecastOneDayAmPm } from '@/types/weather';

import { WeatherForecastOneDayAmPmItem } from './WeatherForecastOneDayAmPmItem';

interface WeatherForecastWeeklyCardProps {
  oneDayAmPmForecastList: WeatherForecastOneDayAmPm[];
}

export const WeatherForecastWeekly = ({
  oneDayAmPmForecastList,
}: WeatherForecastWeeklyCardProps) => {
  return (
    <DefaultCardWrapper title="주간 날씨 예보" width={1060} height={228}>
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
    </DefaultCardWrapper>
  );
};
