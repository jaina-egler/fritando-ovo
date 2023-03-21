import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import axios from "axios";

export default function TableRecipe(){

    const router = useRouter();
    const {id} = router.query


    const [receita, setReceita] = useState
    ({});

    useEffect(() => {
        //Consultar API
        axios.get(`/api/receitas/${id}`)
        .then(resposta => setReceita
            (resposta.data));
    },[router])

    return(
        <div>
            <p>Título: {receita.titulo} </p>
            <p>Tempo de preparo: {receita.tempoPreparo} </p>
        </div>
    );
}