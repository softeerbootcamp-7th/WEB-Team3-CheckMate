import { WeatherForecast } from '@/components/weather/forecast';
import { WeatherPrecipitation } from '@/components/weather/precipitation';
import { WeatherTemperature } from '@/components/weather/temperature';
import { useMainScrollTop } from '@/hooks/shared';

export const WeatherPage = () => {
  const { handleMainScrollToTop } = useMainScrollTop();
  return (
    <div
      className="mt-32.5 flex flex-col gap-13 pb-29.5"
      ref={handleMainScrollToTop}
    >
      <WeatherForecast />
      <WeatherPrecipitation />
      <WeatherTemperature />
    </div>
  );
};
