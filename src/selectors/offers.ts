import { AppState } from "src/store";
import { createSelector } from "@reduxjs/toolkit";
import { offersAdapter } from "src/store/offers";

export const { selectAll: getOffers } = offersAdapter.getSelectors<AppState>(
  (state) => state.offers
);

const convertUnicode = (input: string) =>
  input.replace(/\\u(\w\w\w\w)/g, function (a, b) {
    var charcode = parseInt(b, 16);
    return String.fromCharCode(charcode);
  });

export const getOffersDataTableData = createSelector([getOffers], (offers) =>
  offers.map((offer) => ({
    name: offer.offer.name,
    currency: offer.offer.currency_iso,
    price: offer.offer.price,
    merchantUrl: offer.merchant.url,
    merchantName: offer.merchant.name,
    merchantLogo: offer.merchant.logo_url,
    imgUrl: offer.image,
    id: offer.id,
  }))
);
