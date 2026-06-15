import api from "@/services/api";
import BcvData from "@/types/bcv";
import React, { createContext, useContext, useEffect, useState } from "react";

interface TasaContextProps {
    data: BcvData | null;
    loading: boolean;
    error: string | null; // <--- Agregamos estado de error
    fetchData: () => Promise<void>;
}

const TasaContext = createContext<TasaContextProps | undefined>(undefined);

export const TasaProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<BcvData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null); // <--- Inicializa en null

    const fetchData = async () => {
        // Si ya está cargando, evitamos que se ejecute dos veces seguidas
        if (loading) return;

        try {
            setLoading(true);
            setError(null); // Limpiamos errores anteriores antes de buscar
            const response = await api.get("/tasas");
            setData(response.data);
        } catch (err: any) {
            console.error("Error fetching data:", err);
            setError("No se pudieron obtener las tasas. Verifica tu conexión.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <TasaContext.Provider value={{ data, loading, error, fetchData }}>
            {children}
        </TasaContext.Provider>
    );
};

export const useTasa = () => {
    const context = useContext(TasaContext);
    if (context === undefined) {
        throw new Error("se debe usar useTasa dentro de un TasaProvider");
    }
    return context;
};
