export default interface RestaurantResponse {
    name: string;
    address: string;
    url: string;
    phone: string,
    cuisine: string;
    availableTimings: Array<{
        type: string,
        open: string,
        close: string,
        slots: Array<string>,
    }>,
}
