import React, {createContext, useState} from 'react';
import axios from 'axios';

export interface INews {
  id: string;
  title: string;
  imageUrl: string;
  text: string;
  author: string;
}

interface INewsContext {
  data: INews[] | undefined;
  fetchNews: () => void;
  isLoading: boolean;
  addNews: (title: string, author: string, text: string) => void;
}

type Props = {
  children: React.ReactNode;
};

export const NewsContext = createContext({} as INewsContext);

export const NewsProvider = ({children}: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<INews[]>();

  const fetchNews = () => {
    setIsLoading(true);
    axios
      .get('https://6316edb3cb0d40bc41470812.mockapi.io/news')
      .then(({data}) => {
        setData(data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const addNews = (title: string, author: string, text: string) => {
    setData([
      {
        id: Math.random().toString(),
        title: title,
        imageUrl: 'https://lad24.ru/themes/lad/assets/i/about1_new.jpg',
        text: text,
        author: author,
      },
      ...(data as INews[]),
    ]);
  };

  return (
    <NewsContext.Provider
      value={{
        data,
        fetchNews,
        isLoading,
        addNews,
      }}>
      {children}
    </NewsContext.Provider>
  );
};
