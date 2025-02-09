import { produce } from "immer";
import { productsData } from "../productsData/productsData";

export default function productsReducer(state = productsData) {
  return produce(state, (state) => state);
}
