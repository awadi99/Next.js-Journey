const Blog = async (props)=>{
    const {slug} = await props.params;
    console.log(slug);
    return(
        <>
        {/* catch - all segment */}
        <h1>Blog</h1>
        <h1>{slug}</h1>
        </>
    )

}


export default Blog;