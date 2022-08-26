import { Container } from "./styles";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"


export function Sumarry(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={ incomeImg } alt="entradas" />
                </header>
                <strong>R$1.000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={ outcomeImg } alt="saídas" />
                </header>
                <strong> -R$5.000,00</strong>
            </div>
            <div className="highlight">
                <header>
                    <p>Total</p>
                    <img src={ totalImg } alt="total" />
                </header>
                <strong>R$16.000,00</strong>
            </div>
        </Container>
    );
}