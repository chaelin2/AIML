/*global kakao*/ 
import React, { useEffect } from 'react'

const map=()=>{

  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.552576, 126.924870),
      level: 3
    };
    var map = new kakao.maps.Map(container, options);
    }, [])


    var markerPosition  = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);


    return (
        <div>
        	<div id="map" style={{width:"500px", height:"100vh"}}></div> 
        </div>
    )
}

export default Location;