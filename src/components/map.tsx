import { useEffect, useRef } from 'react';
import useMap from '../hooks/use-map';
import { City } from '../types/city';
import { Icon, LatLng, layerGroup, Marker} from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../const';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../types/offer';

type MapProps = {
  city: City;
  offers: Offer[];
  selectedOffer: Offer | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});


function Map({city, offers, selectedOffer}: MapProps): JSX.Element{
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
        map.setView(new LatLng(city.location.latitude, city.location.longitude), city.location.zoom);
      };
    }
  }, [city.location.latitude, city.location.longitude, city.location.zoom, map, offers, selectedOffer]);

  return <div style={{height: '500px'}} ref={mapRef}></div>;
}
export default Map;
