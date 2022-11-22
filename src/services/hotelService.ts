import axios from 'axios'
import { Hotel, RatingData } from '../models/models'

const HOTEL_BASE_URL = 'https://hotel-summary-back.herokuapp.com'

//GET
export const getHotels = async () => {
    const res = await axios.get<Hotel[]>(`${HOTEL_BASE_URL}/hotels`)
    return res
}

export const getHotelsByYear = async (year: string) => {
    const res = await axios.get<Hotel[]>(`${HOTEL_BASE_URL}/hotels?year=${year}`)
    return res
}

export const getHotel = async (hotel: string) => {
    const res = await axios.get<Hotel[]>(`${HOTEL_BASE_URL}/hotels/${hotel}`)
    return res
}

export const getHotelByYear = async (hotel: string, year: string) => {
    const res = await axios.get<Hotel>(`${HOTEL_BASE_URL}/hotels/${hotel}?year=${year}`)
    return res
}

export const rateReview = async (review: string) => {
    const res = await axios.post<RatingData>(`${HOTEL_BASE_URL}/rate`, {
        "REVIEW":review
    })
    return res
}