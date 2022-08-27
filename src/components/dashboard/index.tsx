import { Sumarry } from "../sumarry";
import { TransactionTable } from "../transactionsTable";
import { Container } from "./style";

export function Dashboard() {
    return(
        <Container>
            <Sumarry />
            <TransactionTable />
        </Container>
    );
}