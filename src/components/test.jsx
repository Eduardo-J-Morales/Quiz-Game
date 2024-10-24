import supabase from '../../config'
import { useState, useEffect } from 'react'

export default function Test() {
    const [info, setInfo] = useState(null)
    const [err, setErr] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from('smoothies').select('*')

            if (error) {
                setErr(error.message)
                setInfo(null)
            }
            if (data) {
                setInfo(data)
                setErr(null)
            }
        }

        fetchData()
    }, [])

    return (
        <div>
            {err && (<p>{err}</p>)}
            {info && info.map((item, index) => (
                <p key={index}>{item.id}</p>
            ))}
        </div>
    )
}
