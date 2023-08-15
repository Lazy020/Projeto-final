import { Link } from "react-router-dom"
import { styled } from "styled-components"

const MyForm = styled.form`
    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Hind+Madurai:wght@300;700&display=swap');

    font-family: 'Anton', sans-serif;
    font-family: 'Hind Madurai', sans-serif;
    border: 1px solid #D4D4D4;
    box-shadow: 2px 2px 2px -1px #0000007d;
    font-size: 1.5rem;
    display: inline-block;
    color: #1f1f1f;

    * {
        box-sizing: border-box;
    }
    
    .container {
        padding: 2rem;
        background-color: #FFFFFF;

        .title {
            margin-bottom: 2rem;

            h1, h2 {
                line-height: 1em;
                margin: 0;
                padding: 0;
            }

            h2 {
                font-size: 60%;
                color: #323232;
                font-weight: 300;
            }
        }

        .input {
            margin-block: 1rem;

            * { 
                color: #5d5d5d;
            }

            label {
                display: block;
                font-size: 50%;
            }

            input {
                font-size: 90%;
                border: 0;
                border-bottom: 1px solid #D4D4D4;
                outline: none;
                width: 100%;
                padding: .5rem;
            }
        }

        .action {
          display: flex;
          justify-content: flex-end;
          > * {
            flex-grow: 1;
          }
        }
    }

    .login {
        background-color: #f3f3f3;
        padding: 2rem;
        color: #a4a4a4;
        font-size: 90%;

        a {
            color: #ec017e;
            text-decoration: none;
        }
    }
`

const AccentButton = styled.button`
    border: 3px solid #ec017e;
    color: #ec017e;
    background-color: transparent;
    font-size: 1.25rem;
    padding: 1rem;
    border-radius: 5px;
    cursor: pointer;
`

export default () => <>
    <MyForm>
        <div className="container">
            <div className="title">
                <h1>Cadastre-se</h1>
            </div>
            <div className="input">
                <label>Nome</label>
                <input name="name" />
            </div>
            <div className="input">
                <label>E-mail</label>
                <input name="addres" />
            </div>
            <div className="input">
                <label>Senha</label>
                <input type="password" name="password" />
            </div>
            <div className="input">
                <label>Repetir senha</label>
                <input type="password" name="password" />
            </div>
            <div className="action">
              <AccentButton>Criar Conta</AccentButton>
            </div>
        </div>
        <div className="login">
            Já tem uma conta?, <Link to="/">Clique aqui!</Link>
        </div>
    </MyForm>
</>