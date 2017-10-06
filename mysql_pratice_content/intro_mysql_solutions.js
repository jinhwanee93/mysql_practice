// SOLUTIONS:

// TABLE: WORLD
// The world tables has name, continent, area, population and gpd as part of its columns
// name, continent = string
// area, population, and gdp = intergers

// Introducing the world table of countries

// 1. Modify it to show the population of Germany

SELECT population FROM world
  WHERE name = 'Germany';

// 2. Show the name and the population for 'SWEDEN', 'NORWAY', and 'DENMARK'

SELECT name, population FROM world
  WHERE name IN('Sweden', 'Norway', 'Denmark');

// 3. Modit it to show the country and the are for countires with an area between 200,000 and 250,000

SELECT name, area FROM world
  WHERE area BETWEEN 200000 AND 250000;

// end of exercise
