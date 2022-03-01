import React from 'react';

const Item = ({ item }) => {
  const open = (url) => window.open(url);

  return (
    <article>
      <div>
        <img
          onClick={() => open(item.links.html)}
          src={item.urls.small}
          alt={`${item.alt_description}`}
        />
      </div>
      <div>{[item.description, item.alt_description].join(' - ')}</div>
    </article>
  );
};

export default Item;
