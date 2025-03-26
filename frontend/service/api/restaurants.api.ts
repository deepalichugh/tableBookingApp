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
