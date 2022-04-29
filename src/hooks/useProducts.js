import { useEffect, useState } from "react";

const useProduucts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/phones')
            .then(res => res.json())
            .then(data => setProducts(data))
    })
    return [products, setProducts];
}

export default useProduucts;