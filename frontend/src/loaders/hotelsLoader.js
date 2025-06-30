import { store } from "../store";
import { getDestinations } from "../store/thunks/destinationsThunk.js";

const API_URL = import.meta.env.VITE_BASE_URL;
const HOTELS_URL = import.meta.env.VITE_GET_HOTELS;

export async function hotelsLoader() {
    await store.dispatch(getDestinations());
    return null;
}

export async function hotelLoader({ params }) {

    try {
        const res = await fetch(`${API_URL}${HOTELS_URL}/${params.id}`);

        if (!res.ok) {
            throw new Response("Cannot get hotel!", { status: 404 });
        }

        return await res.json();
    } catch (e) {
        console.log(e);
    }
}
