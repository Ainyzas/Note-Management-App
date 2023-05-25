import axios from 'axios';

const API_ENDPOINT = `https://crudcrud.com/api/${process.env.CRUD_API}`;

export async function fetchNotes() {
  try {
    const res = await axios.get(API_ENDPOINT + '/notes');
    const reversedData = res.data.reverse();
    return reversedData;
  } catch (error) {
    console.log(error);
  }
}

export async function createNewNote(name: string, category: string) {
  try {
    const note = {
      name: name,
      category: category,
    };

    const res = await axios.post(API_ENDPOINT + '/notes', note);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteNote(id: string) {
  try {
    const res = await axios.delete(API_ENDPOINT + `/notes/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
