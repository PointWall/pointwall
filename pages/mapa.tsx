import { useState } from "react";
import { Post, data } from "@/lib/fakeData";
import AutoComplete from "@/components/map/AutoComplete";
import FocusedPost from "@/components/map/FocusedPost";
import GoogleMap from "google-maps-react-markers";
import Marker from "@/components/map/Marker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLevelUpAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function Page(): JSX.Element {
  const [mapState, setMapState] = useState<{
    mapReady: boolean;
    mapInstance: google.maps.Map<Element> | null;
    mapApi: any;
  }>({
    mapReady: false,
    mapInstance: null,
    mapApi: null,
  });
  const [markers, setMarkers] = useState<Post[]>(data);
  const [focusedPost, setFocusedPost] = useState<Post | null>(null);
  function onGoogleApiLoaded({
    map,
    maps,
  }: {
    map: google.maps.Map<Element>;
    maps: any;
  }): void {
    setMapState({
      mapInstance: map,
      mapApi: maps,
      mapReady: true,
    });
  }
  function onMarkerClick(post: Post): void {
    if (mapState.mapInstance == null) return;
    setFocusedPost(post);
  }
  function onMapChange(map: any): void {
    // Render only markers in the current view
    if (map == null) return;
    const bounds = map.bounds;
    if (bounds == null) return;
    const ne = bounds.getNorthEast(); // LatLng of the north-east corner
    const sw = bounds.getSouthWest(); // LatLng of the south-west corder
    setMarkers(
      map.zoom > 3
        ? data.filter((item) => {
            return (
              item.lat > sw.lat() &&
              item.lat < ne.lat() &&
              item.lng > sw.lng() &&
              item.lng < ne.lng()
            );
          })
        : data
    );
  }
  return (
    <div
      className="google-map"
      style={{ margin: 0, height: "100vh", width: "100%" }}
    >
      {mapState.mapReady && (
        <section>
          <Link
            href={"/"}
            style={{
              width: "50px",
              height: "50px",
              left: ".5%",
            }}
            className="flex justify-center z-10 align-center mt-2.5 -rotate-90 border-black bg-gray-100 hover:bg-white cursor-pointer absolute items-center p-6 space-x-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <FontAwesomeIcon icon={faLevelUpAlt} />
          </Link>
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "4%",
              borderColor: "black",
              zIndex: 10,
            }}
          >
            <div className="space-y-10">
              <div className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
                <div className="flex bg-gray-100 p-4 w-50 space-x-4 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 opacity-30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <AutoComplete
                    map={mapState.mapInstance}
                    mapApi={mapState.mapApi}
                  />
                </div>
                <div className="bg-red-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
                  <span>Search</span>
                </div>
              </div>
              {focusedPost != null && (
                <FocusedPost
                  close={() => setFocusedPost(null)}
                  post={focusedPost}
                />
              )}
            </div>
          </div>
        </section>
      )}
      <GoogleMap
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
          libraries: ["places", "geometry"],
        }}
        defaultCenter={{ lng: -58.421763, lat: -34.6562639 }}
        defaultZoom={12}
        onGoogleApiLoaded={onGoogleApiLoaded}
        onChildMouseEnter={() => console.log(true)}
        options={{
          mapTypeControl: false,
          fullscreenControl: false,
          maxZoom: 20,
          minZoom: 3,
          rotateControl: false,
          scaleControl: false,
          streetViewControl: true,
          mapType: "hybrid",
          zoomControl: true,
          hoverDistance: 40 / 2,
        }}
        hoverDistance={40 / 2}
        onChange={onMapChange}
      >
        {markers.map((post: Post, index: number) => {
          return (
            <Marker
              lat={post.lat}
              lng={post.lng}
              key={index}
              post={post}
              onClick={() => onMarkerClick(post)}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
}
