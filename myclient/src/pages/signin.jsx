import React from'react';

const Signinpage=()=>
{
    return (
        <div>
            <header>
                <h1>Sign in Page</h1>
            </header>
            <form>
                <lable> User Name:</lable>
                <input type='text' placeholder='username'/>
                <lable>email id:</lable>
                <input type='text' placeholder='user@email.com' />
                <lable>password:</lable>
                <input type='password' placeholder='password'/>
                <br/>
                <lable>gender:</lable>
                <label>
      <input type="radio" name="gender" value="Male" id="male"/>
      Male
    </label>
    <br/>

    <label>
      <input type="radio" name="gender" value="Female" id="female"/>
      Female
    </label>
    <br/>

    <label>
      <input type="radio" name="gender" value="Other" id="other"/>
      Other
    </label>
    <br/>

    <label>
      <input type="radio" name="gender" value="Prefer Not to Say" id="preferNotToSay"/>
      Prefer Not to Say
    </label>
    <br/>
    <button type='submit'>signin</button>
    <br />
    <a href="/login">Have Account Already? Login.</a>
    </form>
    </div>
    )
}

export default Signinpage;
