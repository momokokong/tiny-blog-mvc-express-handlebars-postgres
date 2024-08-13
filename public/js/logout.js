// button listner on the logout button that redirect the browser to the /logout route

const logout = () => {
    document.location.replace('/logout');
};

document.querySelector('#logout').addEventListener('click', logout);
