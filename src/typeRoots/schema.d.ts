declare namespace API {
  export interface Offer {
    id: number;
    match_id: number;
    product_key: string;
    score: number;
    percentage: number;
    popularity: number;
    product_type: number;
    bundle_models: string[];
    model_matched: string[];
    model: string;
    model_id: number;
    an: string;
    offer: {
      name: string;
      price: string;
      in_stock: true;
      stock_quantity: null;
      currency_iso: string;
      currency_symbol: string;
      link: string;
      link_text: string;
      merchant_link_text: string;
      label: string;
      display_name: string;
      display_labels: string;
    };
    image: string;
    label_image: null;
    model_image: string;
    shipping: {
      prime: boolean;
      url?: string;
    };
    merchant: {
      id: number;
      name: string;
      url: string;
      logo_url: string;
      territory: string;
      preference: number;
    };
  }

  export interface DataModel {
    widget: {
      data: {
        offers: Offer[];
      };
    };
  }
}
