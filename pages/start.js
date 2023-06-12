import React from 'react';
import { useState } from 'react';

const start = () => {

    const [word, setWord] = useState("The Dictionary App");
    const [meaning, setMeaning] = useState("The Dictionary app is the perfect tool for anyone who wants to learn new words, improve their vocabulary, or simply find the meaning of a word. The app is easy to use. Simply type a word into the search bar and the app will instantly provide you with the definition, synonyms, antonyms, and example sentences.")

    const [audio, setAudio] = useState()

    const getMeaning = async () => {
        let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        let response = await res.json();
        console.log(response);
        let meaningText = response[0]["meanings"][0].definitions[0].definition
        console.log(meaningText)
        setAudio(response[0].phonetics[0]?.audio)
        setMeaning(meaningText)
    }

    const handleChange = (e) => {
        if (e.target.name == "word") {
            setWord(e.target.value);
        }


    }

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{word}</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{meaning}</p>
                    </div>
                    <div className="flex lg:w-2/3 w-full flex-col mx-auto px-8 sm:px-0">
                        <div className="relative flex-grow w-full">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Type a Word</label>
                            <input onChange={handleChange} type="text" id="full-name" name="word" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <div className="my-4 flex justify-between">
                            <button onClick={getMeaning} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Search</button>

                            {audio && <div>
                                <audio controls>
                                    <source src={audio} />
                                </audio>
                            </div>}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default start
