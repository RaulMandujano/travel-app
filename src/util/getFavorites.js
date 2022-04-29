import { getCollection } from "./db";
import { getDocs } from "firebase/firestore";

const getFavorites = () => {
    return getCollection('lists')
        .then(res => {
            return res.docs.map(doc => {
                const favorite = doc.data();
                favorite.id = doc.id;
                return favorite
            });
        })
        
}

export default getFavorites;