import { api } from "./api";

export async function getDigimonService(code) {

    const response = await api.get(`search.php?card=${code}`);

    return response;
}