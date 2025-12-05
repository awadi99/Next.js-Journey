import Link from "next/link";
function Nav(){
    return (
        <>
            <div className="flex justify-between items-center gap-6 text-xl font-medium p-4 bg-slate-800 mb-10 contrast-150">
                <h1>AW-Next</h1>
                <div className="flex gap-6 ">
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/product">Products</Link>
                </div>
            </div>
        </>
    )
}
export default Nav;