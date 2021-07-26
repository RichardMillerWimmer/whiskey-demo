import React, {useState} from 'react';

const AgeChecker: React.FC = () => {
    const [age, setAge] = useState<boolean>(false);

    return (
        <div>
            <h3>Are 21 years or older?</h3>
            <button>Yes, I am 21 or over</button>
            <button>no</button>
        </div>
    )
}

export default AgeChecker;