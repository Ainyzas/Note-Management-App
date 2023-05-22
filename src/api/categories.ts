import axios from 'axios';

const API_ENDPOINT = `https://crudcrud.com/api/${process.env.REACT_APP_CRUD_API}`;

export async function fetchCategories() {
  try {
    const res = await axios.get(API_ENDPOINT + '/categories');
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createNewCategory(name: string) {
  try {
    const category = {
      name: name,
    };

    const res = await axios.post(API_ENDPOINT + '/categories', category);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCategory(id: string) {
  try {
    const res = await axios.delete(API_ENDPOINT + `/categories/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
