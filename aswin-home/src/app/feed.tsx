'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Parser from 'rss-parser';

// Define the Item type
interface Item {
  title?: string;
  link?: string;
  description?: string;
}

const FeedComponent = () => {
  const [feedItems, setFeedItems] = useState<Item[]>([]); // Explicitly define the type

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await axios.get('http://aswinrajeev.medium.com/feed');
        const parser = new Parser();
        const feed = await parser.parseString(response.data);
        setFeedItems(feed.items);
      } catch (error) {
        console.error('Error fetching or parsing RSS feed:', error);
      }
    };

    fetchFeed();
  }, []);

  return (
    <div>
      {feedItems.map((item) => (
        <div key={item.link}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {/* Construct and display thumbnails */}
        </div>
      ))}
    </div>
  );
};

export default FeedComponent;