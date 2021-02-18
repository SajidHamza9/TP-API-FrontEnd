import React, { useEffect, useState } from 'react';
import AddButton from '../AddButton';
import ListNews from '../ListNews';
import Pagination from '../Pagination';
import AddNewsModal from '../Modal/AddNewsModal';
import EditNewsModal from '../Modal/EditNewsModal';
import { NewsProvider } from '../../Context/NewsContext';
import Sort from '../SortComponent';

const Home = () => {
  const [ListNewsState, setListNewsState] = useState([]);
  const [offsetState, setOffsetState] = useState(0);
  const [limitState, setLimitState] = useState(3);
  const [nextOffsettState, seNextOffsetState] = useState(null);
  const [previousOffsettState, sePreviousOffsetState] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [sortState, setSortState] = useState({ field: 'date', order: 'desc' });
  const loadNews = async () => {
    const result = await fetch(
      `http://localhost:8080/news?offset=${offsetState}&limit=${limitState}&sort=${sortState.field}+${sortState.order}`,
    );
    const data = await result.json();
    setListNewsState(data.items);
    seNextOffsetState(data.metadata.pagination.nextOffset);
    sePreviousOffsetState(data.metadata.pagination.previousOffset);
    console.log(data);
  };

  useEffect(loadNews, [offsetState, sortState]);

  const loadNextPage = () => {
    setOffsetState(nextOffsettState);
  };

  const loadPreviousPage = () => {
    setOffsetState(previousOffsettState);
  };

  const openAddModal = () => {
    setShowAddModal((prev) => !prev);
  };

  const openEditModal = () => {
    setShowEditModal((prev) => !prev);
  };

  return (
    <NewsProvider>
      <Sort sort={setSortState} setOffset={setOffsetState} />
      <ListNews
        openModal={openEditModal}
        listNews={ListNewsState}
        setList={setListNewsState}
      />
      <Pagination
        previous={previousOffsettState}
        next={nextOffsettState}
        loadNextPage={loadNextPage}
        loadPreviousPage={loadPreviousPage}
      />
      <AddButton openModal={openAddModal} />
      <AddNewsModal
        showModal={showAddModal}
        openModal={openAddModal}
        setOffset={setOffsetState}
        loadNews={loadNews}
      />
      {showEditModal ? (
        <EditNewsModal
          showModal={showEditModal}
          openModal={openEditModal}
          loadNews={loadNews}
        />
      ) : null}
    </NewsProvider>
  );
};

export default Home;
