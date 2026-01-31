import { SectionTitle } from '@/components/shared';
import {
  mockHourlyForecastList,
  mockOneDayAmPmForecastList,
  mockTodayForecastData,
} from '@/mocks/weather';

import { WeatherForecastToday } from './WeatherForecastToday';
import { WeatherForecastTodayHourly } from './WeatherForecastTodayHourly';
import { WeatherForecastWeekly } from './WeatherForecastWeekly';

export const WeatherForecast = () => {
  return (
    <section className="flex w-full flex-col gap-4">
      <SectionTitle
        title="날씨예보"
        description="날씨를 보고 앞으로의 운영 전략을 짜보세요."
      />

      <section className="flex flex-col gap-5">
        <div className="flex gap-5">
          <WeatherForecastToday
            mainText={mockTodayForecastData.mainText}
            subText={mockTodayForecastData.subText}
            weatherAlert={mockTodayForecastData.weatherAlert}
          />

          <WeatherForecastTodayHourly
            hourlyForecastList={mockHourlyForecastList}
          />
        </div>

        <div>
          <WeatherForecastWeekly
            oneDayAmPmForecastList={mockOneDayAmPmForecastList}
          />
        </div>
      </section>
    </section>
  );
};
