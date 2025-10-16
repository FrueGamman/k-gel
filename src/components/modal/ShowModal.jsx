import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import { featuredHighlight } from '../../home/data';
import { bestData } from './bestSellerData';
import { parse } from 'postcss';
import api from "../../utils/api-call";
import {backEndPoints} from "../../utils/enum";
import { apiUrl } from '../../utils/env';

const ShowModal = ({itemdata}) => {


    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    console.log(itemdata)


    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setOpen(false);
    };


    const [loading, setLoading] = useState(true)
    const [dataSuit, setData] = useState([]);
    console.log(dataSuit),
    //let fetch information
    useEffect(() => {
            // async await
            // @ts-ignore
            const getSuit = async () => {
                setLoading(true);
                try {
                    const response = await api.get(`${backEndPoints.SUIT}${itemdata}`)
                    console.log(response.data)
                    if (response.data.length > 0) {
                        setData(response.data)
                        setLoading(false);
                    }
                } catch (err) {
                    console.log(err)
                }
            }
            getSuit()
        },
        []
    );

    return (
        <>
            <button onClick={showModal} className='bg-gray-200 text-gray-700 py-3  absolute left-2 bottom-0 w-64 mx-2 mb-2 bg-opacity-80  font-bold'>
                Quick Shop
            </button>
            <Modal
                title={
                    [
                        <h1 className='text-center font-medium'>Quick shop</h1>
                    ]
                }
                style={{ padding: '0px', position: 'absolute',background:'black', top: '0px', right: '0px', bottom: '0px', borderRadius: '0px', height: '100vh' }}
                open={open}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                closeIcon={[
                    <span className='font-medium mr-8 text-sm'>close</span>
                ]}
                bodyStyle={{ padding: '0px',background:'black' }}
                footer={
                    [
                        <div className='flex flex-col shadow-lg'>
                            <button disabled className=' text-center font-bold bg-black text-white py-3'>
                                Add cart
                            </button>
                        </div>
                    ]
                }
                className='h-96 p-0 rounded-none'

            >
                <div className=' '>
                    <div className='flex overflow-auto gap-1 '>
                        {bestData.map((item, index) => {

                        return(
                            
                            dataSuit.map((item, index) => {
                                console.log(item)
                                    return (
                                        <img className='object-fit w-72' src={`${apiUrl}${item.image}`} />
                                    )

                                })
                            )

                        })}
                    </div>
                    <div className='px-3 bg-gray-100 shadow-lg py-3'>
                        <h2 className="mt-0 text-sm capitalize">Straw Hat</h2>
                        <p className="mt-0 ml-1 text-xs inline-block -mb-4">$35</p>

                        <p className='text-xs my-2 underline text-gray-800 cursor-pointer hover:text-blue-400'>View Details</p>
                        <span className='text-sm'>Color:Blue</span>
                        <h1 className='text-gray-800'>Core</h1>
                        <div className='flex gap-2 m-2 '>
                            <div className='cursor-pointer bg-blue-400 rounded-full w-5 h-5  p-1 '></div>
                            <div className='cursor-pointer bg-gray-400 rounded-full w-5 h-5  p-1 '></div>
                            <div className='cursor-pointer bg-red-400 rounded-full w-5 h-5  p-1 '></div>
                            <div className='cursor-pointer bg-orange-400 rounded-full w-5 h-5  p-1 '></div>
                            <div className='cursor-pointer bg-black rounded-full w-5 h-5  p-1 '></div>
                        </div>
                        <h1 className='text-gray-800 '>Sale</h1>
                        <div className='flex gap-2 m-2 '>
                            <div className='cursor-pointer bg-red-400 rounded-full w-5 h-5  p-1 '></div>
                            <div className='cursor-pointer bg-amber-400 rounded-full w-5 h-5  p-1 '></div>
                            <div className='cursor-pointer bg-green-400 rounded-full w-5 h-5  p-1 '></div>
                            <div className='cursor-pointer bg-orange-400 rounded-full w-5 h-5  p-1 '></div>
                        </div>
                        <h1 className='text-gray-800 my-3 '>Pant Waist</h1>
                        <div className='flex gap-2 '>
                            <div className='bg-white hover:text-white hover:bg-black rounded-full border border-gray-800 w-7 h-7  text-center text-xs pt-1'>29</div>
                            <div className='bg-white hover:text-white hover:bg-black rounded-full border border-gray-800 w-7 h-7  p-1 text-center text-xs pt-1 '>30</div>
                            <div className='bg-white hover:text-white hover:bg-black rounded-full border border-gray-800 w-7 h-7  p-1  text-center text-xs pt-1'>31</div>
                            <div className='bg-white hover:text-white hover:bg-black rounded-full border border-gray-800 w-7 h-7  p-1 text-center text-xs pt-1 '>32</div>
                            <div className='bg-white hover:text-white hover:bg-black rounded-full border border-gray-800 w-7 h-7  p-1  text-center text-xs pt-1'>33</div>
                            <div className='bg-white hover:text-white hover:bg-black rounded-full border border-gray-800 w-7 h-7  p-1 text-center text-xs pt-1 '>34</div>
                            <div className='bg-white hover:text-white hover:bg-black rounded-full border border-gray-800 w-7 h-7  p-1  text-center text-xs pt-1'>35</div>
                            <div className='bg-white hover:text-white hover:bg-black rounded-full border border-gray-800 w-7 h-7  p-1 text-center text-xs pt-1 '>36</div>
                            <div className='bg-white hover:text-white hover:bg-black rounded-full border border-gray-800 w-7 h-7  p-1  text-center text-xs pt-1'>37</div>
                            <div className='bg-white hover:text-white hover:bg-black rounded-full border border-gray-800 w-7 h-7  p-1 text-center text-xs pt-1 '>38</div>
                            <div className='bg-white hover:text-white hover:bg-black rounded-full border border-gray-800 w-7 h-7  p-1 text-center text-xs pt-1 '>39</div>
                            <div className='bg-white hover:text-white hover:bg-black rounded-full border border-gray-800 w-7 h-7  p-1 text-center text-xs pt-1 '>40</div>
                        </div>
                        <h1 className='text-gray-800 my-5 '>Pant fit</h1>
                        <div className='flex justify-center gap-2'>
                            <div className='bg-white hover:text-white hover:bg-black rounded-full border border-gray-800 w-24 h-7  py-2 text-center text-xs pt-1'>Tailored</div>
                            <div className='bg-white hover:text-white hover:bg-black rounded-full border border-gray-800 w-24 h-7  py-2 text-center text-xs pt-1 '>Slim</div>
                            <div className='bg-white hover:text-white hover:bg-black rounded-full border border-gray-800 w-24 h-7  py-2  text-center text-xs pt-1'>Athletic</div>
                        </div>

                        <h1 className='text-gray-800 my-4  '>Pant length</h1>
                        <div className='flex gap-2 pb-3'>
                            <div className='bg-white hover:text-white hover:bg-black rounded-full border border-gray-800 w-7 h-7  py-2 text-center text-xs pt-1'>28</div>
                            <div className='bg-white hover:text-white hover:bg-black rounded-full border border-gray-800 w-7 h-7  p-1 text-center text-xs pt-1 '>30</div>
                            <div className='bg-white hover:text-white hover:bg-black rounded-full border border-gray-800 w-7 h-7  p-1  text-center text-xs pt-1'>32</div>
                            <div className='bg-white hover:text-white hover:bg-black rounded-full border border-gray-800 w-7 h-7  p-1  text-center text-xs pt-1'>34</div>
                            <div className='bg-white hover:text-white hover:bg-black rounded-full border border-gray-800 w-7 h-7  p-1  text-center text-xs pt-1'>36</div>
                        </div>

                    </div>
                </div>

            </Modal>
        </>
    );
};

export default ShowModal;
