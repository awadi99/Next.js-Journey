import axios from "axios";

const FetchData = async (props) => {
    const searchParams =  await props.searchParams;
    const username = searchParams.name;

    // const url = `https://api.genderize.io/?name=${username}`; 
    const url =`https://api.agify.io/?name=${username}`
    const res = await axios.get(url);
    const data = res.data;

    return (
        <>
            <div className="h-auto w-20 sm:w-20 lx:20 b-1 flex" >
            <h1>{data.name}</h1>
            <p>{data.age}</p>
            <p>{data.count}</p>
            </div>
        </>
    );
};

export default FetchData;
