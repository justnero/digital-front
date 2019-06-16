import {API_BASE} from "@/api/consts";

export default class District {
    static all() {
        return fetch(`${API_BASE}/district`)
            .then(response => response.json())
    }

    static filtered(filters) {
        const path = Object.keys(filters).map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(filters[k]);
        }).join('&');

        return fetch(`${API_BASE}/q/district?${path}`)
            .then(response => response.json());
    }
}
