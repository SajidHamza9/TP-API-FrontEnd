import React, { useState, createContext, useEffect } from 'react';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState({});

  return (
    <NewsContext.Provider value={[news, setNews]}>
      {children}
    </NewsContext.Provider>
  );
};
