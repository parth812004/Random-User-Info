function showData()
{
    fetch('https://randomuser.me/api')
    .then((data) => {
        let result = data.json();
        return result;
    })
    .then((result) => {
        let user = result.results[0];

        let profilePic = user?.picture?.large;
        document.querySelector('#profile-pic').src = profilePic;

        let fullName = `${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`;
        document.querySelector('#userTitle').innerText = `Hi! My name is`;
        document.querySelector('#detail').innerText = `${fullName}`;
        document.querySelector('#user').addEventListener('mouseover',function(){
            document.querySelector('#userTitle').innerText = `Hi! My name is`;
            document.querySelector('#detail').innerText = `${fullName}`;
        });

        let email = `${user?.email}`;
        document.querySelector('#email').addEventListener('mouseover',function(){
            document.querySelector('#userTitle').innerText = `Hi! My email address is`;
            document.querySelector('#detail').innerText = `${email}`;
        });

        let fullDOB = `${user?.dob?.date}`;
        let actualDOB = fullDOB.slice(0,10);
        let date = actualDOB.slice(8,10);
        let month = actualDOB.slice(5,7);
        let year = actualDOB.slice(0,4);
        document.querySelector('#dob').addEventListener('mouseover',function(){
            document.querySelector('#userTitle').innerText = `Hi! My Date of Birth is`;
            document.querySelector('#detail').innerText = `${date}/${month}/${year}`;
        });

        let phone = `${user?.phone}`;
        document.querySelector('#phone').addEventListener('mouseover',function(){
            document.querySelector('#userTitle').innerText = `Hi! My Phone Number is`;
            document.querySelector('#detail').innerText = `${phone}`;
        });

        let address = `${user?.location?.street.number}, ${user?.location?.street.name}`;
        document.querySelector('#address').addEventListener('mouseover',function(){
            document.querySelector('#userTitle').innerText = `Hi! My address is`;
            document.querySelector('#detail').innerText = `${address}`;
        });

        let password = `${user?.login?.password}`;
        document.querySelector('#password').addEventListener('mouseover',function(){
            document.querySelector('#userTitle').innerText = `Hi! My login password is`;
            document.querySelector('#detail').innerText = `${password}`;
        });
    })

    document.querySelector('.card').addEventListener('onmouseup', function(){
        document.querySelector('#userTitle').innerText = `Hover over icons below to see my details!`;
    })
}
showData();