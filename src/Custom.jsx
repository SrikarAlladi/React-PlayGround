import useResponseData from "./customHooks/useResponseData";

const Custom = () => {

    const {data , loading, error}  = useResponseData()

    if(error) return <div>{JSON.stringify(error)}</div>

    if(loading) return <div>Loading...</div>

    return (
        <div>

            {data.map((x) => {
                return (
                    <div key={x.id}>
                        {x.id} - {x.title}
                    </div>   
                )
            })}

        </div>
    )

}

export default Custom;