import { Map } from "immutable";

let board = Map();

export const move = (player = "X", position) => ({
  type: "MOVE",
  player,
  position
});

export default function gameReducer(state = {}, action) {
  //invoke function that figures out turn
  //another func that creates new board from old board --> initialise to new map and invoke inside
  return { turn: "X", board: board.setIn(action.position, action.player) };
}
