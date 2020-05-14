import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth0 } from "./utils/react-auth0-spa";
import * as api from "./api-fetcher";

const context = createContext();

export const Provider = ({ children }) => {
  const [columns, overwriteColumns] = useState([]);
  const [columnCards, overwriteColumnCards] = useState({}); // { columnId: [cards] }
  const { isAuthenticated, logout, user } = useAuth0();
  const auth0_id = user ? user.sub : undefined;

  useEffect(() => {
    if (auth0_id) {
      fetchColumns();
    }
  }, [auth0_id]);

  const fetchColumns = () => {
    return api.getColumns({ auth0_id }).then((fetchedColumns) => {
      overwriteColumns(fetchedColumns);
      const columnIds = fetchedColumns.map((col) => col.id);
      fetchCardsForMultipleColumns(columnIds);
    });
  };

  const addColumn = ({ name }) => {
    api.addColumn({ auth0_id, name }).then(fetchColumns);
  };

  const deleteColumn = (columnId) => {
    if (window.confirm("Are you sure?")) {
      api.deleteColumn({ auth0_id, columnId }).then(fetchColumns);
    }
  };

  const setCardsForColumn = (columnId, cards) => {
    const newColumnCards = Object.assign({}, columnCards, {
      [columnId]: cards,
    });
    overwriteColumnCards(newColumnCards);
  };

  const fetchCardsForColumn = (columnId) => {
    return api.getCardsForColumn({ auth0_id, columnId }).then((cards) => {
      setCardsForColumn(columnId, cards);
    });
  };

  const fetchCardsForMultipleColumns = (columnIds) => {
    return Promise.all(
      columnIds.map((columnId) => api.getCardsForColumn({ auth0_id, columnId }))
    )
      .then((cols) => {
        let newColumnCards = { ...columnCards };
        for (let i = 0; i < cols.length; i++) {
          let colCards = cols[i];
          const colId = columnIds[i];
          newColumnCards[colId] = colCards;
        }
        return newColumnCards;
      })
      .then((newColumnCards) => overwriteColumnCards(newColumnCards));
  };

  const getCards = (columnId) => columnCards[columnId] || [];

  const addCard = ({ columnId, name }) =>
    api
      .addCard({ auth0_id, name, columnId })
      .then(() => fetchCardsForColumn(columnId));

  const deleteCard = ({ columnId, cardId }) => {
    if (window.confirm("Are you sure?")) {
      return api
        .deleteCard({ auth0_id, cardId, columnId })
        .then(() => fetchCardsForColumn(columnId));
    }
  };

  const moveCard = ({ cardId, columnId, newColumnId }) => {
    return api
      .moveCard({ auth0_id, cardId, newColumnId, columnId })
      .then(() => fetchCardsForMultipleColumns([columnId, newColumnId]));
  };

  const value = {
    isAuthenticated,
    logout,
    user,
    columns,
    fetchColumns,
    columnCards,
    fetchCardsForColumn,
    addColumn,
    deleteColumn,
    getCards,
    addCard,
    deleteCard,
    moveCard,
  };

  return <context.Provider value={value}>{children}</context.Provider>;
};

const useBoard = () => useContext(context);

export default useBoard;
