"use client"
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { useSearchParams } from "next/navigation";

const ProductList = (props) =>{

    const user = useSearchParams();
    const pages = user.get("page");
    const category = user.get("category");
    console.log("pages ", pages);
    return (
        <>
        <div>
                    <h1>category  {category}</h1>
        </div>
        </>
    )
}

export default ProductList;