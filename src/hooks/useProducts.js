import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://young-bastion-31479.herokuapp.com/phone')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return [products, setProducts];
}

export default useProducts;