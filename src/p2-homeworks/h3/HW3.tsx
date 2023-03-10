import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";


// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        const user = {  //формируем новый объект. ранее скачали и подгрузили библиотеку uuid
            _id: v1(),
            name
        }

        setUsers([...users,user]) // need to fix . Создаем новый массив, в него ложим всех старых юзерсов + новый юзерс стр.17
        // как превратить значение ф-ции в число на єкране?? т.е. totalUsers. ОТВЕТ : делаем по другому см.
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3