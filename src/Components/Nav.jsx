import Link from "next/link";
function Nav(){
    return (
        <>
            <div className="flex justify-between items-center gap-6 text-xl font-medium bg-slate-900 p-4 contrast-120">
                <h1>AW-Next</h1>
                <div className="flex gap-6 ">
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/product">Products</Link>
                    <Link href="/signup">Signup</Link>
                </div>
            </div>
            <div className="p-2">

            </div>
        </>
    )
}
export default Nav;