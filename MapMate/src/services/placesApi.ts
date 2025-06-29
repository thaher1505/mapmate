import { Place } from "../types";

const GOOGLE_MAPS_API_KEY = "XXXX";

export async function fetchPlaceSuggestions(input: string) {
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${GOOGLE_MAPS_API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.predictions || [];
}

export async function fetchPlaceDetails(
  placeId: string
): Promise<Place | null> {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_MAPS_API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();

  if (data.result) {
    const { name, formatted_address, geometry } = data.result;
    return {
      name,
      address: formatted_address,
      location: {
        lat: geometry.location.lat,
        lng: geometry.location.lng,
      },
    };
  }

  return null;
}
