import Buttons from "../Components/Buttons";

export default function Contents() {

    // handler
    const handleUsersBtn = ()=>{
        console.log('users')
    }
    const handleTodoBtn = ()=>{
        console.log('todo')
    }
    const handlePhotosBtn = ()=>{
        console.log('photos')
    }



  return (
    <div>
        <h1 className='text-center text-3xl'>This is contents</h1>
        <div className="flex gap-4 justify-center items-center my-8">
            <Buttons handler={handleUsersBtn} value={'users'} type={'danger'}/>
            <Buttons handler={handleTodoBtn} value={'todo'}/>
            <Buttons handler={handlePhotosBtn} value={'photos'}/>
        </div>
        <div className="border-solid border-2 border-green-400 p-8 m-4">

        </div>
    </div>
  )
}
