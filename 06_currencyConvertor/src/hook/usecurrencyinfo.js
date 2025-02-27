import { useEffect, useState } from 'react'


function useCurrencyinfo(Currency) {
    const [data, setdata] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025-02-27/v1/currencies/${Currency}.json`)
            .then((res) => res.json())
            .then((res) => setdata(res[Currency]))
        console.log(data);

    }, [Currency])
    console.log(data);
    return data
}
export default useCurrencyinfo;