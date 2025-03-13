import { PriceRange } from "../../interfaces/enums";

export const usePrice = (range: PriceRange, price: number) => {
  return price * range;
}