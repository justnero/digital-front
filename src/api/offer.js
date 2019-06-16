import {API_BASE} from "@/api/consts";

export default class Offer {
    static filtered(filters) {
        const path = Object.keys(filters).map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(filters[k]);
        }).join('&');

        return fetch(`${API_BASE}/q/offer?${path}`)
            .then(response => response.json());
    }

    static get(id) {
        return fetch(`${API_BASE}/offer/${id}`)
            .then(response => response.json());
    }
}
