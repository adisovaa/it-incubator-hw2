import React, {useState} from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import {restoreState} from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'

function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState<number>(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState<number>(restoreState<number>('hw11-value2', 100))

    const change = (event: Event, value: number | number[]) => {
        // Проверяем, пришел ли массив значений (для двойного слайдера)
        if (Array.isArray(value)) {
            setValue1(value[0]);
            setValue2(value[1]);
        } else {
            setValue1(value); // Обновляем только первое значение (для одиночного слайдера)
        }
    }

    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle}>Homework #11</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-single-slider'}
                            value={value1}
                            onChange={change} // используем функцию change с event
                            min={0}
                            max={100}
                            className={s.range}
                        />
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            value={[value1, value2]} // передаем массив значений
                            onChange={change} // используем функцию change с event
                            min={0}
                            max={100}
                            valueLabelDisplay="auto"
                            className={s.range}
                        />
                        <span id={'hw11-value-2'} className={s.number}>{value2}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11

