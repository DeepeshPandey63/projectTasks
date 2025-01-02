import React from'react';

const Loginpage=()=>
{
    return (
        <div>
            <header>
                <h1>Login Page</h1>
            </header>
            <form>
                <lable>email id:</lable>
                <input type='text' placeholder='user@email.com' />
                <lable>password:</lable>
                <input type='password' placeholder='password'/>
                <button type='submit'>login</button>
                <br />
                <a href="/signin">Doesn't have a account? Make One.</a>
            </form>
        </div>
    )
}

export default Loginpage;
