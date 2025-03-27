import axios from "axios";
import RestaurantResponse from '../../models/interfaces/RestaurantResponse';

export async function addNewRestaurant(
    params: RestaurantResponse,
) {
    console.log(params);
    const response = await axios.post(`/api/`, {
        ...params,
    });
    return response.data;
}

export async function getAllRestaurants() {
    const response = await axios.get(`/api/`);
    return response.data;
}

export async function deleteRestaurant(id: string) {
    const response = await axios.delete(`/api/${id}`);
    return response.data;
}
