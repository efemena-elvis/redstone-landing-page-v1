import categories from "../../../utilities/product-categories";
import {
  getPlaygroundCart,
  getPlaygroundCountry,
} from "../../../utilities/product-categories";

import { getCheckoutSettings } from "../constants/mor-countries";

export default () => ({
  categories,

  cart: getPlaygroundCart(),

  checkout_country: getPlaygroundCountry(),

  checkout_settings: getCheckoutSettings(),
});
