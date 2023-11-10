import Link from 'next/link'

export default function Demo() {
    //logica en js
    const name = "Juan"


    return (
        <>
            <main className='h-screen w-screen bg-gray-500'>
                <h1 className='text-white text-6xl'> Hola {name} </h1>

                <Link href="/demo" className='text-4xl text-center text-white'>
                    Demo
                </Link>


            </main>
        </>

    )
}