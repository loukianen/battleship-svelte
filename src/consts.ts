export enum CellType {
  Clear = 'cell',
  Ship = 'ship',
  SW = 'ship-wrong',
  Area = 'ship-area',
  AW = 'ship-area-wrong',
  Killed = 'killed-ship',
  Shooted = 'shooted',
  TL = 'cell-top-left',
  T = 'cell-top',
  TR = 'cell-top-right',
  R = 'cell-right',
  BR = 'cell-bottom-right',
  B = 'cell-bottom',
  BL = 'cell-bottom-left',
  L = 'cell-left',
  I = 'cell-inside',
}

export enum FieldName {
  First = 'field1',
  Second = 'field2',
}

export enum GameType {
  WithAI = 'human-robot',
  Auto = 'robot-robot',
}

export enum PlayerType {
  Human = 'human',
  Robot = 'robot',
}

export enum ShipShape {
  Any = 'any',
  Line = 'line',
}

export enum ShipClass {
  Four = 'fourDeck',
  Three = 'threeDeck',
  Double = 'doubleDeck',
  One = 'oneDeck',
}

export enum ShipOrientation {
  East = 'east',
  North = 'north',
  West = 'west',
  South = 'south',
}

export enum ShootResult {
  OffTarget = 'offTarget',
  Wounded = 'wounded',
  Killed = 'killed',
  Started = 'started',
  Won = 'won',
}