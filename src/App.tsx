import { useEffect, useState } from 'react';

import { Content } from './components/Content';
import { SideBar } from './components/SideBar';

import './styles/global.scss';

export function App() {

  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar callback={(genreId: number) => handleClickButton(genreId)} />
      <Content id={selectedGenreId} />
    </div>
  )
}