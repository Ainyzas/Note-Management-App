import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/Home/HomePage';
import ManagePage from './pages/Manage/ManagePage';
import SummaryPage from './pages/Summary/SummaryPage';
import { fetchCategories } from './api/categories';
import { fetchNotes } from './api/notes';

export type CategoryObject = {
  _id: string;
  name: string;
};

export type NoteObject = {
  _id: string;
  name: string;
  category: string;
};

function App() {
  const [categories, setCategories] = useState<CategoryObject[]>([]);
  const [notes, setNotes] = useState<NoteObject[]>([]);

  useEffect(() => {
    fetchCategories().then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetchNotes().then((data) => setNotes(data));
  }, []);

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/manage"
          element={<ManagePage categories={categories} notes={notes} setNotes={setNotes} setCategories={setCategories} />}
        />
        <Route path="/summary" element={<SummaryPage categories={categories} notes={notes} />} />
      </Routes>
    </div>
  );
}

export default App;
