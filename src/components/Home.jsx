import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [value, setValue] = useState('');
    const navigate = useNavigate()

    const handleClick = useCallback(() => {
        navigate(`/room/${value}`)
        
    }, [navigate, value])

    return (
        <div className="home-section">
            <div>
                <input type="text" value={value} onChange={(evt) => setValue(evt.target.value)} placeholder="Enter Room Code" />
                <button onClick={handleClick}>Create</button>
            </div>
        </div>
    )
}
export default Home;