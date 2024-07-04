import Container from "../Shared/Container";


const About = () => {
    return (
        <Container>
            <section className="bg-gray-100 dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">About</h1>

                    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                        <img
                            className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
                            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt=""
                        />

                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
                            <h1 className="text-xl font-semibold">About us</h1>
                           <p>I have extensive and varied experience in front-end development, including working as a jr.front-end developer, so I've implemented and debugged most aspects of front-end technologies and I know how to avoid potential pitfalls before stepping into them. Love learning and working with new technologies.</p>
                        </div>
                    </div>
                </div>
            </section>


        </Container>
    );
};

export default About;