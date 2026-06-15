export interface BcvData {
    tasas: {
        Euro: string;
        Yuan: string;
        Lira: string;
        Rublo: string;
        Dolar: string;
    };
    fecha_valor: string;
    fuente: string;
    info_adicional: string;
    logo: string;
}

export default BcvData;
