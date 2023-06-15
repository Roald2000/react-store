
import { useCallback, useEffect, useState } from 'react';
import StarsRating from '../components/StarsRating';
import { useLoaderData, useNavigation } from 'react-router-dom';

import { log as logger } from '../logger';

export default function Products() {

    const [listItems, setListItems] = useState([]);

    const loader = useNavigation();
    const loadedData = useLoaderData();


    const procData = useCallback(async () => {
        let data = loadedData;
        setListItems(data);
    }, [loadedData]);



    const reloadData = async () => {
        try {
            let data = fetch('https://fakestoreapi.com/products');
            data = await (await data).json();
            data = data.sort((a, b) => a.category.localeCompare(b.category));
            setListItems(data);
        } catch (error) {
            logger(error);
        }
    };

    useEffect(() => {
        procData();
        return () => {
            setListItems([]);
        }
    }, [])

    const fetchCategory = async (selected) => {
        try {
            let data = fetch('https://fakestoreapi.com/products/categories/' + selected)
            data = await (await data).json();
            setListItems(data);
        } catch (error) {
            logger(error);
        }
    }

    if (loader.state === 'loading') {
        return <h1>Loading....</h1>
    }
    return <>
        <h1 className='text-center text-3xl font-bold font-[Poppins]'>Products</h1>
        <br />
        <div className='flex gap-3 mx-auto'>
            <form action="" className='relative flex flex-row gap-3 items-center justify-start w-fit'>
                <span>Search Products</span>
                <input className='p-2 rounded-md text-black' type="text" name="" id="" />
                <i className="fa-sharp fa-solid fa-magnifying-glass absolute top-1/2 -translate-y-1/2 right-2 p-1 bg-white text-black"></i>
            </form>
            <button className='inline-block' type='button' onClick={reloadData}>
                <i className="fa-solid fa-rotate-right"></i>
            </button>
        </div> 
        <br />
        <div className='p-2 flex flex-wrap gap-3 justify-center items-center'>
            {listItems && listItems.map((item, key) =>
                <div key={key} className=' basis-[268px] w-fit h-[268px] rounded-md p-2 bg-[var(--secondary-color)] relative z-0 overflow-clip group bg-gray-200'>
                    <img src={item.image} alt="" className='absolute top-0 left-0 h-full w-fit -z-10 filter-none' />
                    <div className='z-10 absolute inset-0 flex flex-col items-start justify-center gap-3 opacity-0 bg-black transition-opacity duration-300 group-hover:opacity-90'>
                        <div className='z-20 px-5'>
                            <span className='text-white'>{item.title}</span>
                        </div>
                        <div className='z-20 px-5'>
                            <span className='text-white capitalize bg-[var(--primary-color)] p-1 rounded text-xs'>{item.category}</span>
                        </div>
                        <div className='z-20 px-5 flex flex-row items-start gap-3'>
                            <StarsRating rating={item.rating.rate} />
                            <span className='text-xs'>{item.rating.rate}</span>
                        </div>
                        <div className='z-20 px-5 grid grid-cols-2 justify-center items-center gap-3'>
                            <span>${item.price}</span>
                            <button type='button' className='p-1 rounded-md bg-indigo-600 text-white'>Buy</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </>
}