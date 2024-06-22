import { getServerSession } from "next-auth";

export default function page(){
    return (
        <>
        <getServerSession>
<h1>aaa</h1>
        </getServerSession>
        </>
    )
}