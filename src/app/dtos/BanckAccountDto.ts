export interface BanckAccountDto{
    numerodecompte: number;
    isEpargne: boolean;
    overDraft?: number;
    tauxInteret?: number;
    card?: string;
    solde: number;
    createdat: string;
    id_client: number;
}