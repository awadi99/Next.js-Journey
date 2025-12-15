"use client"
import { use } from "react";

const  nestedDynamicRouter = (props) => {
    const user = use(props.params);
    // i can use the (use) keywords and handle async and an await function use without declear the async an await
    console.log(user);
    return (
        <>
        <h1>hello i am  nestedDynamicRouter page</h1>
        <h1>here is {user.username}  your postId : {user.postId}</h1>
        </>
    )
}

export default nestedDynamicRouter;