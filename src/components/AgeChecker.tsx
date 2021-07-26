import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AgeChecker: React.FC = () => {
    const [age, setAge] = useState<boolean>(false);

    const dispatch = useDispatch();

    const approveAge = () => {
        dispatch({type: "OLD_ENOUGH", payload: age})
    }

    return (
        <section>
            <h3>Are 21 years or older?</h3>
            <div>
                <button onClick={() => setAge(true)}>Yes, I am 21 or over</button>
                <button>no</button>
            </div>
        </section>
    )
}

export default AgeChecker;