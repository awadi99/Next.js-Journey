const  nestedDynamicRouter = async(props) => {
    const user = await props.params;
    console.log(user);
    return (
        <>
        <h1>hello i am  nestedDynamicRouter page</h1>
        <h1>here is {user.username}  your postId : {user.postId}</h1>
        </>
    )
}

export default nestedDynamicRouter;