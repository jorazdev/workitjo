import { ref } from "vue";
import useAxios from "./axios";
import { ICompany } from "../interfaces/company.model";

export default function useCompany() {

    const { get } = useAxios()
    const companies = ref<ICompany[]>([])

    const allCompany = async () => {
        const res: any = await get("https://retoolapi.dev/Oal4aL/listing-company")
        const items: any[] = res.data
        companies.value = items.map((item: any) => {
            return {
                id: item.id,
                about: item.About,
                logo: item.Logo,
                company: item['Company Name'],
                vue: item.vue
            }
        })
    }

    return {
        companies,
        allCompany
    }
}