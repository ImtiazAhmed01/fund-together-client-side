import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Welcomemsg = () => {
    return (
        <div>
            <section className="bg-linear-to-r from-[#1E3A8A] to-[#06B6D4] text-white py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to Our Fund Raising</h1>
                <h2 className="text-2xl">
                    <Typewriter
                        words={[
                            'Explore Campaigns',
                            'Make a Difference',
                            'Start Contributing Today!',
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h2>
            </section>


        </div>
    );
};

export default Welcomemsg;