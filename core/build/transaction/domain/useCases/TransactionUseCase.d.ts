import { ITransaction } from "../entity";
import { ITransactionRepository, FilterTransactionsParams, GetTransactionParams } from "../repository";
export declare class TransactionUseCase implements ITransactionRepository {
    private transactions;
    constructor();
    listTransaction(): Promise<ITransaction[]>;
    filterTransactions({ type }: FilterTransactionsParams): Promise<ITransaction[]>;
    getTransaction({ id }: GetTransactionParams): Promise<ITransaction | null>;
}
