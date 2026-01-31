import type { WeatherForecastHour } from '@/types/weather';

const today = new Date();
const dateListFor12Hours: Date[] = []; // 현재시간~+11시간까지 date객체 담는 배열
for (let i = 0; i < 12; i++) {
  const date = new Date(today); // 임시 날짜 객체 생성
  date.setHours(today.getHours() + i); // i시간 더하기
  dateListFor12Hours.push(date);
}

export const mockHourlyForecastList: WeatherForecastHour[] = [
  {
    date: dateListFor12Hours[0],
    imgPath: '/assets/temp/cloud.svg',
    temperature: 23,
  },
  {
    date: dateListFor12Hours[1],
    imgPath: '/assets/temp/rain.svg',
    temperature: 23,
  },
  {
    date: dateListFor12Hours[2],
    imgPath: '/assets/temp/cloud.svg',
    temperature: 22,
  },
  {
    date: dateListFor12Hours[3],
    imgPath: '/assets/temp/sun.svg',
    temperature: 21,
  },
  {
    date: dateListFor12Hours[4],
    imgPath: '/assets/temp/cloud.svg',
    temperature: 22,
  },
  {
    date: dateListFor12Hours[5],
    imgPath: '/assets/temp/cloud.svg',
    temperature: 24,
  },
  {
    date: dateListFor12Hours[6],
    imgPath: '/assets/temp/cloud.svg',
    temperature: 25,
  },
  {
    date: dateListFor12Hours[7],
    imgPath: '/assets/temp/cloud.svg',
    temperature: 26,
  },
  {
    date: dateListFor12Hours[8],
    imgPath: '/assets/temp/rain.svg',
    temperature: 28,
  },
  {
    date: dateListFor12Hours[9],
    imgPath: '/assets/temp/cloud.svg',
    temperature: 22,
  },
  {
    date: dateListFor12Hours[10],
    imgPath: '/assets/temp/cloud.svg',
    temperature: 21,
  },
  {
    date: dateListFor12Hours[11],
    imgPath: '/assets/temp/cloud.svg',
    temperature: 27,
  },
];
