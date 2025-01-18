import React, {useState} from 'react';
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton';
import {restoreState} from '../hw06/localStorage/localStorage';
import s from './Clock.module.css';

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined);
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())));
    const [show, setShow] = useState<boolean>(false);

    const start = () => {
        if (!timerId) {
            const timer = setInterval(() => {
                setDate(new Date());
            }, 1000);
            setTimerId(timer as unknown as number);  // Save timerId
        }
    };

    const stop = () => {
        if (timerId) {  // Ensure timer is running before stopping it
            clearInterval(timerId);
            setTimerId(undefined);  // Reset timerId
        }
    };

    const onMouseEnter = () => {
        setShow(true);
    };
    const onMouseLeave = () => {
        setShow(false);
    };

    const stringTime = date.toLocaleTimeString('en-US', {hour12: false}) || <br/>;
    const stringDate = `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}.${date.getFullYear()}` || <br/>;

    const stringDay = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date);
    const stringMonth = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(date);

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <br/>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={!!timerId}  // Disable if timer is running
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!timerId}  // Disable if timer is not running
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    );
}

export default Clock;