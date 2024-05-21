import { decrement, increment } from "../Features/Counters/CountersSlice";
import Counter from "./Counter";
import { useDispatch, useSelector } from "react-redux";

export default function MainContainer() {
    const totalValue = useSelector(state => state.counters);
    const dispatch = useDispatch();

    const totalCounterValue = totalValue.reduce((sum, current)=> sum + current.value, 0)

    const handleBtnIncrease = (counterId) => {
       dispatch(increment(counterId))
    }

    const handleBtnDecrease = (counterId) => {
       dispatch(decrement(counterId))
    }


    return (
        <div className="border-2 border-solid border-green-500 flex justify-center items-center py-8 gap-6">
            <div className="border-solid border-2 border-rose-500 py-6 px-4 flex flex-col gap-16">
                {
                    totalValue.map(counter =>
                        <Counter key={counter.id}
                            value={counter.value}
                            onIncrease={() => handleBtnIncrease(counter.id)}
                            onDecrease={() => handleBtnDecrease(counter.id)}
                        />)
                }
            </div>
            <div className="flex justify-center items-center flex-col border-solid border-2 border-green-500 px-8 py-6 gap-4">
                <p className="bg-gray-600 text-white px-4 py-2">{totalCounterValue}</p>
                <h2 className="text-2xl">Total count</h2>
            </div>
        </div>
    )
}
