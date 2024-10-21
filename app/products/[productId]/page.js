// 'use client';

// import { useParams } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { motion } from 'framer-motion';
// import { FaStar } from 'react-icons/fa';
// import Header from '../../components/Header'; // Assuming your Header component is in the components folder
// import Footer from '../../components/Footer'; // Assuming your Footer component is in the components folder
// import Image from 'next/image'; // Ensure you're importing from next/image


// const ProductDetails = () => {
//     const { productId } = useParams();
//     const [product, setProduct] = useState(null);
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const router = useRouter();

//     // Updated products array with brand, category, stock, and multiple images
//     const products = [
//         {
//             id: 1,
//             name: 'Classic Elegance Lash Kit',
//             description: 'Waterproof and long-lasting bond',
//             price: '£29.99',
//             brand: 'Beauty Pro',
//             category: 'Makeup',
//             stock: 10,
//             images: ['/assets/1a.png', '/assets/1b.png', '/assets/1c.png'],
//         },
//         {
//             id: 2,
//             name: 'Voluminous Glam Lash Kit',
//             description: 'Adds volume to your lashes',
//             price: '£34.99',
//             brand: 'Glamourous You',
//             category: 'Makeup',
//             stock: 5,
//             images: ['/assets/2a.png', '/assets/2b.png', '/assets/2c.png'],
//         },
//         // Additional products here...
//     ];

//     // Find product by ID
//     useEffect(() => {
//         const foundProduct = products.find((p) => p.id === parseInt(productId));
//         setProduct(foundProduct);
//     }, [productId]);

//     // Automatically switch images every 5 seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (product?.images.length || 1));
//         }, 5000);

//         return () => clearInterval(interval); // Clear the interval on component unmount
//     }, [product]);

//     if (!product) {
//         return <div className="text-center text-red-500 mt-10">Product not found</div>;
//     }

//     // Sample customer reviews
//     const reviews = [
//         {
//             "id": 1,
//             "name": "Alice Johnson",
//             "role": "Beauty Blogger",
//             "review": "This lash kit exceeded my expectations! The bond lasts all day and they are so easy to apply. Highly recommend it to anyone looking for quality!",
//             "rating": 5,
//             "image": "/assets/customers/1.png"
//         },
//         {
//             "id": 2,
//             "name": "John Doe",
//             "role": "Makeup Artist",
//             "review": "I loved how voluminous these lashes made my eyes look. However, I found them a little pricey compared to other options.",
//             "rating": 4,
//             "image": "/assets/customers/2.png"
//         },
//         {
//             "id": 3,
//             "name": "Sarah Williams",
//             "role": "Fashion Enthusiast",
//             "review": "The lashes are good but they didn’t last as long as I had hoped. Still, they were very comfortable to wear.",
//             "rating": 3,
//             "image": "/assets/customers/sarah.jpg"
//         },
//         {
//             "id": 4,
//             "name": "Emily Smith",
//             "role": "Freelance Makeup Artist",
//             "review": "Great product! I’ve used it for several photoshoots and my clients love the natural look it gives. Will definitely buy again!",
//             "rating": 5,
//             "image": "/assets/customers/emily.jpg"
//         },
//         {
//             "id": 5,
//             "name": "David Brown",
//             "role": "Cosmetics Retailer",
//             "review": "I’ve been recommending this lash kit to my clients. It’s a bit expensive but the quality justifies the price. Excellent buy.",
//             "rating": 4,
//             "image": "/assets/customers/david.jpg"
//         }
//     ];


//     const similarProduct = [
//         {
//             "id": 101,
//             "name": "Elegant Eyelash Curler",
//             "price": "£15.99",
//             "brand": "Beauty Essentials",
//             "category": "Makeup Tools",
//             "image": "/assets/products/curler.jpg",
//             "stock": 20
//         },
//         {
//             "id": 102,
//             "name": "Glamourous Volume Mascara",
//             "price": "£22.99",
//             "brand": "Lash Pro",
//             "category": "Makeup",
//             "image": "/assets/products/mascara.jpg",
//             "stock": 30
//         },
//         {
//             "id": 103,
//             "name": "Natural Look False Lashes",
//             "price": "£18.50",
//             "brand": "Lash Studio",
//             "category": "Makeup",
//             "image": "/assets/products/natural-lashes.jpg",
//             "stock": 15
//         },
//         {
//             "id": 104,
//             "name": "Long-Wear Eyeliner",
//             "price": "£12.99",
//             "brand": "Precision Beauty",
//             "category": "Makeup",
//             "image": "/assets/products/eyeliner.jpg",
//             "stock": 40
//         },
//         {
//             "id": 105,
//             "name": "Ultra-Soft Makeup Remover",
//             "price": "£8.99",
//             "brand": "SkinCare Plus",
//             "category": "Skincare",
//             "image": "/assets/products/makeup-remover.jpg",
//             "stock": 50
//         }
//     ]



//     // Sample similar products
//     const similarProducts = products.filter(p => p.category === product.category && p.id !== product.id);

//     return (
//         <div className="flex flex-col bg-gradient-bottom-to-top min-h-screen justify-between">
//             {/* Header */}
//             <Header />

//             {/* Go Back Button */}
//             <div className="container mx-auto px-6 pt-36 pb-8">
//                 <button
//                     onClick={() => router.back()}
//                     className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg shadow-md hover:bg-gray-300 transition duration-300"
//                 >
//                     ← Go Back
//                 </button>
//             </div>

//             {/* Product Details Section */}
//             <div className="flex flex-col items-center justify-center flex-grow">
//                 <div className="bg-gray-900 shadow-lg   p-6 max-w-2xl w-full">
//                     {/* Product Image Carousel */}
//                     <div className="w-full h-64 bg-gray-200   overflow-hidden mb-6 relative">
//                         <img
//                             src={product.images[currentImageIndex]}
//                             alt={product.name}
//                             className="w-full h-full object-cover"
//                         />
//                     </div>

//                     {/* Product Info */}
//                     <h1 className="text-3xl font-bold text-gray-200 mb-4">{product.name}</h1>
//                     <p className="text-gray-500 text-md mb-6">{product.description}</p>

//                     {/* Additional Information */}
//                     <p className="text-gray-600"><strong>Brand:</strong> {product.brand}</p>
//                     <p className="text-gray-600"><strong>Category:</strong> {product.category}</p>
//                     <p className="text-gray-600 mb-4"><strong>Stock:</strong> {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</p>

//                     {/* Product Price */}
//                     <div className="text-2xl font-semibold text-gray-900 mb-4">{product.price}</div>

//                     {/* Add to Cart Button */}
//                     <button className=" text-gray-800 font-semibold bg-white border-2 border-gray-200  py-2 px-4 rounded-lg  text-md hover:bg-secondaryColor hover:text-white transition duration-300">
//                         Add to Cart
//                     </button>
//                 </div>
//             </div>

//             {/* Customer Reviews */}
//             <div className="container mx-auto max-w-2xl py-12">
//                 <h2 className="text-3xl text-white font-libre italic font-bold text-center my-16">Customer Reviews</h2>
//                 <div className="flex flex-col space-y-10">
//                     {reviews.map((review, index) => (
//                         <motion.div
//                             key={review.id}
//                             initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 1 }}
//                             className="relative shadow-lg p-6    mx-8"
//                         >
//                             {/* Customer Profile */}
//                             <div className="absolute -top-10 left-0 flex justify-between w-full  rounded-full p-3">
//                                 <div className='flex space-x-4'>
//                                     <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white">
//                                         <Image
//                                             src={review.image}
//                                             alt={`Customer ${review.name}`}
//                                             fill
//                                             style={{ objectFit: 'cover' }}
//                                         />
//                                     </div>
//                                     <div>
//                                         <h3 className="font-semibold text-md text-gray-300">{review.name}</h3>
//                                         <p className="text-gray-400 text-sm">{review.role}</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex justify-left mt-4 mr-16">
//                                     {[...Array(5)].map((_, i) => (
//                                         <FaStar key={i} className="text-yellow-500 text-sm" />
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Review Content */}
//                             <div className="pl-20 pt-4">
//                                 <p className="text-md font-libre italic text-gray-200 mb-4">{review.review}</p>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>


//             {/* Similar Products Section */}
//             <div className="container mx-auto max-w-2xl py-12">
//                 <h2 className="text-3xl text-white font-libre italic font-bold text-center my-16">Similar Products</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     {similarProducts.map(similarProduct => (
//                         <div key={similarProduct.id} className="bg-gray-900 border-2 border-white shadow-lg p-4   text-center">
//                             <img
//                                 src={similarProduct.images[0]}
//                                 alt={similarProduct.name}
//                                 className="w-full h-40 object-cover mb-4 bg-gray-200 "
//                             />
//                             <h3 className="text-xl font-bold mb-2 text-white">{similarProduct.name}</h3>
//                             <p className="text-gray-400 mb-4">{similarProduct.price}</p>
//                             <button
//                                 className=" text-gray-800 font-semibold bg-white border-2 border-gray-200  py-2 px-4 rounded-lg  text-md hover:bg-secondaryColor hover:text-white transition duration-300"
//                                 onClick={() => router.push(`/products/${similarProduct.id}`)}
//                                 Add to Cart
//                                 >
//                                 View Product
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Footer */}
//             <Footer />
//         </div >
//     );
// };

// export default ProductDetails;




'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';



const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [cart, setCart] = useState([]); // Cart state
    const router = useRouter();

    // Updated products array with brand, category, stock, and multiple images
    const products = [
        {
            id: 1,
            name: 'Classic Elegance Lash Kit',
            description: 'Waterproof and long-lasting bond',
            price: '£29.99',
            brand: 'Beauty Pro',
            category: 'Makeup',
            stock: 10,
            images: ['/assets/1a.png', '/assets/1b.png', '/assets/1c.png'],
        },
        {
            id: 2,
            name: 'Voluminous Glam Lash Kit',
            description: 'Adds volume to your lashes',
            price: '£34.99',
            brand: 'Glamourous You',
            category: 'Makeup',
            stock: 5,
            images: ['/assets/2a.png', '/assets/2b.png', '/assets/2c.png'],
        },
        // Additional products...
    ];

    // Find product by ID
    useEffect(() => {
        const foundProduct = products.find((p) => p.id === parseInt(productId));
        setProduct(foundProduct);
    }, [productId]);

    // Automatically switch images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (product?.images.length || 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [product]);

    if (!product) {
        return <div className="text-center text-red-500 mt-10">Product not found</div>;
    }

    // const addToCart = (product) => {
    //     setCart((prevCart) => [...prevCart, product]);
    //     alert(`${product.name} has been added to the cart!`);
    //   };

    const addToCart = (product) => {
        router.push(`/products/cart?name=${product.name}&price=${product.price}&image=${product.images[0]}&id=${product.id}`);
      };
    // Sample customer reviews
    const reviews = [
        {
            id: 1,
            name: 'Alice Johnson',
            role: 'Beauty Blogger',
            review: 'This lash kit exceeded my expectations! The bond lasts all day and they are so easy to apply. Highly recommend it!',
            rating: 5,
            image: '/assets/customers/1.png',
        },
        {
            id: 2,
            name: 'John Doe',
            role: 'Makeup Artist',
            review: 'I loved how voluminous these lashes made my eyes look. However, I found them a little pricey compared to other options.',
            rating: 4,
            image: '/assets/customers/2.png',
        },
        // Additional reviews...
    ];

    const similarProducts = products.filter((p) => p.category === product.category && p.id !== product.id);

    return (
        <div className="flex flex-col min-h-screen justify-between bg-gradient-bottom-to-top">
            {/* Header */}
            <Header />

            {/* Go Back Button */}
            <div className="container mx-auto px-6 pt-36 pb-8">
                <motion.button
                    onClick={() => router.back()}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg shadow-md hover:bg-gray-300 transition duration-300"
                >
                    ← Go Back
                </motion.button>
            </div>

            {/* Product Details Section */}
            <div className="flex flex-col items-center justify-center flex-grow mx-8">

                <h1  className='text-white text-3xl text-center font-libre italic font-bold  my-10'> Product Preview</h1>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-900 shadow-lg p-6 max-w-2xl w-full"
                >
                    {/* Product Image Carousel */}
                    <div className="w-full h-64 bg-gray-200 overflow-hidden mb-6 relative">
                        <Image
                            src={product.images[currentImageIndex]}
                            alt={product.name}
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>

                    {/* Product Info */}
                    <h1 className="text-3xl font-bold text-gray-200 mb-4">{product.name}</h1>
                    <p className="text-gray-300 text-md mb-6">{product.description}</p>

                    {/* Additional Information */}
                    <p className=" text-gray-400 font-libre">
                        <strong>Brand:</strong> {product.brand}
                    </p>
                    <p className=" text-gray-400 font-libre">
                        <strong>Category:</strong > {product.category}
                    </p>
                    <p className=" text-gray-400 mb-4 font-libre">
                        <strong>Stock:</strong> {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                    </p>
 
                    {/* Product Price */}
                    <div className="text-2xl font-semibold text-gray-900 mb-4">{product.price}</div>

                    {/* Add to Cart Button */}
                    <motion.button
                         whileHover={{ scale: 1.05 }}
                         className="text-gray-800 font-semibold bg-white border-2 border-gray-200 py-2 px-4 rounded-lg text-md hover:bg-secondaryColor hover:text-white transition duration-300"
                         onClick={() => addToCart(product)}>
                        Add to Cart
                    </motion.button>
                </motion.div>
            </div>

            {/* Customer Reviews */}
            <div className="container mx-auto max-w-2xl py-12">
                <h2 className="text-3xl text-white font-libre italic font-bold text-center my-16">Customer Reviews</h2>
                <div className="flex flex-col space-y-10">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="relative shadow-lg p-6 mx-8"
                        >
                            {/* Customer Profile */}
                            <div className="absolute -top-10 left-0 flex justify-between w-full rounded-full p-3">
                                <div className="flex space-x-4">
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                                        <Image
                                            src={review.image}
                                            alt={`Customer ${review.name}`}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-md text-gray-300">{review.name}</h3>
                                        <p className="text-gray-400 text-sm">{review.role}</p>
                                    </div>
                                </div>

                                <div className="flex justify-left mt-4 mr-4 md:mr-16">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-500 text-sm" />
                                    ))}
                                </div>
                            </div>

                            {/* Review Content */}
                            <div className="sm:pl-20 pl-2 pt-8">
                                <p className="text-md font-libre italic text-gray-200 mb-4">{review.review}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Similar Products Section */}
            {/* Similar Products Section */}
            <div className="container mx-auto max-w-2xl py-12">
                <h2 className="text-3xl text-white font-libre italic font-bold text-center my-16">Similar Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {similarProducts.map((similarProduct) => (
                        <motion.div
                            key={similarProduct.id}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-900 border-2 border-white shadow-lg p-4 text-center rounded-lg
                   w-full max-w-xs mx-auto sm:max-w-full sm:w-auto"
                        >
                            <Image
                                src={similarProduct.images[0]}
                                alt={similarProduct.name}
                                width={300}
                                height={200}
                                className="w-full h-40 object-cover mb-4 bg-gray-200 rounded-lg"
                            />
                            <h3 className="text-xl font-bold mb-2 text-white">{similarProduct.name}</h3>
                            <p className="text-gray-400 mb-4">{similarProduct.price}</p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="text-gray-800 font-semibold bg-white border-2 border-gray-200 py-2 px-4 rounded-lg text-md hover:bg-secondaryColor hover:text-white transition duration-300"
                                onClick={() => router.push(`/products/${similarProduct.id}`)}
                            >
                                View Product
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>


            <Footer />
        </div>
    );
};

export default ProductDetails;
``
