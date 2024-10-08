import { DEFAULT_TAX } from "./config.js";

function calculatePrice(price) {
    return price * (1 + DEFAULT_TAX);
}

export default calculatePrice;
