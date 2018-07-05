import { Map } from "immutable";

let board = Map();

export const move = (player = "X", position) => ({
  type: "MOVE",
  player,
  position
});

export default function gameReducer(state = {}, action) {
  console.log(action.player);
  switch (action.player) {
    case "X":
      return { turn: "O", board: board.setIn(action.position, action.player) };
    case "O":
      return { turn: "X", board: board.setIn(action.position, action.player) };
    default:
      return state;
  }
}
