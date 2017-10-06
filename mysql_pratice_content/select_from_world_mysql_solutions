// Introduction
// 1. Show the name, continent and population of all countries

SELECT name, continent, population FROM world;

// Large Countries
// 2. Show the name for the countries that have a  population of at least 200 million

SELECT name FROM world
  WHERE population > 200000000;

// Per Capita GDP
// 3. Give the name and the per capita GDP for those countries with a population of at least 200 million.

SELECT name, gdp/population, FROM world
  WHERE population > 200000000;

// South America in Millions
// 4. Show the name and population in millions for the countries of the continent 'South America'. Divide the population by 1000000 to get population in millions.

SELECT name, population/1000000 FROM world 
  WHERE continent = 'South America';

// France, Germany, Italy
// 5. Show the name and population for France, Germany, Italy

SELECT name, population FROM world
  WHERE name IN('France', 'Germany', 'Italy');

// United
// 6. Show the countries which have a name that includes the word 'United'

SELECT name FROM world 
  WHERE name LIKE '%United%';

// Two ways to be big
// 7. Show the countries that are big by area or big by population. Show name, population and area

SELECT name, population, area FROM world
  WHERE population >= 250000000 OR area >= 3000000;

// One or the Other (but not both)
// 8. Show the countries that are big by area or big by population but not both. Show name, population and area

SELECT name, population, area FROM world
  WHERE population 250000000 XOR area >= 3000000;

// Rounding
// 9. Show the name and population in millions and the GPD in billions for the countries of the continent 'South America'. 
// Use the round function to show the value to two decimal places

SELECT name, ROUND(population/1000000, 2), ROUND(gdp/1000000000, 2) FROM world
  WHERE continent = 'South America';

// Trillion Dollar Economies
// 10. Show per-capita GPD for the trillion dollar countries to the nearest $1000

SELECT name, ROUND(gdp/population, -3) FROM world
  WHERE gdp > 1000000000000;

// Name and Capital have the same length
// 11. Show the name and capital where the name and the capital have the same number of characters

SELECT name, capital FROM world
  WHERE LENGTH(name) = LENGTH(capital);

// Matching Name and Capital
// 12. Show the name and the capital where the first letter of each match. Don not include countries where the name and the capital are the same word

SELECT name, capital FROM world
  WHERE (LEFT(name, 1) = LEFT(capital, 1)) and (name != capital);

// All the Vowels
// Find the country that has all the vowels and no spaces in its name

SELECT name FROM world
  WHERE name LIKE '%a%'
    AND name LIKE '%e%'
    AND name LIKE '%i%'
    AND name LIKE '%o%'
    AND name LIKE '%u%'
    AND name NOT LIKE '% %'

// end of exercise