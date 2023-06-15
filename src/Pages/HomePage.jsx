

const HomePage = () => {
    return (
        <section className="flex-grow flex-shrink-0 basis-full">
            <h1 className="text-3xl font-bold mb-4">Welcome to My React Store</h1>
            <p className="text-lg">
                Thank you for visiting our store. We offer a wide range of products to cater to your needs.
                Feel free to browse through our collection and find the perfect items for you.
            </p>
            <p className="text-lg mt-4">
                If you have any questions or need assistance, please don`t hesitate to <a href="/react-store/contact">contact us</a>.
            </p>
        </section>
    );
};

export default HomePage;
