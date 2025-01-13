import React from 'react';

const MapComponent = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          className="gmap_iframe"
          width="100%"
          src="https://maps.google.com/maps?width=667&amp;height=424&amp;hl=en&amp;q=strada bistritei 525 roznov&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default MapComponent;