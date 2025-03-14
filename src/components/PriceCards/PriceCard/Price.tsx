import React, { JSX } from "react"
import './_priceCard.less'
import { PriceRange } from "../../../interfaces/enums"
import { usePrice } from "../../hooks/usePrice"

interface IPrice{
  price: number;
  toggleMonthYearPrice: () => void;
  range: PriceRange;
}

const Price: React.FC<IPrice> = (props: IPrice): JSX.Element => {
  const price = usePrice(props.range, props.price)

  return (
    <p className="price-card-price">
        <span className="price-card-price-number">&pound;{price}</span>
        <span className="price-card-price-range">
            / <button onClick={props.toggleMonthYearPrice}>
                {props.range === PriceRange.month ? "Month" : "Year"}
            </button>
        </span>
    </p>
  )
}

export default Price
