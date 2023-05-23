import React from 'react';
import { CategoryObject, NoteObject } from '../../App';

type SummaryPageProps = {
  categories: CategoryObject[];
  notes: NoteObject[];
};

export default function SummaryPage({ categories, notes }: SummaryPageProps) {
  const categoryNoteCounts = categories.map((category) => {
    const noteCount = notes.filter((note) => note.category === category.name || category.name === '').length;
    return {
      category: category.name !== '' ? category.name : 'All',
      noteCount: noteCount,
    };
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Note Count</th>
          </tr>
        </thead>
        <tbody>
          {categoryNoteCounts.map((categoryNote) => (
            <tr key={categoryNote.category}>
              <td>{categoryNote.category}</td>
              <td>{categoryNote.noteCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
