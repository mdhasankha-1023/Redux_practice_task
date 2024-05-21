/* eslint-disable react/prop-types */
import Buttons from "../Components/Buttons";

export default function Counter({onIncrease, onDecrease, value}) {
    return (
        <div className="flex flex-col gap-8 items-center justify-center border-solid border-2  border-gray-800 px-10 py-4">
            <div className="bg-gray-600 text-white px-4 py-2">
                {value}
            </div>
            <div className="flex gap-8 justify-center items-center">
                <Buttons handler={onIncrease} type={'danger'} value={'Increase'} />
                <Buttons handler={onDecrease} value={'Decrease'} />
            </div>
        </div>
    )
}
