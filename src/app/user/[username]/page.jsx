
const  dynamicRouter = async(props) => {
    const user = await props.params;
    console.log(user);
    return (
        <>
        <h1>hello i am  dynamicRouter page</h1>
        <h1>hi {user.username}</h1>
        </>
    )
}

export default dynamicRouter;