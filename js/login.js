function login() {

    // Elements
    const loginForm = document.querySelector(".login-form")
    const inputEmail = document.querySelector(".login-form .input-email")
    const inputPass = document.querySelector(".login-form .input-pass")
    const btnLoginForm = document.querySelector(".login-form .button-link")
    
    
    // Getting user's info
    loginForm.addEventListener("submit", e =>{

        const email = inputEmail.value
        const pass = inputPass.value

        // validating white spaces
        if(email.trim() === ""){
            message("Digite um email válido", false)
            return
        }
        if(pass.trim() === ""){
            message("Digite uma senha válida", false)
            return
        }


        // Validating infos
        const dbUsersArr = users()
        
        if(dbUsersArr.length === 0){
            message("O banco de dados de usuários está vazio.", false)
            return
        }else if(dbUsersArr.length > 0){
            let notExist = 0
            dbUsersArr.map((dbUser) =>{
                const existUser = dbUser.email === email
                if(existUser){
                    const correctPass = dbUser.password === pass 
                    if(correctPass){
                        pagesChanger("logged")
                        message("Usuário autenticado!", true)
                        return
                    }
                    message("Senha ou usuário incorretos", false)
                    return
                }else{
                    notExist++
                }
            })
            if(notExist > 0){
                message("O usuário não existe", false)
            }
            return
        }

        const user = {
            email: inputEmail.value,
            password: inputPass.value,
        }

        console.log(user)

    })


}