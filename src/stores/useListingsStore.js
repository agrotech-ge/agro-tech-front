import {defineStore} from "pinia"
import {faker} from "@faker-js/faker"
import {ref} from "vue"

export const useListingsStore = defineStore('listings', () => {
    const listings = ref(faker.helpers.multiple(() => ({
            id: faker.string.uuid(),
            images: faker.helpers.multiple(() => faker.image.urlPicsumPhotos(), {count: 4}),
            publish_date: faker.date.soon().toDateString(),
            title: faker.lorem.sentence(),
            price: faker.number.bigInt({min: 100_000, max: 1_000_000}),
            sale_type: faker.helpers.arrayElement(['იყიდება', 'ქირავდება']),
            manufacturer: faker.vehicle.manufacturer(),
            model: faker.vehicle.model()
        }),
        {count: 8}))

    return {listings}
})