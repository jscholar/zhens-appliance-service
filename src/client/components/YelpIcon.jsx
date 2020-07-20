import React, { useEffect } from 'react';


const YelpIcon = () => {
  useEffect(() => {
    const badgeElement = document.getElementById('yelp-biz-badge-rrc-SMEyGt-3Rxc3juu9gr8J_A');
    badgeElement.innerHTML = `
    <a href="https://www.yelp.com/biz/zhens-appliance-service-seattle-2">
      <img
        alt="Zhen's Appliance Service"
        src="https://dyn.yelpcdn.com/extimg/en_US/rrc/SMEyGt-3Rxc3juu9gr8J_A.png"
        height="55"
        width="125"
      />
    </a>`;
  });

  return (
    <div className="yelp-icon" id="yelp-biz-badge-rrc-SMEyGt-3Rxc3juu9gr8J_A">
      <a href="http://yelp.com/biz/zhens-appliance-service-seattle-2?utm_medium=badge_star_rating_reviews&amp;utm_source=biz_review_badge" target="_blank">
        Check out Zhen&#39;s Appliance Service on Yelp
      </a>
    </div>
  );
};

export default YelpIcon;
