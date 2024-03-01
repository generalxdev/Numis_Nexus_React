import './style.css';
import { UserCircleIcon } from '@heroicons/react/24/outline'

export default function Example() {
    return (
        <div className="mt-10 mb-40 container_teams">
            <div className="card">
            <div className='title_teams'>
                <div className='text-lg font-bold text-gray-800'>Francis Crevatas</div>
                <div className='flex flex-row items-center mt-2 text-sm italic text-gray-900'>Owner and CEO<UserCircleIcon className='w-8 h-8 text-white'/></div>             
            </div>
            <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
            </div>
            <div className="circle">
                <img src="img/taris.png" className='w-32'></img>
                {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke" cx="60" cy="60" r="50"/>
                </svg>*/}
            </div> 
            </div>
            <div className="card">
            <div className='text-gray-900 title_teams'>
                <div className='text-lg font-bold text-gray-800'>Henry Scott</div>
                <div className='flex flex-row items-center mt-2 text-sm italic text-gray-900'>Lead Developer<UserCircleIcon className='w-8 h-8 text-white'/></div> 
            </div>
            <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
            </div>
            <div className="circle">
                <img src="img/taris.png" className='w-32'></img>
                {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke" cx="60" cy="60" r="50"/>
            </svg> */}
            </div>
            </div>
            <div className="card">
            <div className='text-gray-900 title_teams'>
                <div className='text-lg font-bold text-gray-800'>Saadullah Ghori</div>
                <div className='flex flex-row items-center mt-2 text-sm italic text-gray-900'>Lead Designer<UserCircleIcon className='w-8 h-8 text-white'/></div> 
            </div>
            <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
            </div>
            <div className="circle">
                <img src="img/taris.png" className='w-32'></img>
                {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke" cx="60" cy="60" r="50"/>
            </svg> */}
            </div>
            </div>
            <div className="card">
            <div className='text-gray-900 title_teams'>
                <div className='text-lg font-bold text-gray-800'>Marketing Expert</div>
                <div className='flex flex-row items-center mt-2 text-sm italic text-gray-900'>Owner and CMO<UserCircleIcon className='w-8 h-8 text-white'/></div> 
            </div>  
            <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
            </div>
            <div className="circle">
                <img src="img/taris.png" className='w-32'></img>
                {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke" cx="60" cy="60" r="50"/>
            </svg> */}
            </div>
            </div>
        </div>
    )
}
