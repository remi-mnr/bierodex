type Brand = {
    id: number,
    name: string,
    short_name: string,
    nb_stations: number
}

type Fuel = {
    id: 1,
    name: string,
    short_name: string,
    picto: string,
    Update: {
        value: string,
        text: string
    },
    available: boolean,
    Price: {
        value: number,
        currency: 'EUR',
        text: string
    }
}

type Address = {
    street_line: string,
    city_line: string
}
    
type Station = {
    id: number,
    Brand: Brand,
    type: 'R' | 'A',
    name: string,
    Fuels: Fuel[],
    Address: Address

}

  