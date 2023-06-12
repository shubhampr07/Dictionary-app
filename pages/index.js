
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> " Unlock the Power of Words :
        <br className="hidden lg:inline-block"/>  Your Ultimate Dictionary App "
      </h1>
      <p className="mb-8 leading-relaxed">Discover the power of words with our comprehensive dictionary app,
      your ultimate language companion. Whether you're a student, professional, or simply an avid reader. Our app is designed to 
      enrich your vocabulary and enhance your understanding of the English language.</p>
      <div className="flex justify-center">
        <Link href={"/start"} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Start Using Free</Link>
        <Link href={"/pricing"} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Pricing</Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://www.zocalopublicsquare.org/wp-content/uploads/2012/09/19894053_cd84612e9a_b.jpg"/>
    </div>
  </div>
</section>
    </>
  )
}
