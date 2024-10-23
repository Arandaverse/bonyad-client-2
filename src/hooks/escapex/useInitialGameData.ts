"use client";

export interface IColorNumber {
  colorName: string;
  number: number;
}

export interface IGameData {
  colorNumbersData: IColorNumber[];
  passwordColors: string[];
}

export const useInitialGameData = () => {
  // Color names
  const colorNames: string[] = [
    "black",
    "blue",
    "green",
    "yellow",
    "red",
    "pink",
  ];

  // Generate random number for each color
  const colorNumbers: IColorNumber[] = [];
  for (const colorName of colorNames) {
    const number = Math.floor(Math.random() * 10);
    const colorNumber: IColorNumber = {
      colorName: colorName,
      number: number,
    };
    colorNumbers.push(colorNumber);
  }
  const passwordColors: string[] = [];
  for (let i = 0; i < 3; i++) {
    const randomColorName =
      colorNames[Math.floor(Math.random() * colorNames.length)];
    passwordColors.push(randomColorName);
  }

  const gameData: IGameData = {
    colorNumbersData: colorNumbers,
    passwordColors: passwordColors,
  };
  return gameData;
};
